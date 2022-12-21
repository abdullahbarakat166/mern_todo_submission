import CreateTodoForm from "../components/CreateTodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
    return (
        <main className="bg-background text-white h-screen p-10">
            <div className="">
                <h1 className="text-center font-bold text-3xl">MERN TODO</h1>
                <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-4 mt-4">
                    <TodoList className="w-full lg:w-4/6"/>
                    <CreateTodoForm className="w-full lg:w-2/6"/>
                </div>
            </div>
        </main>
    )
}