import { useState } from "react";
import Todolist from "./Todolist";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function formSubmission(e) {
    e.preventDefault(); // Prevent form submission
    setTodos([...todos, todo]);
    setTodo(""); // Clear the input field after adding todo
  }

  return (
    <div>
      <form onSubmit={formSubmission}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
        <Todolist key={item} item={item} />
      ))}
    </div>
  );
}
