const Schema = require("mongoose").Schema;

const Image = new mongoose.Schema({
  url: { type: String, required: true },
  alt: { type: String },
  caption: { type: String, required: true },
});

const Product = new Schema({
  title: { type: String, required: true },
  seller: { type: Schema.ObjectId, ref: "User", required: true },
  broker: { type: Schema.ObjectId, ref: "User" },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: String,
  images: [Image],
  category: { type: Schema.ObjectId, ref: "Category", required: true },
  likes: { type: Number, default: 0 },
  ratings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = Product;
