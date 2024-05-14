import { useState } from "react";
import Todolist from "./Todolist";
import Fromtodo from "./Fromtodo";
import Listtodo from "./Listtodo";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Fromtodo todos={todos} setTodos={setTodos}/>
      <Listtodo todos={todos}/>
    </div>
  );
}
