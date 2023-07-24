const Schema = require("mongoose").Schema;

const User = new Schema({
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

User.path("name").set((name) => capitalize(name));

module.exports = User;
