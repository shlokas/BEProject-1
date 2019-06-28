// const express = require("express");
// const app = express();
// const port = 3000;
// const bodyParser = require("body-parser");
// const multipart = require("connect-multiparty");
// const multipartMiddleware = multipart({
//   uploadDir: "./uploads"
// });

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );

// app.post("/api/upload", multipartMiddleware, (req, res) => {
//   console.log(req.body);
//   res.json({
//     message: "File uploaded succesfully."
//   });
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// NEXT PART

var express = require("express");
var multer = require("multer");
var path = require("path");
var app = express();
var port = 3003;

// specify the folder
app.use(express.static(path.join(__dirname, "uploads")));
// headers and content type
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var storage = multer.diskStorage({
  // destination
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

app.post("/upload", upload.array("uploads[]", 12), function(req, res) {
  console.log("files", req.files);
  res.send(req.files);
});
app.get('/', function(req, res){
  res.json("Connected")
})

var server = app.listen(port, function() {
  console.log("Listening on port %s...", port);
});