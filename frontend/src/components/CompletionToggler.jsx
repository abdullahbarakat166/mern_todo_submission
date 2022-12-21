import { Switch } from '@headlessui/react'
import { useToggleCompletion, useTodoFromRoute } from '../hooks'
import { useQueryClient } from "react-query";

export default function CompletionToggler() {
    const { toggleCompletion } = useToggleCompletion();
    const { todo, refetch } = useTodoFromRoute();
    const queryClient = useQueryClient();

    function handleToggle() {
        toggleCompletion(todo._id, {
            onSuccess: () => {
                refetch();
                queryClient.invalidateQueries("todos");
            }
        });
    }

    return (
        <Switch
            checked={false}
            onChange={handleToggle}
            className={`${todo.completed ? 'bg-primary' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Complete Todo</span>
            <span
                className={`${todo.completed ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </Switch>
    )
}