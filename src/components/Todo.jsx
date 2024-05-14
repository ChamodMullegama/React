import { useState } from "react";
import Todolist from "./Todolist";
import Fromtodo from "./Fromtodo";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Fromtodo />
      {todos.map((item) => (
        <Todolist key={item} item={item} />
      ))}
    </div>
  );
}
