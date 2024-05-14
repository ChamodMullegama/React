import styles from './From.module.css';
import { useState } from "react";
export default function Fromtodo({todos,setTodos}){
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({naem:"",done:false});

    function formSubmission(e) {
        e.preventDefault(); // Prevent form submission
        setTodos([...todos, todo]);
        setTodo({naem:"",done:false}); // Clear the input field after adding todo
      }
    return(
        <form  className={styles.todofrom} onSubmit={formSubmission}>
           <div className={styles.contaner}>
           <input
                className={styles.input}
                type="text"
                onChange={(e) => setTodo({name:e.target.value,done:false})}
                value={todo.name}
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