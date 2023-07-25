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
    // Exit process with failure
    process.exit(1);
  }
};
