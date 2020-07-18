var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    title: {type: String, required: true},
    imagePath: {type: String, required: true},
    cpu: {type: String, required: true},
    ram: {type: String, required: true},
    storage: {type: String, required: true},
    screen: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required:true}

});

module.exports = mongoose.model('Product', schema);