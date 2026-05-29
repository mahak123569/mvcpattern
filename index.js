const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')
const port = 3000;

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.use(express.json());


app.get('/', (req, res) => {
  res.send("hello welcome");
})
app.get('/api',productRoutes);

app.listen(PORT, () => {
  console.log(`app is listening at ${PORT} port`);
});