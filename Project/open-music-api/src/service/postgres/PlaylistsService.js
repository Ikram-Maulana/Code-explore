const {
  nanoid,
} = require('nanoid');
const {
  Pool,
} = require('pg');
const AuthorizationError = require('../../exceptions/AuthorizationError');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');
const {mapDBActivityToModel} = require('../../utils');

class PlaylistsService {
  constructor(collaborationsService, cacheService) {
    this._pool = new Pool();
    this._collaborationsService = collaborationsService;
    this._cacheService = cacheService;
  }

  async addPlaylist({
    name,
    owner,
  }) {
    const id = `playlist-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO playlists VALUES($1, $2, $3) RETURNING id',
      values: [id, name, owner],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Playlist gagal ditambahkan');
    }

    await this._cacheService.delete(`playlists:${owner}`);
    return result.rows[0].id;
  }

  async addSongToPlaylist(playlistId, songId) {
    // Check playlists
    const queryPlaylist = {
      text: 'SELECT * FROM playlists WHERE id = $1',
      values: [playlistId],
    };

    const resultPlaylist = await this._pool.query(queryPlaylist);
    if (!resultPlaylist.rows.length) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    // Check songs
    const querySong = {
      text: 'SELECT * FROM songs WHERE id = $1',
      values: [songId],
    };

    const resultSong = await this._pool.query(querySong);
    if (!resultSong.rows.length) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }

    const id = `psongs-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO playlists_songs VALUES($1, $2, $3) RETURNING id',
      values: [id, playlistId, songId],
    };

    const result = await this._pool.query(query);
    if (!result.rows[0].id) {
      throw new InvariantError('Lagu gagal ditambahkan ke playlist');
    }

    await this._cacheService.delete(`playlistsSong:${playlistId}`);
    return result.rows[0].id;
  }

  async addToPlaylistActivity(playlistId, userId, songId, action) {
    const queryUser = {
      text: 'SELECT username FROM users WHERE id = $1',
      values: [userId],
    };

    const resultUser = await this._pool.query(queryUser);
    const username = resultUser.rows[0].username;

    const querySong = {
      text: 'SELECT title FROM songs WHERE id = $1',
      values: [songId],
    };

    const resultSong = await this._pool.query(querySong);
    const songTitle = resultSong.rows[0].title;

    const id = `psong_activity-${nanoid(16)}`;
    const time = new Date().toISOString;

    const query = {
      text: 'INSERT INTO playlist_song_activities VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, playlistId, songTitle, username, action, time],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Aktivitas Playlist gagal ditambahkan');
    }

    // console.log(playlistId, username, songTitle, action);
    return result.rows[0].id;
  }

  async getPlaylists(owner) {
    try {
      const result = await this._cacheService.get(`playlists:${owner}`);
      return {
        dataSource: 'cache',
        playlist: JSON.parse(result),
      };
    } catch (error) {
      const query = {
        text: `SELECT playlists.id, playlists.name, users.username FROM playlists
        LEFT JOIN users ON users.id = playlists.owner 
        LEFT JOIN collaborations on collaborations.playlist_id = playlists.id
        WHERE playlists.owner = $1 OR collaborations.user_id = $1`,
        values: [owner],
      };
      const result = await this._pool.query(query);

      await this._cacheService.set(`playlists:${owner}`, JSON.stringify(result.rows));

      return {
        dataSource: 'database',
        playlist: result.rows,
      };
    }
  }

  async getPlaylistById(id) {
    try {
      const result = await this._cacheService.get(`playlistsSong:${id}`);
      return {
        dataSource: 'cache',
        playlistSong: JSON.parse(result),
      };
    } catch (error) {
      const queryPlaylist = {
        text: `SELECT playlists.id, playlists.name, users.username FROM playlists 
        LEFT JOIN users ON users.id = playlists.owner 
        WHERE playlists.id = $1`,
        values: [id],
      };

      const resultPlaylist = await this._pool.query(queryPlaylist);

      if (!resultPlaylist.rows.length) {
        throw new NotFoundError('Playlist tidak ditemukan');
      }

      const querySongs = {
        text: `SELECT songs.id, songs.title, songs.performer FROM songs 
        JOIN playlists_songs ON playlists_songs.song_id = songs.id 
        WHERE playlists_songs.playlist_id = $1`,
        values: [id],
      };

      const resultSongs = await this._pool.query(querySongs);
      const resultPlaylistsSong = {
        ...resultPlaylist.rows[0],
        songs: resultSongs.rows,
      };

      await this._cacheService.set(`playlistsSongs:${id}`, JSON.stringify(resultPlaylistsSong));

      return {
        dataSource: 'database',
        playlistSong: resultPlaylistsSong,
      };
    }
  }

  async getPlaylistSongActivity(playlistId) {
    const query = {
      text: `SELECT * FROM playlist_song_activities WHERE playlist_id = $1`,
      values: [playlistId],
    };

    const {
      rows,
    } = await this._pool.query(query);

    if (!rows.length) {
      throw new NotFoundError('Playlist Activity tidak ditemukan');
    }

    return rows.map(mapDBActivityToModel);
  }

  async deletePlaylistById(id) {
    const query = {
      text: 'DELETE FROM playlists WHERE id = $1 RETURNING id, owner',
      values: [id],
    };

    const result = await this._pool.query(query);
    const {
      owner,
    } = result.rows[0];
    await this._cacheService.delete(`playlists:${owner}`);
  }

  async deleteSongFromPlaylist(playlistId, songId) {
    const query = {
      text: 'DELETE FROM playlists_songs WHERE playlist_id = $1 AND song_id = $2 RETURNING id',
      values: [playlistId, songId],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal menghapus lagu dari playlist');
    }

    await this._cacheService.delete(`playlistsSongs:${playlistId}`);
  }

  async verifyPlaylistOwner(id, owner) {
    const query = {
      text: 'SELECT owner FROM playlists WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    const playlist = result.rows[0];

    if (playlist.owner !== owner) {
      throw new AuthorizationError('Anda tidak berhak mengakses resource ini');
    }
  }

  async verifyPlaylistAccess(playlistId, userId) {
    try {
      await this.verifyPlaylistOwner(playlistId, userId);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }

      try {
        await this._collaborationsService.verifyCollaborator(playlistId, userId);
      } catch {
        throw error;
      }
    }
  }
}

module.exports = PlaylistsService;
