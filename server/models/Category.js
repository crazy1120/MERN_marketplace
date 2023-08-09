const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
    creators: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = model("Category", CategorySchema);
