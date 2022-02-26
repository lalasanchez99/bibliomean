const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    userId: String,
    name: String,
    author: String,
    description: String,
    Date: {
        type: Date,
        default: Date.now,
    }

})

const Book = mongoose.model("book", bookSchema);
module.exports.Book = Book;