const express = require('express');
const team = require('@/controllers/team');

const router = express.Router();

router.get('/', team.getEverything);

module.exports = router;
