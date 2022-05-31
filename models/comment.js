const { Schema, model } = require("mongoose");

const CommentSchema = Schema({
  authorId: {
    type: String,
    required: [true, "El autor es obligatorio"],
  },
  content: {
    type: String,
    required: [true, "El contenido es obligatorio"],
  },
});

CommentSchema.methods.toJSON = function () {
  const { __v, _id, ...comment } = this.toObject();
  return comment;
};

module.exports = model("Comment", CommentSchema);
