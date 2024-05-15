"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState(""); 

  function addTodo (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    setTodos([...todos, todoInput]);
    setTodoInput("");
  }

  function deleteTodo(index: number) {
    const newArray = todos
    newArray.splice(index, 1)

    setTodos([...newArray])
  }

  return (
    <main className="max-w-7xl w-full px-5 mx-auto py-6">
     <form 
     className="max-w-xl mx-auto"
     onSubmit={addTodo}
     >
      <h1 className="text-3xl font-bold">Todos</h1>
      <div className="mt-4 flex gap-2 items-center"> 
        <Input 
        placeholder="todo" 
        value={todoInput} 
        onChange={(e) => setTodoInput(e.target.value)} 
        name="todo"
        />
        <Button>Add todo</Button>
      </div>
     </form>
     <ul className="mt-4 max-w-xl mx-auto divide-y divide-border">
      {todos.map((todo, index) => {
        return (
          <li className="py-2 flex items-center" key={index}>
            <span>{todo}</span>
            <Button 
            variant="destructive" 
            size="icon"
            className="ml-auto"
            type="button"
            onClick={() => {
              deleteTodo(index)
            }}
            >
              <Trash 
              className="size-4"
              />
              <span className="sr-only">Delete todo</span>
            </Button>
          </li>
        )
      })}
     </ul>
    </main>
  );
}
