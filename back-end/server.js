const mongoose = require('mongoose');
const express = require('express');


const bookings = require('./routes/api/bookings');
const app = express();

const bodyParser = require('body-parser'); //2.TO BE ABLE TO USE REQ.BODY
const passport = require('passport'); //

const admin = require('./routes/api/admins');

const test = require('./models/test')
const content = require('./models/Content');
const contentRoute = require('./routes/api/content')

//DB Config
const db = require('./config/keys').mongoURI;



// Routes

app.use('/api/admin' , admin);

app.use('/api/bookings', bookings);

app.use('/api/content', contentRoute);


// Body parser middleware 5.NOW CAN ACCESS REQUEST.BODY WHATEVER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



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


app.get('/', (req, res) => res.send('Hello Elouise'));

app.listen(port, () => console.log(`server is running on  port ${port}`));






