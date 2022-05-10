const Hapi = require('@hapi/hapi');
const AlbumsService = require('./service/postgres/AlbumsService');
const SongsService = require('./service/postgres/SongsService');
const Albums = require('./api/albums');
const Songs = require('./api/songs');
const AlbumsValidator = require('./validator/albums');
const SongsValidator = require('./validator/songs');
require('dotenv').config();

const init = async () => {
  const albumsService = new AlbumsService();
  const songsService = new SongsService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Register Plugin for Albums and Songs
  await server.register([{
    plugin: Albums,
    options: {
      service: albumsService,
      validator: AlbumsValidator,
    },
  },
  {
    plugin: Songs,
    options: {
      service: songsService,
      validator: SongsValidator,
    },
  },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
