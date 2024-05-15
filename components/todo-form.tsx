"use client"

import { createTodo } from "@/actions/create-todo";
import { useFormState } from "react-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef } from "react";

export function TodoForm() {
    const [response, addTodoAction, isPending] = useFormState(createTodo, null)
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <form 
        className="max-w-xl mx-auto"
        action={async (formData) => {
            addTodoAction(formData)
            formRef.current?.reset()
        }}
        ref={formRef}
        >
            <h1 className="text-3xl font-bold">Todos</h1>
            <div className="mt-4 flex gap-2 items-center"> 
                <Input 
                placeholder="todo" 
                name="todo"
                disabled={isPending}
                />
                <Button
                disabled={isPending}
                >
                    Add todo
                </Button>
            </div>
            {response?.error && (<span className="text-sm font-medium text-destructive mt-2">{response.error}</span>)}
        </form>
    )
}