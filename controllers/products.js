const Product = require('../models/product');

// Get all products
const getAllProducts = async (req,res) => {
    const {featured, category, name, sort, fields} = req.query;
    const queryObject = {};

    if(featured){
        queryObject.featured = featured ==='true'? true : false
    } 
    if(category){
        queryObject.category = category
    }
    if(name){
        queryObject.name = {$regex:name, $options:'i'}
    }

    let result = Product.find(queryObject);

   //SORT
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    } else {
        result = result.sort('createAt')
    }

    // SELECT
    if (fields) {
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList)
    }

    // PAGINATION
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)

    const products = await result
    res.status(200).json({products})
}

module.exports = {
    getAllProducts
}