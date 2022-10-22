const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'product price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    category:{
            type:String,
            values:['plantes', 'cactus', 'fleurs'],
            message:'{VALUE} is not supported'
    },
    description:{
        type:String,
        required:[true,'product description must be provided']
    },
    light:{
        type:Number,
        default:0
    },
    temperature:{
        type:Number,
        default:0
    },
    image:{
        type:String,
        required:[true,'product image must be provided']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Product',productSchema)