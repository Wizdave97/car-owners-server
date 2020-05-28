var express = require('express');
const filters = require('../controllers/filters');
const { query } = require('express-validator');
var router = express.Router();

/* GET home page. */
router.get('/', [
  query("page", "The page number is required, must be a number").isNumeric().trim().escape()
], filters.getFilters);

module.exports = router;
