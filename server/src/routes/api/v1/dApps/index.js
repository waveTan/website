const express = require('express');
const dApps = require('@/controllers/dApps');

const router = express.Router();

router.get('/', dApps.load);
router.post('/search/', dApps.search);
router.post('/search/:offsetId', dApps.search);
router.get('/item/:id', dApps.item);
router.get('/:offsetId', dApps.load);

module.exports = router;
