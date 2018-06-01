const express = require('express');
const router = express.Router();
const routes = require('./routes');

router.get('/:locale', routes.load);

module.exports = router;
