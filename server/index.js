// Server initialization & module requirements
const app = require("express")(),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  { keys, connectDB } = require("./config");

// MongoDB connection
connectDB();

// Third-party middlewares
app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(morgan("dev", { skip: (req, res) => res.statusCode < 400 }))
  .use(passport.initialize());

// Passport Config
require("./config/passport");

// Main routing
app.use("/api", require("./routers"));

// Server error handling
app.use((err, req, res, next) => {
  if (res.headerSent) next(err);
  res.status(err.code || 500);
  res.json({ message: err.message || "An unknown error occurred!" });
});

app.listen(keys.port, () => console.log(`Server started on port ${keys.port}`));
