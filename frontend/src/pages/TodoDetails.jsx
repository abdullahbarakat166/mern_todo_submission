import TodoDetailsNav from "../components/TodoDetailsNav";
import UpdateTodoForm from "../components/UpdateTodoForm";
import { useTodoFromRoute } from "../hooks";

export default function TodoDetails() {
    const { todo, refetch } = useTodoFromRoute();
    return (
        <main className="bg-background text-white h-screen">
            <TodoDetailsNav />
            <div className="w-2/3 mx-auto">
                <UpdateTodoForm todo={todo} refetch={refetch} />
            </div>
        </main>
    )
}