import { mernTodo } from "./setup";

export const getTodos = () => {
    return mernTodo.get("/todos/");
}

export const getTodo = (todoId) => {
    return mernTodo.get(`/todos/${todoId}`);
}

export const createTodo = ({ title, description }) => {
    return mernTodo.post("/todos/", { title: title, description });
}

export const deleteTodo = (todoId) => {
    return mernTodo.delete(`/todos/${todoId}`);
}

export const toggleCompletion = (todoId) => {
    return mernTodo.put(`/todos/toggle-completion/${todoId}`);
}

export const updateTodo = (todoId, { title, description }) => {
    return mernTodo.put(`/todos/${todoId}`, { title, description });
}