const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');


dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello welcome');
});


app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`app is listening at ${PORT} port`);
});