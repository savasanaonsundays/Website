const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mern-demo');

module.exports = { mongoose, Schema };