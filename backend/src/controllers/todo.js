const Todo = require("../models/todo");
const { formatMongooseResponse } = require("../utils");

const getTodos = async (req, res) => {
    const todos = await Todo.find({});
    return res.json(formatMongooseResponse(todos));
}

const getTodo = async (req, res) => {
    const { todoId } = req.params;
    const todo = await Todo.findOne({
        _id: todoId
    })
    return res.json(formatMongooseResponse(todo));
}

const postTodo = async (req, res) => {
    const { title, description } = req.body;
    let todo = new Todo({
        title,
        description,
        completed: false
    });
    todo = await todo.save();
    return res.status(201).json(formatMongooseResponse(todo));
}

const putTodo = async (req, res) => {
    const { todoId } = req.params;
    const { title, description } = req.body;
    await Todo.updateOne({
        _id: todoId
    }, {
        $set: {
            title,
            description
        }
    });
    const todo = await Todo.findById(todoId);
    return res.status(200).json(formatMongooseResponse(todo));

}

const toggleCompletion = async (req, res) => {
    const { todoId } = req.params;
    let todo = await Todo.findById(todoId);
    await Todo.updateOne({
        _id: todoId
    }, {
        $set: {
            completed: !todo.completed
        }
    });

    todo = await Todo.findById(todoId);
    return res.status(200).json(formatMongooseResponse(todo));
}

const deleteTodo = async (req, res) => {
    const { todoId } = req.params;
    await Todo.deleteOne({
        _id: todoId
    });
    return res.status(200).json("deleted");
}

module.exports = {
    getTodos,
    postTodo,
    toggleCompletion,
    deleteTodo,
    putTodo,
    getTodo
}