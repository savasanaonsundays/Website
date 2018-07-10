const mongoose = require('mongoose');
const express = require('express');
const server = express();
const port = 7000;
const app = express();


//DB Config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello'));
app.listen(port, () => console.log(`server is running on  port ${port}`));





