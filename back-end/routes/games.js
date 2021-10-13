const express = require('express');
const gameController = require('../controllers/game.controller');

const router = express.Router();

router.post('/', gameController.save);
router.get('/', gameController.index);
router.get('/:id', gameController.show);
router.patch('/:id', gameController.update);
router.delete('/:id', gameController.destroy);

module.exports = router;