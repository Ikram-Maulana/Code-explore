const ClientError = require('../../exceptions/ClientError');

class PlaylistsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postPlaylistsHandler = this.postPlaylistsHandler.bind(this);
    this.postPlaylistSongHandler = this.postPlaylistSongHandler.bind(this);
    this.getPlaylistsHandler = this.getPlaylistsHandler.bind(this);
    this.getPlaylistByIdHandler = this.getPlaylistByIdHandler.bind(this);
    this.getPlaylistActivitiesHandler = this.getPlaylistActivitiesHandler.bind(this);
    this.deletePlaylistByIdHandler = this.deletePlaylistByIdHandler.bind(this);
    this.deletePlaylistSongHandler = this.deletePlaylistSongHandler.bind(this);
  }

  async postPlaylistsHandler(request, h) {
    try {
      this._validator.validatePostPlaylistsPayload(request.payload);
      const {
        name,
      } = request.payload;
      const {
        id: credentialId,
      } = request.auth.credentials;

      const playlistId = await this._service.addPlaylist({
        name,
        owner: credentialId,
      });

      const response = h.response({
        status: 'success',
        message: 'Playlist berhasil ditambahkan',
        data: {
          playlistId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      return response;
    }
  }

  async postPlaylistSongHandler(request, h) {
    try {
      this._validator.validatePostPlaylistSongPayload(request.payload);
      const {
        id: playlistId,
      } = request.params;
      const {
        songId,
      } = request.payload;
      const {
        id: credentialId,
      } = request.auth.credentials;

      await this._service.verifyPlaylistAccess(playlistId, credentialId);
      const playlistSongId = await this._service.addSongToPlaylist(playlistId, songId);

      await this._service.addToPlaylistActivity(playlistId, credentialId, songId, 'add');

      const response = h.response({
        status: 'success',
        message: 'Lagu berhasil ditambahkan ke playlist',
        data: {
          playlistSongId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      return response;
    }
  }

  async getPlaylistsHandler(request, h) {
    try {
      const {
        id: credentialId,
      } = request.auth.credentials;

      const playlists = await this._service.getPlaylists(credentialId);
      return {
        status: 'success',
        data: {
          playlists,
        },
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      return response;
    }
  }

  async getPlaylistByIdHandler(request, h) {
    try {
      const {
        id,
      } = request.params;
      const {
        id: credentialId,
      } = request.auth.credentials;

      await this._service.verifyPlaylistAccess(id, credentialId);
      const playlist = await this._service.getPlaylistById(id);

      return {
        status: 'success',
        data: {
          playlist,
        },
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      return response;
    }
  }

  async getPlaylistActivitiesHandler(request, h) {
    try {
      const {
        id,
      } = request.params;
      const {
        id: credentialId,
      } = request.auth.credentials;

      await this._service.verifyPlaylistAccess(id, credentialId);
      const activities = await this._service.getPlaylistSongActivity(id);

      // console.log(`
      //   playlistId: ${id},
      //   ${activities[0].username},
      //   ${activities[0].title}
      // `);

      return {
        status: 'success',
        data: {
          playlistId: id,
          activities: activities,
        },
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      return response;
    }
  }

  async deletePlaylistByIdHandler(request, h) {
    try {
      const {
        id,
      } = request.params;
      const {
        id: credentialId,
      } = request.auth.credentials;

      await this._service.verifyPlaylistOwner(id, credentialId);
      await this._service.deletePlaylistById(id);

      return {
        status: 'success',
        message: 'Playlist berhasil dihapus',
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      return response;
    }
  }

  async deletePlaylistSongHandler(request, h) {
    try {
      this._validator.validateDeletePlaylistSongPayload(request.payload);
      const {
        id: playlistId,
      } = request.params;
      const {
        songId,
      } = request.payload;
      const {
        id: credentialId,
      } = request.auth.credentials;

      await this._service.verifyPlaylistAccess(playlistId, credentialId);
      await this._service.deleteSongFromPlaylist(playlistId, songId);
      await this._service.addToPlaylistActivity(playlistId, credentialId, songId, 'delete');

      return {
        status: 'success',
        message: 'Lagu berhasil dihapus dari playlist',
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      return response;
    }
  }
}

module.exports = PlaylistsHandler;
