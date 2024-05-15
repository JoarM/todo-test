"use server"

import { db } from "@/db"
import { todoTable } from "@/db/schema"

export async function getTodos() {
    const todos = await db.select().from(todoTable)
    
    return todos
}