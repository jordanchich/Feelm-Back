var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    picture: String,
    facebookid: String,
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

const moviesModel = mongoose.model('users', moviesSchema);

module.exports = moviesModel;

