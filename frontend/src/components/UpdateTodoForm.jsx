import useUpdateTodo from "../hooks/useUpdateTodo";
import TextField from "./TextField";

export default function UpdateTodoForm({ todo, refetch }) {
    const {
        title,
        description,
        onTitleChange,
        onDescriptionChange,
        onSubmit
    } = useUpdateTodo({
        defaultTitle: todo.title,
        defaultDescription: todo.description
    }, {
        onSuccess: refetch
    });

    async function handleSubmit(e) {
        e.preventDefault();
        onSubmit(todo._id);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                placeholder="Title"
                value={title}
                onChange={e => onTitleChange(e.target.value)}
                required
            />
            <TextField
                className="mt-2"
                placeholder="Description"
                value={description}
                onChange={e => onDescriptionChange(e.target.value)}
                multi />
            <div className="mt-2">
                <button className="bg-primary p-2 px-4 w-full rounded-md">Submit</button>
            </div>
        </form>
    )
}