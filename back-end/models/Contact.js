const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contact = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    minlength: 5,
    required: true
  },
  tel: {
    type: String
  },
  comment: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model("contact", contact);
module.exports = Contact;
