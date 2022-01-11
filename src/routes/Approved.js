const express = require('express');
const { approvedInfo, getApprovedId } = require('../controller/Approved');
const router = express.Router();

router.post('/approved',  approvedInfo);
router.get('/approved-info',  getApprovedId);

module.exports = router;