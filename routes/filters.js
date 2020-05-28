var express = require('express');
const filters = require('../controllers/filters');
const { query } = require('express-validator');
var router = express.Router();

/* GET home page. */
router.get('/', [
  query("page", "Query param page number be a number").isNumeric().trim().escape()
], filters.getFilters);

module.exports = router;
