import { TrashIcon } from "@heroicons/react/24/solid";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { useNavigate } from "react-router-dom";
import Label from "./Label";

export default function TodoItem({ todo }) {
    const { deleteTodo } = useDeleteTodo();
    const navigate = useNavigate();

    async function handleTrashClick(e) {
        e.stopPropagation();
        const confirmDelete = window.confirm("Are you sure?");
        if (confirmDelete) {
            // delete item
            deleteTodo(todo._id);
        }
    }

    async function handleTodoClick() {
        navigate(`/todo/${todo._id}`);
    }

    return (
        <li onClick={handleTodoClick} className="flex space-x-4 h-10 bg-slate-800 rounded-md items-center px-2 cursor-pointer">
            <p className="w-full">{todo.title} <Label isCompleted={todo.completed}/></p>
            <TrashIcon className="w-4" onClick={handleTrashClick} />
        </li>
    )
}