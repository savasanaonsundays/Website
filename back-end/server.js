const mongoose = require('mongoose');
const express = require('express');

const bookings = require('./routes/api/bookings');
const content = require('./routes/api/content');
const admin = require('./routes/api/admin');


const app = express();


//User routes

app.use('/api/admin' , admin);
app.use('/api/content', content);
app.use('/api/bookings', bookings);


const port = 7000;



//DB Config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello'));
app.listen(port, () => console.log(`server is running on  port ${port}`));




