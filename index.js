//Dependencies
const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const washerRoutes = require('./routes/washerRoutes');
require('dotenv').config();
const mongoose = require('mongoose');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const passport = require('passport');
const User = require('./models/User')

//Instantiations
const app = express();

//Database Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var loginChecker = function (req, res, next) {
  if (req.path != '/' &&req.path != '/' && !req.session.user) {
    res.redirect('/')
  }
  next()
};
app.use(loginChecker)

//Routes
app.use('/', loginRoutes);
app.use('/home', homeRoutes);
app.use('/washers', washerRoutes);
app.use('/userRegister', userRoutes);
app.use('/vehicles', vehicleRoutes);

app.get('*', (req, res) => {
    res.send('The route specified doesnt exist')
});

//Bootstrapping Server
app.listen(3020, () => console.log('App listening on port 3020!'));