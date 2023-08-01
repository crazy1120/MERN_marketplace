const { Schema, model } = require("mongoose");

const ProfileSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  birthday: { type: Date, required: true },
  email: { type: String, required: true },
  deals: { type: Number, required: true, default: 0 },
  likes: { type: Number, default: 0 },
  followers: { type: Array },
  role: { type: Number },
  intro: { type: String, required: true },
  ratings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Profile", ProfileSchema);
