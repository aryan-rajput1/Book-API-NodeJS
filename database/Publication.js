const mongoose = require("mongoose");

const PublicationSchema = mongoose.Schema({
    id: String,
    name: String,
    books: [String]
})

module.exports = mongoose.model("Publication", PublicationSchema);