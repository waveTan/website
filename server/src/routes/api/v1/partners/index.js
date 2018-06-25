const express = require('express');
const partners = require('@/controllers/partners');

const router = express.Router();

router.get('/', partners.getEverything);

module.exports = router;
