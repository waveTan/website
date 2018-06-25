const express = require('express');
const cors = require('cors');

const i18n = require('@/routes/api/v1/i18n');
const partners = require('@/routes/api/v1/partners');

const router = express.Router();

router.use(cors());
router.use('/i18n', i18n);
router.use('/partners', partners);

module.exports = router;
