const express = require('express');
const productRouter = express.Router();
const connection = require('../database');

productRouter.get('/', (req,res ) => {
    connection.query('select * from products', (err, results, fields) => {
        err ? res.send(err) : res.json(results);
    }) 
})

module.exports = productRouter;