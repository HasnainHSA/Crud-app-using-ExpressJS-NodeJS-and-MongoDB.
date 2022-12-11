const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    Price:{
        type: Number
    }
});

const productModel = mongoose.model('product', schema);

module.exports = productModel;