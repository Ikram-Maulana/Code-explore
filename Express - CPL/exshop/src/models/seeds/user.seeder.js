// Make user seeds
const db = require('../index');
const User = db.user;

exports.userSeed = () => {
  User.create({
    name: 'Ikram',
    phone: '085156590021',
    email: 'ikram@gmail.com',
    password: '$2b$08$nrv/INI3FnsqIkSaGDEqmugfi1RdLMb7ttCH2m5sPDUQFtVzAg57m'
  });
};