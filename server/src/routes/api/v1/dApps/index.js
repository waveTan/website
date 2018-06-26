const express = require('express');
const dApps = require('@/controllers/dApps');

const router = express.Router();

router.get('/', dApps.load);
router.get('/:offsetId', dApps.load);

module.exports = router;
