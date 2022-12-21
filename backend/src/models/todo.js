const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: Boolean
});

const Todo = model("Todo", TodoSchema);

module.exports = Todo;