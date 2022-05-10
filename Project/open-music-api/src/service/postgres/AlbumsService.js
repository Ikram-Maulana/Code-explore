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
  constructor() {
    this._pool = new Pool();
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

    return {
      ...result.rows.map(mapDBAlbumsToModel)[0],
      songs: resultSongs.rows.map(mapDBSongsToModel),
    };
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
  }
}

module.exports = AlbumsService;
