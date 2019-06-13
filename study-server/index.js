const express = require('express')
var cors = require('cors');
// var User = require('./models/user.model')

const userRouter = require("./routes/user.routes");
const requestRouter = require("./routes/request.routes")
const summaryRouter = require('./routes/summary.routes')
const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server running at port ' + port);
})


app.get('/', function (req, res) {
    console.log('/');
    // const user = new User();
    res.json('Connected');
})
app.use('/user', userRouter);
app.use('/request', requestRouter)
app.use('/summary', summaryRouter)

// app.get('/data', function (req, res) {
//     console.log('/data');
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("book-room");
//         dbo.collection("users").find().project({_id: 0}).toArray(function (err, result) {
//             if (err) throw err;
//             console.log(result);
//             res.send(result);

//             // db.close();
//         });
//     });
// })

// app.post('/user/login', function(req, res) {
//     const pwd = req.body.pwd;
//     const email = req.body.email;
//     console.log(req.body);
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("book-rooms");
//         dbo.collection("users").find({email: email}).project({_id: 0}).toArray(function (err, result) {
//             if (err) throw err;
//             console.log(result);
//             // if(result.last_name)
//             res.send(result);

//             // db.close();
//         });
//     });
// });




// let express = require('express');
// let bodyParser = require('body-parser');
// let mongoose = require('mongoose');
// const user = require("./routes/user.routes");
// const news = require("./routes/news.routes");
// const chatbot = require("./routes/chatbot.routes");

// const news1 = require('./routes/news1.routes');
// const request = require('request');
// let app = express();
// const cors = require('cors');

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(cors());
// app.use(bodyParser.json());
// // Connect to Mongoose and set connection variable

// mongoose.connect('mongodb://localhost:27017/fragnel', { useNewUrlParser: true });
// var db = mongoose.connection;


// // Setup server port
// var port = 3000;
// // Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express'));
// // Use Api routes in the App
// app.use('/user', user);
// app.use('/news', news);
// app.use('/news1', news1);
// app.use('/chatbot', chatbot);


// // Launch app to listen to specified port
// app.listen(port, function () {
//     console.log("Running RestHub on port " + port);
// });