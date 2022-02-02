const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
