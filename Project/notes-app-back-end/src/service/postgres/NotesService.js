const {
  Pool,
} = require('pg');

class NotesService {
  constructor() {
    this._pool = new Pool();
  }
}

module.exports = NotesService;
