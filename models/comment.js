const { Schema, model } = require("mongoose");

const CommentSchema = Schema({
    author: {
        type: String,
        required: [true, "El autor es obligatorio"],
    },
    comment: {
        type: String,
        required: [true, "El comentario es obligatorio"],
    },
});

module.exports = model("Comment", CommentSchema);
