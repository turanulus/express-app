const express = require('express');
const router = express.Router();
const query = require('../database/query');

//post method to query database 
router.post('/', query.list);

module.exports = router;