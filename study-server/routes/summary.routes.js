const express = require("express");
const router = express.Router();

const summaryController = require('../controllers/summary.controller');

router.post('/all', summaryController.getSummaries)
router.get('/subjects', summaryController.getSubjects)

module.exports = router;

