const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true, match: /[a-z]/ },
    email: { type: String, required: true },
    birthday: Date,
    sex: { type: Number, default: 0 },
    location: String,
    telephone: String,
    password: { type: String, required: true },
    level: { type: Number, default: 3 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
