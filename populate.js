require('dotenv').config()

// Transfer products.json in the DB
const connectDB = require('./db/connect');
const Product = require('./models/product');
const detailImages = require('./models/detailImage');

const jsonProducts = require('./products.json');
const jsonDetailImages = require('./detailImages.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        // Remove products eventualy presents in the DB
        await Product.deleteMany();
        await detailImages.deleteMany();
        // Create the products in the DB
        await Product.create(jsonProducts)
        console.log('The DB has been populated with products!')
        await detailImages.create(jsonDetailImages)
        console.log('The DB has been populated with detail images!')
        // The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. 0=success, 1=failure
        process.exit(0)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

start();