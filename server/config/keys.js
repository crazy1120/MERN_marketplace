const keys_prod = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY,
  port: process.env.PORT,
};

const keys_dev = {
  mongoURI: "mongodb://127.0.0.1:27017",
  secretOrKey: "dev",
  port: 5000,
};

module.exports = process.env.NODE_ENV === "production" ? keys_prod : keys_dev;
