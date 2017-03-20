const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.post('/api/score', controller.postScore);
router.get('/api/score', controller.getScore);
router.post('/', controller.getMain);

module.exports = router;
