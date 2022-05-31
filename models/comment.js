const { Schema, model } = require("mongoose");

const CommentSchema = Schema({
    author: {
        type: String,
        required: [true, "El autor es obligatorio"],
    },
    content: {
        type: String,
        required: [true, "El contenido es obligatorio"],
    },
});

module.exports = model("Comment", CommentSchema);
