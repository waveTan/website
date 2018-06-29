const express = require('express');
const announcements = require('@/controllers/announcements');

const router = express.Router();

router.get('/', announcements.load);
router.post('/search/', announcements.search);
router.post('/search/:offsetId', announcements.search);
router.get('/item/:id', announcements.item);
router.get('/:offsetId', announcements.load);

module.exports = router;
