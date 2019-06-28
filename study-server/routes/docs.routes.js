const express = require("express");
const router = express.Router();
const docsController = require('../controllers/docs.controller')
// // router.post('/upload', docsController.uploadFile)
// // router.get('/file/:filename', docsController.getSingleFile);
// // router.get('/files', docsController.getAllFiles);
// module.exports = router;


// var multer = require('multer')
// var upload = multer({ dest: __dirname + "/uploads" });

// router.post('/upload', upload.single(), uploadImage)

// function uploadImage(req, res) {
//     console.log(req.files)
// }

router.post('/upload', docsController.uploadFile)
router.post('/retrieve', docsController.getFiles)

module.exports = router;
