exports.up = (pgm) => {
  pgm.createTable('authentications', {
    token: {
      type: 'TEXT',
      notNUll: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('authentications');
};
