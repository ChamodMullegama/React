import styles from './Todolist.module.css';

export default function Todolist({item,todos,setTodos}){
    function handleDelete(){
      console.log("delete")
      setTodos(todos.filter((todo)=>todo !== item));
    }
    return(
      <div className={styles.item} >
        <div className={styles.nameitem}>
           {item}
           <span>
             <button onClick={handleDelete} className={styles.deletebutton}>X</button>
           </span>
           <hr />
        </div>
      </div>
    )
}