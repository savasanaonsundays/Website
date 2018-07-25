const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../../config/keys").mongoURI;
const Contact = require("../../models/Contact");

// route to send contact
router.post("/privatecontact", (req, res) => {
  mongoose.connect(db);
  const contacts = mongoose.model("contact");
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    tel: req.body.tel,
    comment: req.body.comment
  });
  console.log(newContact);
  newContact.save(err => {
    if (err) return res.status(412).json(err); //if theres any error validation or other will return the error
    res.status(200).json(newContact);
  });
});

router.get("/", (req, res) => {
  mongoose.connect(db);
  const contacts = mongoose.model("contact");
  contacts.findOne({}).then(contacts => {
    res.send(contacts);
  });
});

router.delete("/delete/:id", (req, res) => {
  mongoose.connect(db);
  const contacts = mongoose.model("contact");
  console.log(req.params.id);
  contacts.findByIdAndRemove({ _id: req.params.id }).then(res.json(contacts));
});

module.exports = router;
