const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/', Controller.getCoinAPIBalance);


module.exports = router;
