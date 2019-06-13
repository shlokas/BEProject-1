const express = require("express");
const router = express.Router();

const summaryController = require('../controllers/summary.controller');

router.get('/subjects', summaryController.getSubjects)

// router.post('/makeRequest', requestController.makeRequest);
// router.post('/userRequests', requestController.getAllUserRequests);
// router.post('/activeUserRequests', requestController.getAllActiveUserRequests);

// router.post('/HODRequests', requestController.HODrequests);
// router.post('/HODVerification', requestController.approvalByHOD);

// router.post('/VPRequests', requestController.VPRequests);
// router.post('/VPVerification', requestController.approvalByVP);

// router.post('/rejectRequest', requestController.rejectRequest);

module.exports = router;

