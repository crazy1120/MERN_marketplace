const { Schema, model } = require("mongoose");

// const Image = new mongoose.Schema({
//   url: { type: String, required: true },
//   alt: { type: String },
//   caption: { type: String, required: true },
// });

const DealSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  broker: { type: Schema.Types.ObjectId, ref: "User" },
  // quantity: { type: Number, required: true },
  // unit: String,
  // images: [Image],
  // category: { type: Schema.ObjectId, ref: "Category", required: true },
  likes: { type: Number, default: 0 },
  ratings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Deal", DealSchema);
