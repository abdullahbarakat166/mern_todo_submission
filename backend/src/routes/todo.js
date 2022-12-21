const express = require("express");
const {
    getTodos,
    postTodo,
    putTodo,
    deleteTodo,
    toggleCompletion,
    getTodo, 
} = require("../controllers/todo");

const router = express.Router();

router.get("/", getTodos);

router.get("/:todoId", getTodo);

router.post("/", postTodo);

router.put("/:todoId", putTodo);

router.delete("/:todoId", deleteTodo);

router.put("/toggle-completion/:todoId", toggleCompletion);

module.exports = router;