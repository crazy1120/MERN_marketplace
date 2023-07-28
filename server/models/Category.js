const Schema = require("mongoose").Schema;

const Category = new Schema({
  title: { type: String, required: true },
  counts: { type: Number, default: 0 },
  parentId: String,
});

module.exports = Category;
