import React from 'react'
import Fooditem from './Fooditem'

function Foodlist({fooddata}) {
  return (
    <div>
           {fooddata.map((food)=>
              <Fooditem key={food.id} food={food}/>
           )}
    </div>
  )
}

export default Foodlist