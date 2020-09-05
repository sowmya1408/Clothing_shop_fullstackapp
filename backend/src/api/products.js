const express = require('express');
const productRouter = express.Router();
const connection = require('../database');

productRouter.get('/', (req,res ) => {
    connection.query('select * from products', (err, results, fields) => {
        err ? res.send(err) : res.json(results);
    }) 
})

productRouter.get('/search', (req,res ) => {
    const {query} = req.query;
    connection.query(`select * from products WHERE category = ?`,[query], (err, results, fields) => {
        err ? res.send(err) : res.json(results);
    }) 
})


productRouter.get('/:id', (req,res ) => {
    const {id} = req.params
    connection.query('select * from products WHERE id = ?',[id], (err, results, fields) => {
        err ? res.send(err) : res.json(results);
    }) 
})



module.exports = productRouter;