// Different page content routes
const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;
//  e.g 
// 


const express = require('express')
const router = express.Router();

router.get('/test', (req,res) => res.json({msg: "content works"}));

router.get('/aboutMe',(req,res) => {
    mongoose.connect(db)
    const aboutMe = mongoose.model("content")
    aboutMe.findOne({name:"aboutMe"}).then(stuff => {
    res.send(stuff)
})
})




router.post('/aboutMe/update',(req,res) => {

    mongoose.connect(db)
    const AboutMe = mongoose.model('content')
    const newTest = new Test({ //8.CREATE NEW USER
    layers: req.body.layers //WILL COME FROM THE FORM
    });
    
    newTest.save()
    .then(test => res.json(test))
    
    })    
    

module.exports = router;

