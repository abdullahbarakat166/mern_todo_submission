import { useState } from "react";
import useCreateTodo from "../hooks/useCreateTodo";
import TextField from "./TextField";

export default function CreateTodoForm({ className }) {
    const { onSubmit,
        title,
        onTitleChange,
        description,
        onDescriptionChange
    } = useCreateTodo();

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form className={`${className}`} onSubmit={handleSubmit}>
            <div>
                <TextField
                    placeholder="Title"
                    required
                    value={title}
                    onChange={e => onTitleChange(e.target.value)}
                />
            </div>
            <div className="mt-2">
                <TextField
                    placeholder="Description"
                    value={description}
                    onChange={e => onDescriptionChange(e.target.value)}
                    multi
                />
            </div>
            <div className="mt-2">
                <button className="bg-primary p-2 px-4 w-full rounded-md">Submit</button>
            </div>
        </form>
    )
}