// All our requires/dependencies
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

// Setup database
mongoose.connect('mongodb://localhost:27017/tunr-musc-playr')

// create app
var app = express()

// Create artist instance from Class
var Artist = require('./models/Artist.js');

var artist = new Artist({
  name: 'Lauren Ipsum',
  cover: 'http://placehold.it/300x300',
  songs: ['One', 'Two', 'Three']
});

// run it
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//
// // create public directory for assets
app.use(express.static('public'))

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function( req , res ) {
  // app index

  Artist.find({}, function(err, artist){
    if ( err ){
      // error
      res.send('Error!' + err )
    } else {
      res.render('index', {artist: artist})
    }
  });
})

app.get('/artist/:id', function( req, res ) {
  // artist detail page
  Artist.findById(req.params.id, function( err, artist ) {
    res.render('show',  artist)
  })
})

app
  .get('/artist/new', function( req, res ) {
    // view for creating new artist
  })
  .post('/artist/new', function( req, res ) {
    // create new artist in db from user search
  })


app.listen( 3001, function() {
  console.log( 'listening to radio frequency: 3001.' )
})
