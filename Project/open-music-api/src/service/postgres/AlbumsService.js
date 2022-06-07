const {
  Pool,
} = require('pg');
const {
  nanoid,
} = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const {
  mapDBAlbumsToModel,
  mapDBSongsToModel,
} = require('../../utils');
const NotFoundError = require('../../exceptions/NotFoundError');

class AlbumsService {
  constructor(cacheService) {
    this._pool = new Pool();
    this._cacheService = cacheService;
  }

  async addAlbum({
    name,
    year,
  }) {
    const id = `album-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO albums (id, name, year) VALUES($1, $2, $3) RETURNING id',
      values: [id, name, year],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Album gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  async getAlbums() {
    const result = await this._pool.query('SELECT * FROM albums');
    return result.rows.map(mapDBAlbumsToModel);
  }

  async getAlbumById(id) {
    try {
      const result = await this._cacheService.get(`albumSong:${id}`);

      return {
        dataSource: 'cache',
        album: JSON.parse(result),
      };
    } catch (error) {
      const query = {
        text: 'SELECT * FROM albums WHERE id = $1',
        values: [id],
      };

      const result = await this._pool.query(query);

      const querySongs = {
        text: 'SELECT (id, title, performer) FROM songs WHERE album_id = $1',
        values: [id],
      };

      const resultSongs = await this._pool.query(querySongs);

      if (!result.rows.length) {
        throw new NotFoundError('Album tidak ditemukan');
      }

      const albumSongs = {
        ...result.rows.map(mapDBAlbumsToModel)[0],
        songs: resultSongs.rows.map(mapDBSongsToModel),
      };

      await this._cacheService.set(`albumSong:${id}`, JSON.stringify(albumSongs));

      return {
        dataSource: 'database',
        album: albumSongs,
      };
    }
  }

  async editAlbumById(id, {
    name,
    year,
  }) {
    const query = {
      text: 'UPDATE albums SET name = $1, year = $2 WHERE id = $3 RETURNING id',
      values: [name, year, id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal memperbarui album. Id tidak ditemukan');
    }

    await this._cacheService.delete(`albumSong:${id}`);
  }

  async deleteAlbumById(id) {
    const query = {
      text: 'DELETE FROM albums WHERE id = $1 RETURNING id',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal menghapus album. Id tidak ditemukan');
    }

    await this._cacheService.delete(`albumSong:${id}`);
  }

  async addCoverToAlbum(id, cover) {
    const query = {
      text: 'UPDATE albums SET cover = $1 WHERE id = $2 RETURNING id',
      values: [cover, id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal menambahkan cover. Id tidak ditemukan');
    }

    await this._cacheService.delete(`albumSong:${id}`);
  }

  async addUserAlbumLikes(userId, albumId) {
    // Is Album exist
    const queryAlbum = {
      text: 'SELECT * FROM albums WHERE id = $1',
      values: [albumId],
    };

    const resultAlbum = await this._pool.query(queryAlbum);

    if (!resultAlbum.rows.length) {
      throw new NotFoundError('Album tidak ditemukan');
    }

    // Is User exist
    const queryUser = {
      text: 'SELECT * FROM users WHERE id = $1',
      values: [userId],
    };

    const resultUser = await this._pool.query(queryUser);

    if (!resultUser.rows.length) {
      throw new NotFoundError('User tidak ditemukan');
    }

    // Is like exists
    const queryLike = {
      text: 'SELECT * FROM user_album_likes WHERE user_id = $1 AND album_id = $2',
      values: [userId, albumId],
    };

    const resultLike = await this._pool.query(queryLike);

    if (!resultLike.rows.length) {
      const id = `ual-${nanoid(16)}`;

      const query = {
        text: 'INSERT INTO user_album_likes (id, user_id, album_id) VALUES($1, $2, $3) RETURNING id',
        values: [id, userId, albumId],
      };

      await this._pool.query(query);
      await this._cacheService.delete(`albumLikes:${albumId}`);

      return 'Berhasil menyukai album';
    } else {
      // If exists then delete
      const query = {
        text: 'DELETE FROM user_album_likes WHERE user_id = $1 AND album_id = $2 RETURNING id',
        values: [userId, albumId],
      };

      await this._pool.query(query);
      await this._cacheService.delete(`albumLikes:${albumId}`);

      return 'Berhasil menghapus like dari album';
    }
  }

  async getUserAlbumLikes(albumId) {
    try {
      const result = await this._cacheService.get(`albumLikes:${albumId}`);

      return {
        dataSource: 'cache',
        albumLikes: JSON.parse(result),
      };
    } catch (error) {
      // is album exist
      const queryAlbum = {
        text: 'SELECT * FROM albums WHERE id = $1',
        values: [albumId],
      };

      const resultAlbum = await this._pool.query(queryAlbum);

      if (!resultAlbum.rows.length) {
        throw new NotFoundError('Album tidak ditemukan');
      }

      // Count likes
      const query = {
        text: 'SELECT COUNT(user_id) FROM user_album_likes WHERE album_id = $1',
        values: [albumId],
      };

      const result = await this._pool.query(query);
      const resultAlbumLikes = Number(result.rows[0].count);
      await this._cacheService.set(`albumLikes:${albumId}`, JSON.stringify(resultAlbumLikes));

      return {
        dataSource: 'database',
        albumLikes: resultAlbumLikes,
      };
    }
  }
}

module.exports = AlbumsService;
