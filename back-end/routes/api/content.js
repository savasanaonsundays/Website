// Different page content routes
const mongoose = require("mongoose");
const db = require("../../config/keys").mongoURI;
//  e.g
//

const express = require("express");
const router = express.Router();

// GET REQUESTS

router.get("/aboutMe", (req, res) => {
  mongoose.connect(db);
  const aboutMe = mongoose.model("content");
  aboutMe.findOne({ name: "aboutMe" }).then(aboutMe => {
    res.send(aboutMe);
  });
});

router.get("/prices", (req, res) => {
  mongoose.connect(db);
  (function() {
    console.log(res);
  }());
  const prices = mongoose.model("content");
  prices.findOne({ name: "prices" }).then(prices => {
    res.send(prices);
  });
});

router.get("/qualifications", (req, res) => {
  mongoose.connect(db);
  const qualifications = mongoose.model("content");
  qualifications.findOne({ name: "qualifications" }).then(qualifications => {
    res.send(qualifications);
  });
});

router.get("/contents", (req, res) => {
  mongoose.connect(db);
  const contents = mongoose.model("content");
  contents.findOne({}).then(contents => {
    res.send(contents);
  });
});

router.get("/timetable", (req, res) => {
  mongoose.connect(db);
  const timetable = mongoose.model("content");
  timetable.findOne({ name: "timetable" }).then(timetable => {
    res.send(timetable);
  });
});

router.get("/massage", (req, res) => {
  mongoose.connect(db);
  const massage = mongoose.model("content");
  massage.findOne({ name: "massage" }).then(massage => {
    res.send(massage);
  });
});

router.get("/yoga", (req, res) => {
  mongoose.connect(db);
  const yoga = mongoose.model("content");
  yoga.findOne({ name: "yoga" }).then(yoga => {
    res.send(yoga);
  });
});

// POST REQUESTS

// router.post('/aboutMe/post',(req,res) => {

//     mongoose.connect(db)
//     const AboutMe = mongoose.model('content')
//     const newTest = new Test({
//         layers: req.body.layers
//       });

//     newTest.save()
//     .then(test => res.json(test))

// })

// POST REQUESTS

// UPDATE REQUESTS

router.put("/:id", (req, res) => {
  mongoose.connect(db);
  const contents = mongoose.model("content");
  (function() {
    console.log(req.params.id);
});
  contents.findByIdAndUpdate(req.params.id, req.body).then(res.json(contents));
});

//contents.findByIdAndUpdate(req.params.id, req.body)

module.exports = router;
