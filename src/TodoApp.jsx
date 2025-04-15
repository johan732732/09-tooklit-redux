import { useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <h4>{isLoading ? "true" : "false"}</h4>

      <pre>...</pre>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}:</strong> {todo.title}
          </li>
        ))}
      </ul>

      <button>Next todo</button>
    </>
  );
};
