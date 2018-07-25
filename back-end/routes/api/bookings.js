const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../../config/keys").mongoURI;
const Booking = require("../../models/Booking");



// route to book private yoga & massage
router.post("/privatebooking", (req, res) => {
  mongoose.connect(db);
  const bookings = mongoose.model("booking");
  const newBooking = new Booking({
    session: req.body.session,
    date: req.body.date,
    hours: req.body.hours,
    name: req.body.name,
    email: req.body.email,
    tel: req.body.tel,
    health: req.body.health,
    comment: req.body.comment,
    isConfirmed: false
  });
  console.log(newBooking);
  newBooking.save(err => {
    if (err) return res.status(412).json(err); //if theres any error validation or other will return the error
    res.status(200).json(newBooking);
  });
});


router.get('/',(req,res) => {
    mongoose.connect(db)
    const bookings = mongoose.model("booking")
    bookings.findOne({}).then(bookings => {
    res.send(bookings)
})
})

router.get('/unconfirmed',(req,res) => {
    mongoose.connect(db)
    const bookings = mongoose.model("booking")
    bookings.find({isConfirmed:false}).then(bookings => {
    res.send(bookings)
})
})

router.get('/confirmed',(req,res) => {
    mongoose.connect(db)
    const bookings = mongoose.model("booking")
    bookings.find({isConfirmed:true}).then(bookings => {
    res.send(bookings)
})
})

router.delete('/delete/:id',(req,res) => {
    mongoose.connect(db)
    const bookings = mongoose.model('booking')
    console.log(req.params.id)
    bookings.findByIdAndRemove({_id:req.params.id}).then(
        res.json(bookings)
    )
})


router.put('/update/:id',(req,res) => {
    mongoose.connect(db)
    const bookings = mongoose.model('booking')
    console.log(req.params.id)
    bookings.findByIdAndUpdate(req.params.id,{isConfirmed:true}).then( updated_booking =>{
        console.log(updated_booking)
    }
        
       
    )
})




















module.exports = router;
