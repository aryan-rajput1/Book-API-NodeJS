const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
    id: String,
    name: String,
    books: [String]
})

module.exports = mongoose.model("Author", AuthorSchema);