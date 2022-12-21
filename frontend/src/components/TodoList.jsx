import { useTodos } from "../hooks"
import TodoItem from "./TodoItem";

export default function TodoList({ className }) {
    const { todos } = useTodos();
    if(todos?.length === 0) {
        return (
            <div className="w-full text-center p-10 font-bold">
                <h4>You do not have any To-Do's yet</h4>
            </div>
        )
    }
    return (
        <ul className={`space-y-2 ${className}`}>
            {todos && todos.map((todo) => (
                <TodoItem todo={todo} key={todo._id} />
            ))}
        </ul>
    )
}