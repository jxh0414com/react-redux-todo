const { model, Schema } = require("mongoose");

const TodoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: new Date()
    }
  },
  { timestamps: true }
);

module.exports = Todo = model("Todo", TodoSchema);
