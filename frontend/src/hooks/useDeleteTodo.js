import { useMutation, useQueryClient } from "react-query"
import { toast } from "react-toastify";
import { deleteTodo } from "../api/todos";

export default function useDeleteTodo() {
    const queryClient = useQueryClient();
    const mutation = useMutation((todoId) => deleteTodo(todoId), {
        onSuccess: () => {
            toast("Todo Deleted", {
                position: "bottom-right"
            })
            queryClient.invalidateQueries("todos");
        }
    });
    return { deleteTodo: mutation.mutate }
}