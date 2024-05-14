import { useState } from "react";
export default function Fromtodo(){
    const [todo, setTodo] = useState("");

    function formSubmission(e) {
        e.preventDefault(); // Prevent form submission
        setTodos([...todos, todo]);
        setTodo(""); // Clear the input field after adding todo
      }
    return(
        <form onSubmit={formSubmission}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
    )
}