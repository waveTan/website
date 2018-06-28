const express = require('express');
const jobs = require('@/controllers/jobs');

const router = express.Router();

router.get('/', jobs.getActive);

module.exports = router;
