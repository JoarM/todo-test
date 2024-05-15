import { boolean, mediumint, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const todo = mysqlTable("todo", {
    id: mediumint("id").primaryKey().autoincrement(),
    task: varchar("task", { length: 255 }).notNull(),
    isCompleted: boolean("is_completed").notNull()
});