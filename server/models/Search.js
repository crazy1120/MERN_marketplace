const Schema = require("mongoose").Schema;

const Search = new Schema({
  keyword: { type: String, required: true },
});

module.exports = Search;
