const express = require('express');
const dApps = require('@/controllers/dApps');

const router = express.Router();

router.get('/offset/:offsetId', dApps.load);

module.exports = router;
