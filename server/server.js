const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 5000;

//routes


//middlewares
app.use(cors({
  origin: "*"
}))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


//apply routes

app.listen(PORT, ()=>{console.log(`Server is running on port: ${PORT}`);});