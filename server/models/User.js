const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, match: /[a-z]/ },
  email: { type: String, required: true },
  birthday: { type: Date },
  sex: { type: Number, default: 0 },
  location: { type: String },
  telephone: { type: String },
  password: { type: String, required: true },
  level: { type: Number, default: 3 },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
  this.name =
    this.name.trim()[0].toUpperCase() + this.name.slice(1).toLowerCase();
  next();
});

module.exports = mongoose.model("user", UserSchema);
