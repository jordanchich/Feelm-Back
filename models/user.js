var mongoose = require('mongoose');
var pictureSchema = mongoose.Schema({
    pictureName: String,
    pictureUrl: String,
    smile: Number,
    age: String,

});
var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    picture: String,
    facebookid: String,
    pictures: [pictureSchema],
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

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;

