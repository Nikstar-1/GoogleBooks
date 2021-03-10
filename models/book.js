const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  _id: String,
  authors: Array,
  description: String,
  image: String,
  link: String,
  title: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;