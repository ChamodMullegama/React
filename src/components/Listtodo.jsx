import styles from './Listtodo.module.css';
import Todolist from "./Todolist";
export default function Listtodo({todos}){
    return(
        <div className={styles.list}>
        {todos.map((item) => (
        <Todolist key={item} item={item} />
      ))}
        </div>
    )
}