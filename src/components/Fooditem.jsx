import React from 'react';
import styles from './Fooditem.module.css'; // Import CSS module

function Fooditem({food}) {
  return (
    <div className={styles.foodItemContainer}>
           <img className={styles.foodImage} src={food.image} alt="" />
           <div className={styles.itemcontent}>
              <p className={styles.foodTitle}>{food.title} </p>
           </div>
           <div className={styles.buttoncontaner}>
               <button className={styles.viewMoreButton}>View More</button>
           </div>
          
    </div>
  )
}

export default Fooditem;
