const express = require('express');
const dApps = require('@/controllers/dApps');

const router = express.Router();

router.get('/', dApps.load);
router.get('/search/', dApps.search);
router.get('/search/:offsetId', dApps.search);
router.get('/item/:id', dApps.item);
router.get('/:offsetId', dApps.load);

module.exports = router;
