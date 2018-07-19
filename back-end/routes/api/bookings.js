const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;


router.get('/',(req,res) => {
    mongoose.connect(db)
    const bookings = mongoose.model("booking")
    bookings.findOne({}).then(bookings => {
    res.send(bookings)
})
})




















module.exports = router;