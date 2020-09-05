const express = require('express');
const app = express();
const router = express.Router();
const productsRouter = require('./api/products');
const cors = require("cors");
app.use(cors());

const {PORT} = process.env;

app.use((req, res, next) => {
	console.log(`${req.method} ${req.path}`);
	next();
});
router.use('/products', productsRouter);
app.use('/api', router);



app.listen(PORT,() => console.log(`server started at ${PORT}`));
    
