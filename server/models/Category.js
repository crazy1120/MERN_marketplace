const Schema = require("mongoose").Schema;

const Category = new Schema({
  title: { type: String, required: true },
  parentId: { type: String },
});

module.exports = Category;
