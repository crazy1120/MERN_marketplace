const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

const app = express();

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(morgan("dev", { skip: (req, res) => res.statusCode < 400 }));

app.use("/api", require("./routers"));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

//   next();
// });

app.use((err, req, res, next) => {
  if (res.headerSent) next(err);
  res.status(err.code || 500);
  res.json({ message: err.message || "An unknown error occurred!" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Database connection succeed."))
  .catch(() => console.log("Error happened while connecting to Database."));

app.listen(5000, () => console.log("Server listening at port 5000."));
