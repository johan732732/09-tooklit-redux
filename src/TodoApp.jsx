import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId((prev) => prev + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId((prev) => prev - 1);
  };
  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <h4>{isLoading ? "true" : "false"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev todo</button>
      <button onClick={nextTodo}>Next todo</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}:</strong> {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
