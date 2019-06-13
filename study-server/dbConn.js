var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/BEProject";
var url = "mongodb+srv://mihir:mihir@cluster0-rfpzz.gcp.mongodb.net/BEProject?retryWrites=true&w=majority"
var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/RoomBooking', { useNewUrlParser: true });
// var db = mongoose.connection;


mongoose.connect(url, { useNewUrlParser: true }).then(
    () => {
        console.log('connected to db');
    },
    (err) => {
        throw err;
    }
);
module.exports = mongoose.connection;