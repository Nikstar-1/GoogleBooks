const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  _id: String,
  title: String,
  authors: Array,
  description: String,
  image: String,
  image_link: String,
  link: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
