import styles from './Listtodo.module.css';
import Todolist from "./Todolist";
export default function Listtodo({todos,setTodos}){
    return(
        <div className={styles.list}>
        {todos.map((item) => (
        <Todolist key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
        </div>
    )
}