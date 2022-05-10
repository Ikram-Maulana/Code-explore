const albumsRoutes = (handler) => [
  {
    path: '/albums',
    method: 'POST',
    handler: handler.postAlbumHandler,
  },
  {
    path: '/albums',
    method: 'GET',
    handler: handler.getAlbumsHandler,
  },
  {
    path: '/albums/{id}',
    method: 'GET',
    handler: handler.getAlbumByIdHandler,
  },
  {
    path: '/albums/{id}',
    method: 'PUT',
    handler: handler.putAlbumByIdHandler,
  },
  {
    path: '/albums/{id}',
    method: 'DELETE',
    handler: handler.deleteAlbumByIdHandler,
  },
];

module.exports = albumsRoutes;
