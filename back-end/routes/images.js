const express = require('express');
const imageController = require('../controllers/image.controller');
const userImageUploader = require('../helpers/user-image-uploader');
const gameImageUploader = require('../helpers/game-image-uploader');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/upload/user', checkAuth.checkAuth, userImageUploader.upload.single('user-image'), imageController.upload);
router.post('/upload/game', checkAuth.checkAuth, gameImageUploader.upload.single('game-image'), imageController.upload);

module.exports = router;