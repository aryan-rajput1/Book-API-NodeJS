const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    ISBN: String,
    title: String,
    pubDate: String,
    language: String,
    numPage: Number,
    author: [String],
    publication: [String],
    category: [String],
    year: Number
})

module.exports = mongoose.model("Book", BookSchema);