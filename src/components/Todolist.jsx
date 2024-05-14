import styles from './Todolist.module.css';

export default function Todolist({item}){
    return(
      <div className={styles.item} >
        <div className={styles.nameitem}>
           {item}
           <span>
             <button className={styles.deletebutton}>X</button>
           </span>
           <hr />
        </div>
      </div>
    )
}