const { Router } = require('express');
const { commentPost } = require('../controllers/comment');
const router = Router();

router.post('/',commentPost);

module.exports = router