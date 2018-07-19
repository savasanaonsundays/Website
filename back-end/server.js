// require('./env').config();
const mongoose = require('mongoose');
const express = require('express');

const booking = require('./models/Booking')
const bookingsRoute = require('./routes/api/bookings');
const app = express();

const bodyParser = require('body-parser'); //2.TO BE ABLE TO USE REQ.BODY
const cors = require('cors')
app.use(cors({ origin: process.env.CORS_ORIGINS }))

const passport = require('passport'); //

const adminRoute = require('./routes/api/admins');
const testsRoute = require('./routes/api/tests');
const test = require('./models/test')
const content = require('./models/Content');
const contentRoute = require('./routes/api/content')

//DB Config
const db = require('./config/keys').mongoURI;


// Body parser middleware 5.NOW CAN ACCESS REQUEST.BODY WHATEVER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes

app.use('/api/admin' , adminRoute);

app.use('/api/bookings', bookingsRoute);

app.use('/api/content', contentRoute);

app.use('/api/tests', testsRoute)





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



const port = process.env.PORT ||7000;


app.listen(port, () => console.log(`server is running on  port ${port}`));






