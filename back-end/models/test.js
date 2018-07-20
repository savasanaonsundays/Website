const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test = new Schema({
    name: String,
    layers: String
})

     mongoose.model('test', test)

