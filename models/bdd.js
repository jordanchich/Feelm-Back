var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
   };

  mongoose.connect('mongodb+srv://feelm:feelm@cluster0-7jphz.mongodb.net/feelmapp?retryWrites=true&w=majority',
   options,
   function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Mongo connecté ========= OK');
    }
   }
);

module.exports = mongoose;