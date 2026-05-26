const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const port = 3000;

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.use(express.json());


app.get('/page', (req, res) => {
  console.log("hello you are star");
  res.send("hello welcome");
})

app.listen(PORT, () => {
  console.log(`app is listening at ${PORT} port`);
});