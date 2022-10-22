const mongoose = require('mongoose');

const detailImagesSchema = new mongoose.Schema({
   category:{
        type:String,
        values:['plantes', 'cactus', 'fleurs'],
        message:'{VALUE} is not supported'
    },
    src:{
        type:Array,
        required:[true,'image src must be provided']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('detailImages',detailImagesSchema)