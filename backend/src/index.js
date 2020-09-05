const express = require('express');
const app = express();
const router = express.Router();
const productsRouter = require('./api/products');

const {PORT} = process.env;

app.use((req, res, next) => {
	console.log(`${req.method} ${req.path}`);
	next();
});
app.use('/api', router);
router.use('/products', productsRouter);

app.listen(PORT,() => console.log(`server started at ${PORT}`));
    
