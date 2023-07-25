const Schema = require("mongoose").Schema;

const Category = new Schema({
  title: { type: String, required: true },
  parentId: String,
});

module.exports = Category;
