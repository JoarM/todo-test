"use client"

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { deleteTodo } from "@/actions/delete-todo";

export function DeleteTodoButton({
    id
}: {
    id: number 
}) {
    const [isPending, startDeleteTransistion] = useTransition()

    return (
        <Button 
        variant="destructive" 
        size="icon"
        className="ml-auto"
        type="button"
        disabled={isPending}
        onClick={() => {
            startDeleteTransistion(async () => {
                deleteTodo(id)
            })
        }}
        >
            <Trash 
            className="size-4"
            />
            <span className="sr-only">Delete todo</span>
        </Button>
    )
}