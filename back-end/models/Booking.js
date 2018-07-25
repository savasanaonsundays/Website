const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booking = new Schema({
  session: {
    type: String
  },
  date: {
    type: String
  },

  hours: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 32,
    required: true
  },
  tel: {
    type: String
  },
  health: {
    type: String
  },
  comment: {
    type: String
  },
  isConfirmed: {
    type: Boolean
  }
});

const Booking = mongoose.model("booking", booking);
module.exports = Booking;
// mongoose.model("booking", booking);
