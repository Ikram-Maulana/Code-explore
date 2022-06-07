exports.up = (pgm) => {
  pgm.addColumns('albums', {
    cover: {
      type: 'varchar(255)',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumns('albums', 'cover');
};
