const Schema = require("mongoose").Schema;

const Product = new Schema({
  title: { type: String, required: true },
  seller: { type: Schema.ObjectId, required: true },
  broker: { type: Schema.ObjectId },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String },
  category: { type: Schema.ObjectId, required: true },
  likes: { type: Number, default: 0 },
  ratings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = Product;
