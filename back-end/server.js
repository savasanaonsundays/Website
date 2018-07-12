const mongoose = require('mongoose');
const express = require('express');
var seeder = require('mongoose-seed');
const bookings = require('./routes/api/bookings');

const admin = require('./routes/api/admin');
const test = require('./models/test')
const content = require('./models/Content');
// Port
const port = 7000;
const app = express();
//DB Config
const db = require('./config/keys').mongoURI;



// Routes

app.use('/api/admin' , admin);

app.use('/api/bookings', bookings);







// RETURNS ABOUT ME

mongoose.connect(db)
const aboutMe = mongoose.model("content")
aboutMe.findOne({name:"aboutMe"}).then(stuff => {
  console.log(stuff.text)
})

// RETURNS QUALIFICATIONS

mongoose.connect(db)
const qualifications = mongoose.model("content")
qualifications.findOne({name:"qualifications"}).then(stuff => {
  console.log(stuff.text)
})

// RETURNS PRICES

mongoose.connect(db)
const prices = mongoose.model("content")
prices.findOne({name:"prices"}).then(stuff => {
  console.log(stuff.text)
})








app.get('/', (req, res) => res.send('Hello'));
app.listen(port, () => console.log(`server is running on  port ${port}`));






