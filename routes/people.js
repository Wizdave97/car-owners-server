var express = require('express');
const people = require('../controllers/people');
const { body, query} = require('express-validator');
var router = express.Router();

/* GET users listing. */
router.post('/', [
  query('page', "page must be a number and is required").isNumeric().trim().escape(),
  body('start_year', "Must be a valid year").optional().isNumeric(),
  body('end_year', "Must be a valid year").optional().isNumeric(),
  body('colors', "Must be an array of strings").optional().isArray(),
  body('gender', "Must be either 'male' or 'femmale'").optional().isLength({ min: 4, max: 6}).trim().escape(),
  body('countries', "Must be an array of strings").optional().isArray()
], people.fetchOwners);


module.exports = router;
