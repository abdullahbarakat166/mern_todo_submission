import { useState } from "react";
import { createTodo } from "../api/todos";
import { toast } from 'react-toastify';
import { useQueryClient } from "react-query";

export default function useCreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const queryClient = useQueryClient();

    async function handleSubmit() {
        try {
            await createTodo({ title, description });
            toast("Todo created", {
                position: "bottom-right"
            });
            setTitle("");
            setDescription("");
            queryClient.invalidateQueries("todos");
        } catch (e) {
            toast("Oops, an error occurred");
        }
    }

    return {
        onSubmit: handleSubmit,
        title,
        description,
        onTitleChange: setTitle,
        onDescriptionChange: setDescription
    }
}