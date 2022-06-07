// mengimpor dotenv dan menjalankan konfigurasinya
require('dotenv').config();

const Hapi = require('@hapi/hapi');
const Jwt = require('@hapi/jwt');
const Inert = require('@hapi/inert');
const path = require('path');

// albums
const Albums = require('./api/albums');
const AlbumsService = require('./service/postgres/AlbumsService');
const AlbumsValidator = require('./validator/albums');

// songs
const Songs = require('./api/songs');
const SongsService = require('./service/postgres/SongsService');
const SongsValidator = require('./validator/songs');

// users
const Users = require('./api/users');
const UsersService = require('./service/postgres/UsersService');
const UsersValidator = require('./validator/users');

// authentications
const Authentications = require('./api/authentications');
const AuthenticationsService = require('./service/postgres/AuthenticationsService');
const AuthenticationsValidator = require('./validator/authentications');
const TokenManager = require('./tokenize/TokenManager');

// Playlists
const Playlists = require('./api/playlists');
const PlaylistsService = require('./service/postgres/PlaylistsService');
const PlaylistsValidator = require('./validator/playlists');

// Collaborations
const Collaborations = require('./api/collaborations');
const CollaborationsService = require('./service/postgres/CollaborationsService');
const CollaborationsValidator = require('./validator/collaborations');

// Exports
const _Export = require('./api/exports');
const ProducerService = require('./service/rabbitmq/ProducerService');
const ExportsValidator = require('./validator/exports');

// Storage
const StorageService = require('./service/storage/StorageService');

// Cache
const CacheService = require('./service/redis/CacheService');

const init = async () => {
  const cacheService = new CacheService();
  const albumsService = new AlbumsService(cacheService);
  const songsService = new SongsService(cacheService);
  const usersService = new UsersService();
  const authenticationsService = new AuthenticationsService();
  const collaborationsService = new CollaborationsService(cacheService);
  const playlistsService = new PlaylistsService(collaborationsService, cacheService);
  const storageService = new StorageService(path.resolve(__dirname, 'api/albums/file/covers'));

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Register external plugin
  await server.register([{
    plugin: Jwt,
  },
  {
    plugin: Inert,
  },
  ]);

  // Strategy auth jwt
  server.auth.strategy('openmusic_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifact) => ({
      isValid: true,
      credentials: {
        id: artifact.decoded.payload.id,
      },
    }),
  });

  // Register Plugin for Albums and Songs
  await server.register([{
    plugin: Albums,
    options: {
      service: albumsService,
      storageService: storageService,
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
  {
    plugin: Users,
    options: {
      service: usersService,
      validator: UsersValidator,
    },
  },
  {
    plugin: Authentications,
    options: {
      authenticationsService,
      usersService,
      tokenManager: TokenManager,
      validator: AuthenticationsValidator,
    },
  },
  {
    plugin: Playlists,
    options: {
      service: playlistsService,
      validator: PlaylistsValidator,
    },
  },
  {
    plugin: Collaborations,
    options: {
      collaborationsService,
      playlistsService,
      validator: CollaborationsValidator,
    },
  },
  {
    plugin: _Export,
    options: {
      producerService: ProducerService,
      playlistsService,
      validator: ExportsValidator,
    },
  },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
