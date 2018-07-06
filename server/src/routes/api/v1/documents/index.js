const express = require('express');
const documents = require('@/controllers/documents');

const router = express.Router();

router.get('/', documents.load);
router.get('/categories', documents.categories);
router.post('/search/', documents.search);
router.post('/search/:offsetId', documents.search);
router.get('/item/:id', documents.item);
router.get('/:offsetId', documents.load);

module.exports = router;
