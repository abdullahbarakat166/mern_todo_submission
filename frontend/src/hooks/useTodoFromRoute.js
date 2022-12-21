import { useLoaderData, useRevalidator } from "react-router-dom";

export default function useTodoFromRoute() {
    const revalidator = useRevalidator();

    const todo = useLoaderData();

    function refetch() {
        revalidator.revalidate();
    }

    return { todo, refetch }
}