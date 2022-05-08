const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./service/inMemory/NotesService');
const NoteValidator = require('./validator/notes');
// require env
require('dotenv').config();

const init = async () => {
  const noteService = new NotesService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Register plugin
  await server.register({
    plugin: notes,
    options: {
      service: noteService,
      validator: NoteValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
