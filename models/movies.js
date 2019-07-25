var mongoose = require('mongoose');




var avecqui = mongoose.Schema({
    seul: String,
    enfants: String,
    compagnon: String,
    amis: String,
    famille: String,
});
var mood = mongoose.Schema({
    heureux: String,
    triste: String,
    second: String,
    endormir: String,
    réfléchir: String,
    surpris: String,
    tete: String,
    evasion: String,
});


var moviesSchema = mongoose.Schema({
    id: Number,
    genres: Array,
    poster_path: String,
    release_date: Date,
    overview: String,
    popularity: Number,
    title: String,
    vote_average: Number,
    vote_count: Number,
    mood: [mood],
    avec_qui: [avecqui],
});


module.exports = mongoose.model('movies', moviesSchema);