const express = require("express");
const router = express.Router();

const groupController = require('../controllers/group.controller');

router.get('/users', groupController.getUsersForGroup)
router.post('/createGroup', groupController.createGroup)
router.post('/addMembers', groupController.addMembers)
// router.get('/users', groupController.getSubjects)

module.exports = router;

