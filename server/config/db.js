const mongoose = require("mongoose");
const db = (dbName) => `mongodb://127.0.0.1:27017/${dbName}`;

const connectDB = async (dbName) => {
  try {
    await mongoose.connect(db(dbName), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
