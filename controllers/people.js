const { validationResult } = require('express-validator');
const models = require('../models');
const { filter, formatFilters } = require('../lib/helpers');

module.exports = {
    fetchOwners(req, res) {
        res.setHeader('Content-Type', 'application/json');
        try
        {
            const errors = validationResult(req);
            if (!errors.isEmpty())
            {
                res.status(400).send({ status: 400, error: errors.array() });
                return;
            }
            const limit = 20;
            const page = +req.query.page;
            const offset = (page - 1) * limit;
            const formattedFilters = formatFilters(req.body)
            models.People.findAndCountAll({
                where: {
                  ...formattedFilters  
                },
                limit,
                offset,
            }).then(({rows, count}) => {
                const next = (count - offset) > 0 && (count > limit)  ? page + 1 : null;
                const prev = page > 1 ? page - 1 : null;
                const nextPage = process.env.NODE_ENV === 'development' ?
                (next ? `http://localhost:3000/people?page=${next}` : null) : (next ? `https://immense-ravine-06184.herokuapp.com/people?page=${next}`: null)
                const prevPage =  process.env.NODE_ENV === 'development' ?
                (prev ? `http://localhost:3000/people?page=${prev}` : null) : (prev ? `https://immense-ravine-06184.herokuapp.com/people?page=${prev}`: null)
                const filteredRows = filter(rows, req.body)
                res.status(200).send({ status: 200, data:[...filteredRows], nextPage, prevPage });
                return;
            }).catch(err => {
                res.status(500).send({ status: 500, error: "An error occured while fetching records from the DB"})
            })
        }
        catch (err)
        {
            console.log(err)
            res.status(500).send({status: 500, error: "An unknown error occured"});
        }
    }
}