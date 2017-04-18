// https://developer.spotify.com/web-api/get-artist/
// GET https://api.spotify.com/v1/artists/{id}


var mongoose = require('mongoose')
var Schema = mongoose.Schema

var data = fetch('https://api.spotify.com/v1/artists/');

var artistSchema = new Schema({
  // name: data.name,
  // cover: data.images[0].url
  // // songs: Array
})

var Artist = mongoose.model( 'Artist', artistSchema )

module.exports = Artist
