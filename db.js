const mongoose = require('mongoose');

const connectDB = async () => {
  try {
   const db = await mongoose.connect(process.env.MONGO_URL);
   
    console.log(`Mongodb connected : ${db.connection.host}`);
  }catch(err){
    console.log(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;

