import { useState } from "react";
import { updateTodo } from "../api/todos";
import { toast } from 'react-toastify';

export default function useUpdateTodo({
    defaultTitle,
    defaultDescription
}, options) {
    const [title, setTitle] = useState(defaultTitle);
    const [description, setDescription] = useState(defaultDescription);

    async function handleSubmit(todoId) {
        await updateTodo(todoId, { title, description });
        toast("Todo updated successfully", {
            position: "bottom-right"
        });
        if(options) {
            const { onSuccess } = options;
            await onSuccess();
        }
    }

    return {
        onSubmit: handleSubmit,
        title,
        description,
        onTitleChange: setTitle,
        onDescriptionChange: setDescription,
    }
}