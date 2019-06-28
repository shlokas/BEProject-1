const express = require('express')
var cors = require('cors');
// var User = require('./models/user.model')
var methodOverride = require('method-override')
const path = require('path');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');
var conn = require('./dbConn')
var mongoose = require('mongoose')
var mongoURI = "mongodb+srv://mihir:mihir@cluster0-rfpzz.gcp.mongodb.net/BEProject?retryWrites=true&w=majority"
const userRouter = require("./routes/user.routes");
const requestRouter = require("./routes/request.routes")
const summaryRouter = require('./routes/summary.routes')
const groupRouter = require("./routes/group.routes")
const docsRouter = require('./routes/docs.routes')
const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server running at port ' + port);
})

// app.get('/', function (req, res) {
//     console.log('/');
//     // const user = new User();
//     res.json('Connected');
// })
app.use('/user', userRouter);
app.use('/request', requestRouter)
app.use('/summary', summaryRouter)
app.use('/groups', groupRouter)
app.use('/docs', docsRouter)
app.use(express.static(path.join(__dirname, "../uploads")));
var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
        cb(null, "../uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

app.post("/docs/upload", upload.array("uploads[]", 12), function (req, res) {
    console.log("files", req.files);
    res.send(req.files);
});
