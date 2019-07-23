var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
   };

   mongoose.connect("mongodb+srv://feelmprojet@gmail.com:lacapsule2019!@cluster0-rqyme.mongodb.net/feelm?retryWrites=true&w=majority",
   options,
   function(err) {
    if (err) {
      console.log(err);
    } else {
      console.info('connexion ok');
    }
   }
);

module.exports = mongoose;