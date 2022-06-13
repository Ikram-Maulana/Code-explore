const {
  Pool,
} = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylists(playlistId) {
    // query playlist id and name
    const queryPlaylist = {
      text: `SELECT playlists.id, playlists.name FROM playlists_songs
      JOIN playlists ON playlists_songs.playlist_id = playlists.id 
      WHERE playlists_songs.playlist_id = $1`,
      values: [playlistId],
    };

    // query songs
    const querySongs = {
      text: `SELECT songs.id, songs.title, songs.performer FROM playlists_songs
        JOIN songs ON playlists_songs.song_id = songs.id
        WHERE playlists_songs.playlist_id = $1`,
      values: [playlistId],
    };

    const playlist = await this._pool.query(queryPlaylist);
    const songs = await this._pool.query(querySongs);

    return {
      playlist: {
        id: playlist.rows[0].id,
        name: playlist.rows[0].name,
        songs: songs.rows,
      },
    };
  }
}

module.exports = PlaylistsService;
