import { DeleteTodoButton } from "@/components/delete-todo-button";
import { TodoForm } from "@/components/todo-form";
import { getTodos } from "@/data/get-todos";

export default async function Page() {
    const todos = await getTodos()

    return (
        <main className="max-w-7xl w-full px-5 mx-auto py-6">
            <TodoForm />
            <ul className="mt-4 max-w-xl mx-auto divide-y divide-border">
            {todos.map(({ task, id }) => {
                return (
                    <li className="py-2 flex items-center" key={id}>
                        <span>{task}</span>
                        <DeleteTodoButton 
                        id={id}
                        />
                    </li>
                )
            })}
            </ul>
        </main>
    )
}

