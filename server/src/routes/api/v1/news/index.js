const express = require('express');
const news = require('@/controllers/news');

const router = express.Router();

router.get('/', news.load);
router.post('/search/', news.search);
router.post('/search/:offsetId', news.search);
router.get('/item/:id', news.item);
router.get('/:offsetId', news.load);

module.exports = router;
