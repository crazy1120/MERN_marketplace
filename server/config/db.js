const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(require("./keys").mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
