const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const app = express();
dotenv.config();

connectDb();

app.listen(
  process.env.PORT,
  console.log(`server running on port ${process.env.PORT}`)
);
