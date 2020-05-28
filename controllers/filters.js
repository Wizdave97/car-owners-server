const models = require('../models');
const { validationResult } = require('express-validator');

module.exports = {
    getFilters(req, res)
    {
        res.setHeader('Content-Type', 'application/json');
        try
        {
            
            const errors = validationResult(req)
            if(!errors.isEmpty())
            {
                res.status(400).send({ status: 400, error: errors.array() })
                return;
            }
            const limit = 10;
            const page = +req.query.page;
            const offset = (page - 1) * limit; 
            models.Filters.findAndCountAll({
                limit,
                offset
            }).then(({rows, count}) => {
                const next = (count - offset) > 0 && (count > limit)  ? page + 1 : null;
                const prev = page > 1 ? page - 1 : null;
                const nextPage = process.env.NODE_ENV === 'development' ?
                (next ? `http://localhost:3000/filters?page=${next}` : null) : (next ? `https://immense-ravine-06184.herokuapp.com/filters?page=${next}`: null)
                const prevPage =  process.env.NODE_ENV === 'development' ?
                (prev ? `http://localhost:3000/filters?page=${prev}` : null) : (prev ? `https://immense-ravine-06184.herokuapp.com/filters?page=${prev}`: null)
                
                res.status(200).send({ status: 200, data:[...rows], nextPage, prevPage });
                return;
            }).catch((err)=>{
                res.status(500).send({ status: 500, error: "An error occured while fetching results" })
                return;
            })
        }
        catch (err)
        {
    
            res.status(500).send({ status:500, error:"An unknown error occured" })
        }
    }
}