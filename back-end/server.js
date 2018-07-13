const mongoose = require('mongoose');
const express = require('express');

const bodyParser = require('body-parser'); //2.TO BE ABLE TO USE REQ.BODY
const passport = require('passport'); //

const bookings = require('./routes/api/bookings');
const content = require('./routes/api/content');
const admin = require('./routes/api/admins');

const app = express();

// Body parser middleware 5.NOW CAN ACCESS REQUEST.BODY WHATEVER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;


//connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));



// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);//PASSING IN PASSPORT


//User routes
app.use('/api/admin' , admin);
app.use('/api/content', content);
app.use('/api/bookings', bookings);


const port = process.env.PORT ||7000;


app.get('/', (req, res) => res.send('Hello Elouise'));

app.listen(port, () => console.log(`server is running on  port ${port}`));




