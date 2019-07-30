var mongoose = require('mongoose');

var pictureSchema = mongoose.Schema({
    pictureName: String,
    pictureUrl: String,

});


module.exports = mongoose.model('pictures', pictureSchema);
