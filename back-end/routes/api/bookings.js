const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../../config/keys").mongoURI;
const Booking = require("../../models/Booking");

router.get("/allbookings", (req, res) => {
  mongoose.connect(db);
  const bookings = mongoose.model("booking");
  bookings.findOne({}).then(bookings => {
    res.send(bookings);
  });
});

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

module.exports = router;
