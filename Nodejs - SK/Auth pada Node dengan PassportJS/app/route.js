module.exports = function (app, passport) {

  // Halaman Home
  app.get('/', (req, res) => {
    res.render('index');
  });

  // Halaman Login
  app.get('/login', (req, res) => {
    const data = {
      message: req.flash('loginMessage')
    }
    res.render('login', data);
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  // Logout
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Halaman Sign Up
  app.get('/signup', (req, res) => {
    const data = {
      message: req.flash('signupMessage')
    }
    res.render('signup', data);
  })

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  // Halaman Profile
  app.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
  });

};

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}