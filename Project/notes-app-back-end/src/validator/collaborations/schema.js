const Joi = require('joi');

const CollaborationsPayloadSchema = Joi.isSchema({
  noteId: Joi.string().required(),
  userId: Joi.string().required(),
});

module.exports = {
  CollaborationsPayloadSchema,
};
