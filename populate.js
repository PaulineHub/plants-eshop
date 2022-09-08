require('dotenv').config()

// Transfer products.json in the DB
// Enter 'node populate' in the terminal to start the transfer

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        // Remove products eventualy presents in the DB
        await Product.deleteMany();
        // Create the products in the DB
        await Product.create(jsonProducts)
        console.log('The DB has been populated!')
        // The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. 0=success, 1=failure
        process.exit(0)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

start();