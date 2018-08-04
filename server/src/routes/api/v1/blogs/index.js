const express = require('express');
const blogs = require('@/controllers/blogs');

const router = express.Router();

router.get('/', blogs.load);
router.get('/latest', blogs.latest);
router.post('/search/', blogs.search);
router.post('/search/:offsetId', blogs.search);
router.get('/item/:id', blogs.item);
router.get('/:offsetId', blogs.load);

module.exports = router;
