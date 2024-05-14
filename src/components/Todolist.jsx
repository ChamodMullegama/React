import styles from './Todolist.module.css';

export default function Todolist({item}){
    return(
      <div className={styles.item} >
        <div className={styles.nameitem}>
           {item}
           <hr />
        </div>
      </div>
    )
}