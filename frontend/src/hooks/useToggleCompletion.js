import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { toggleCompletion } from "../api/todos";

export default function useToggleCompletion() {
    const mutation = useMutation((todoId) => toggleCompletion(todoId), {
        onSuccess: (response) => {
            const todo = response.data;
            const msg = todo.completed ? "Marked as completed" : "Marked as To-Do";
            toast(msg, {
                position: "bottom-right"
            });
        }
    });
    return {
        toggleCompletion: mutation.mutate,
    }
}