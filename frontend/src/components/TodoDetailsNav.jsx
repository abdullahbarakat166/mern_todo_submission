import { useTodoFromRoute } from "../hooks"
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import CompletionToggler from "./CompletionToggler";

export default function TodoDetailsNav() {
    const { todo } = useTodoFromRoute();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1)
    }

    return (
        <nav className="bg-slate-800 p-5 mb-10 flex justify-between">
            <div className="flex space-x-4">
                <ArrowLeftIcon
                    className="w-6 cursor-pointer"
                    onClick={handleBack}
                />
                <p className="font-semibold">{todo.title}</p>
            </div>
            <div>
                <CompletionToggler/>
            </div>
        </nav>
    )
}