// Requirement
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Set Up
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

let whiteList = ['http://localhost:8080']
let corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

// Database
const db = require('./models/index');
const seed = require('./models/seeds/index');
db.sequelize.
// sync({
//   force: true
// })
sync().then(() => {
  // seed.userSeed();
  // seed.categorySeed();
  console.log('Database connected');
}).catch(err => {
  console.error(`Database connection error: ${err.message}`);
});

// Route
app.get('/', (req, res) => {
  res.json({
    message: 'Server is running...'
  })
});

require('./routes/auth.routes')(app);
require('./routes/profile.routes')(app);

// Listen
const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});