var express = require('express');
var app = express();
var conn = require('../dbConn')
// var mongoose = require('mongoose');
// var url = "mongodb+srv://mihir:mihir@cluster0-rfpzz.gcp.mongodb.net/BEProject?retryWrites=true&w=majority"

// mongoose.connect(url);
// var conn = mongoose.connection;
// var multer = require('multer');
// var GridFsStorage = require('multer-gridfs-storage');
// var Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;
// var gfs = Grid(url);
// app.set('storage engine', 'ejs');
// var storage = GridFsStorage({
    
//     gfs: gfs,
//     filename: function (req, file, cb) {
//         var datetimestamp = Date.now();
//         cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
//     },
//     /** With gridfs we can store aditional meta-data along with the file */
//     metadata: function (req, file, cb) {
//         cb(null, { originalname: file.originalname });
//     },
//     root: 'ctFiles' //root name for collection to store files into
// });

// var upload = multer({ //multer settings for single upload
//     storage: storage
// }).single('file');

// /** API path that will upload the files */
// app.post('/upload', function (req, res) {
//     upload(req, res, function (err) {
//         if (err) {
//             res.json({ error_code: 1, err_desc: err });
//             return;
//         }
//         res.json({ error_code: 0, err_desc: null });
//     });
// });

// app.get('/file/:filename', function (req, res) {
//     gfs.collection('ctFiles'); //set collection name to lookup into

//     /** First check if file exists */
//     gfs.files.find({ filename: req.params.filename }).toArray(function (err, files) {
//         if (!files || files.length === 0) {
//             return res.status(404).json({
//                 responseCode: 1,
//                 responseMessage: "error"
//             });
//         }
//         /** create read stream */
//         var readstream = gfs.createReadStream({
//             filename: files[0].filename,
//             root: "ctFiles"
//         });
//         /** set the proper content type */
//         res.set('Content-Type', files[0].contentType)
//         /** return response */
//         return readstream.pipe(res);
//     });
// });
exports.uploadFile = (req, res) => {
    const obj = {
        groupID: req.body.groupID,
        filename: req.body.filename,
        content: req.body.content
    }
    conn.collection("files").insertOne(obj, function (err, result) {
        if (err) {

        } else {
            res.json("Successful");
        }
    })   
}

exports.getFiles = (req, res) => {
    const obj = {
        groupID: req.body.groupID
    }
    conn.collection("files").find(obj).toArray(function (err, result) {
        if (err) {

        } else {
            res.send(result);
        }
    })   
}