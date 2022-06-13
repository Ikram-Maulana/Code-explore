exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(36)',
      primaryKey: true,
    },
    title: {
      type: 'text',
      notNull: true,
    },
    year: {
      type: 'integer',
      notNull: true,
    },
    genre: {
      type: 'text',
      notNull: true,
    },
    performer: {
      type: 'text',
      notNull: true,
    },
    duration: {
      type: 'integer',
    },
    album_id: {
      type: 'VARCHAR(36)',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};
