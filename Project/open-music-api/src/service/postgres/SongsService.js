const {
  Pool,
} = require('pg');
const {
  nanoid,
} = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const {
  mapDBSongsToModel,
  mapDBDetailSongsToModel,
} = require('../../utils');
const NotFoundError = require('../../exceptions/NotFoundError');

class SongsService {
  constructor(cacheService) {
    this._pool = new Pool();
    this._cacheService = cacheService;
  }

  async addSong({
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
  }) {
    const id = `song-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO songs (id, title, year, genre, performer, duration, album_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id, album_id',
      values: [id, title, year, genre, performer, duration, albumId],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Lagu gagal ditambahkan');
    }

    const {
      album_id,
    } = result.rows[0];
    await this._cacheService.delete(`albumSong:${album_id}`);

    return result.rows[0].id;
  }

  async getSongs({
    title,
    performer,
  }) {
    let query;

    if (title !== undefined && performer !== undefined) {
      query = {
        text: 'SELECT id, title, performer FROM songs WHERE title ILIKE $1 AND performer ILIKE $2',
        values: [`%${title}%`, `%${performer}%`],
      };
    } else if (title !== undefined) {
      query = {
        text: 'SELECT id, title, performer FROM songs WHERE title ILIKE $1',
        values: [`%${title}%`],
      };
    } else if (performer !== undefined) {
      query = {
        text: 'SELECT id, title, performer FROM songs WHERE performer ILIKE $1',
        values: [`%${performer}%`],
      };
    } else {
      query = {
        text: 'SELECT id, title, performer FROM songs',
        values: [],
      };
    }

    const result = await this._pool.query(query);
    return result.rows.map(mapDBSongsToModel);
  }

  async getSongById(id) {
    const query = {
      text: 'SELECT * FROM songs WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }

    return result.rows.map(mapDBDetailSongsToModel)[0];
  }

  async editSongById(id, {
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
  }) {
    const query = {
      text: 'UPDATE songs SET title = $1, year = $2, genre = $3, performer = $4, duration = $5, album_id = $6 WHERE id = $7 RETURNING id, album_id',
      values: [title, year, genre, performer, duration, albumId, id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal memperbarui song. Id tidak ditemukan');
    }

    const {
      album_id,
    } = result.rows[0];
    await this._cacheService.delete(`albumSong:${album_id}`);
  }

  async deleteSongById(id) {
    const query = {
      text: 'DELETE FROM songs WHERE id = $1 RETURNING id, album_id',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal menghapus song. Id tidak ditemukan');
    }

    const {
      album_id,
    } = result.rows[0];
    await this._cacheService.delete(`albumSong:${album_id}`);
  }
}

module.exports = SongsService;
