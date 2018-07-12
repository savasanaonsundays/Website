const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const content = new Schema({
    text: String
})

     mongoose.model('content', content)

