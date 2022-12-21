import { clsx } from "clsx";

export default function Label({ isCompleted }) {
    return (
        <span className={
            clsx({
                "rounded-full px-1 text-white text-xs": true,
                "bg-primary": isCompleted,
                "bg-red-600": !isCompleted
            })
        }>
            {isCompleted ? "completed" : "not completed"}
        </span>
    )
}