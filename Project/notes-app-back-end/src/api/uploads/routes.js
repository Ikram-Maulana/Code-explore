const routes = (handler) => [{
  method: 'POST',
  path: '/upload/images',
  handler: handler.postUploadImagesHandler,
  options: {
    payload: {
      allow: 'multipart/form-data',
      multipart: true,
      output: 'stream',
    },
  },
}];

module.exports = routes;
