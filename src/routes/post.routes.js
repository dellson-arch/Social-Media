const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer');
const { createPostController } = require('../controllers/post.controller');

const upload = multer({storage:multer.memoryStorage()});


/* POST/api/posts [protected] */
router.post('/',
    authMiddleware, 
    upload.single('image'),
    createPostController
); // jo authmiddleware hai wo api ko protected banata hai

module.exports = router;
