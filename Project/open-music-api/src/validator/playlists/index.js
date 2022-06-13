const InvariantError = require('../../exceptions/InvariantError');
const {
  PostPlaylistsPayloadSchema,
  PostPlaylistsSongPayloadSchema,
  DeletePlaylistsSongPayloadSchema,
} = require('./schema');

const PlaylistsValidator = {
  validatePostPlaylistsPayload: (payload) => {
    const validationResult = PostPlaylistsPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePostPlaylistSongPayload: (payload) => {
    const validationResult = PostPlaylistsSongPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateDeletePlaylistSongPayload: (payload) => {
    const validationResult = DeletePlaylistsSongPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PlaylistsValidator;
