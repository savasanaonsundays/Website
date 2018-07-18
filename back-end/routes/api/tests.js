const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;
//  e.g 
// 


const express = require('express')
const router = express.Router();

router.get('/tests',(req,res) => {
    mongoose.connect(db)
    const tests = mongoose.model("test")
    tests.findOne({}).then(stuff => {
    res.send(stuff.name)
})
})

router.post('/send',(req,res) => {

    mongoose.connect(db)
    const Test = mongoose.model('test')
    const newTest = new Test({ //8.CREATE NEW USER
        layers: req.body.layers //WILL COME FROM THE FORM
      });

    newTest.save()
    .then(test => res.json(test))

})




module.exports = router;