import axios from "axios";

export const mernTodo = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
});