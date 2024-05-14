import styles from './From.module.css';
import { useState } from "react";
export default function Fromtodo({todos,setTodos}){
    const [todo, setTodo] = useState("");

    function formSubmission(e) {
        e.preventDefault(); // Prevent form submission
        setTodos([...todos, todo]);
        setTodo(""); // Clear the input field after adding todo
      }
    return(
        <form  className={styles.todofrom} onSubmit={formSubmission}>
           <div className={styles.contaner}>
           <input
                className={styles.input}
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                placeholder='Enter the todo'
              />
              <button 
              type="submit"
              className={styles.button}
              >  
              Add</button>
           </div>
      </form>
    )
}