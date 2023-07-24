const Schema = require("mongoose").Schema;

const Order = new Schema({
  number: { type: Number, required: true },
  buyer: { type: Schema.ObjectId, required: true },
  date: { type: Date, required: true },
  status: { type: Number, default: 0 },
  product: { type: Schema.ObjectId, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = Order;
