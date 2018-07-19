const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booking = new Schema({
    text: String
})

     mongoose.model('booking', booking)

