const express = require("express");
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var multer = require('multer')
var GridFsStorage = require('multer-gridfs-storage')
var Grid = require('gridfs-stream')

const groupController = require('../controllers/group.controller');

function storage(groupID) {
    return new GridFsStorage({
        url: mongoURI,
        file: (req, file) => {
            return new Promise((resolve, reject) => {

                const filename = groupID.toString() + "~" + Date.now.toString() + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        }
    });
}

router.get('/users', groupController.getUsersForGroup)
router.post('/createGroup', groupController.createGroup)
router.post('/getGroups', groupController.getGroups)
router.post('/addMembers', groupController.addMembers)
router.post('/addPost', groupController.addPost)
router.post('/getPosts', groupController.getPosts)
router.post('/addAnswer', groupController.addAnswer)
const upload = multer({ storage });

router.post('/addDocs', upload.single('file'), (req, res) => {
    new GridFsStorage({
        url: mongoURI,
        file: (req, file) => {
            return new Promise((resolve, reject) => {

                const filename = req.body.groupID.toString() + "~" + Date.now.toString() + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        }
    });
})
// router.post('/deleteAnswer')

// router.get('/users', groupController.getSubjects)

module.exports = router;

