import { useQuery } from "react-query";
import { getTodos } from "../api/todos";


export default function useTodos() {
    const { data: response } = useQuery("todos", getTodos);
    return { todos: response?.data }
}