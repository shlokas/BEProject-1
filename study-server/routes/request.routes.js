const express = require("express");
const router = express.Router();

const requestController = require('../controllers/request.controller');

router.post('/makeRequest', requestController.makeRequest);
router.post('/userRequests', requestController.getAllUserRequests);
router.post('/activeUserRequests', requestController.getAllActiveUserRequests);

router.post('/HODRequests', requestController.HODrequests);
router.post('/HODVerification', requestController.approvalByHOD);

router.post('/VPRequests', requestController.VPRequests);
router.post('/VPVerification', requestController.approvalByVP);

router.post('/rejectRequest', requestController.rejectRequest);

module.exports = router;

