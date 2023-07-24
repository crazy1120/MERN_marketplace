const Schema = require("mongoose").Schema;

const Payment = new Schema({
  from: { type: Schema.ObjectId, required: true },
  to: { type: Schema.ObjectId, required: true },
  number: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  method: { type: String, required: true },
});

module.exports = Payment;
