var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password: String,
    avatar : String,
    moviesWhishlist:[
        { 
          movie_id: Number, 
          poster_path: String 
        } 
     ],
    seriesWhishlist:[
        { 
          tv_id: Number, 
          poster_path: String 
        } 
     ],
    likedMovies:[
        { 
            movie_id: Number, 
            poster_path: String 
        } 
     ],
    likedSeries:[
        { 
            tv_id: Number, 
            poster_path: String 
        } 
     ],
    unlikedMovies:[
        { 
            movie_id: Number, 
            poster_path: String 
        } 
     ],
    unlikedSeries:[
        { 
            tv_id: Number, 
            poster_path: String 
        } 
     ],

   });

const moviesModel = mongoose.model('movies', moviesSchema);

module.exports = moviesModel;

