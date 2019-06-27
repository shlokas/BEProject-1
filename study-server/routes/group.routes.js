const express = require("express");
const router = express.Router();

const groupController = require('../controllers/group.controller');

router.get('/users', groupController.getUsersForGroup)
router.post('/createGroup', groupController.createGroup)
router.post('/getGroups', groupController.getGroups)
router.post('/addMembers', groupController.addMembers)
router.post('/addPost', groupController.addPost)
router.post('/getPosts', groupController.getPosts)
router.post('/addAnswer', groupController.addAnswer)
// router.post('/deleteAnswer')

// router.get('/users', groupController.getSubjects)

module.exports = router;

