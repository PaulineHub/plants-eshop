require('dotenv').config()
require('express-async-errors')
const express = require('express');
const app = express();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const imagesRouter = require("./routes/images");
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// MIDDLEWARE
// Serves static files
app.use(express.static('./public'))
// Parse requests js in json
app.use(express.json())

// ROUTES
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/images', imagesRouter);

// Manage errors
app.use(notFoundMiddleware)
app.use(errorMiddleware)

// Connect to the DB and listen port
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening to port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();
