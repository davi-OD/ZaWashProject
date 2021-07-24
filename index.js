//Dependencies
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

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

//Routes
app.get('/', (req,res) => {
    res.render("Welcome ZaWash")
});
// app.use('/', homeRoutes);

app.get('*', (req, res) => {
    res.send('The route specified doesnt exist')
});

//Bootstrapping Server
app.listen(3020, () => console.log('App listening on port 3020!'));