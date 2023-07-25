// Server initialization & module requirements
const app = require("express")(),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  { PORT, connectDB } = require("./config");

// MongoDB connection
connectDB("dev");

// Third-party middlewares
app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(morgan("dev", { skip: (req, res) => res.statusCode < 400 }));

// Main routing
app.use("/api", require("./routers"));

// Server error handling
app.use((err, req, res, next) => {
  if (res.headerSent) next(err);
  res.status(err.code || 500);
  res.json({ message: err.message || "An unknown error occurred!" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

/**
 * extra
 *
 */
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

//   next();
// });
