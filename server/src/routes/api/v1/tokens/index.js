const express = require('express');
const tokens = require('@/controllers/tokens');

const router = express.Router();

router.get('/price/:token', tokens.getTokenPrice);

module.exports = router;
