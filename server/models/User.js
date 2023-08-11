const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    level: { type: Number, default: 3 },
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
