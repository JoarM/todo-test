"use server"

import { db } from "@/db"
import { todoTable } from "@/db/schema"
import { revalidatePath } from "next/cache"

export async function createTodo(_: any, formData: FormData) {
    const todo = formData.get("todo")?.toString()
    if (!todo) {
        return {
            error: "No todo provided"
        }
    }

    await db.insert(todoTable).values({
        task: todo,
        isCompleted: false
    })

    revalidatePath("/server")
}