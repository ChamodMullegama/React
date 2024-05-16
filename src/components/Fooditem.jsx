import React from 'react'

function Fooditem({food}) {
  return (
    <div>
           <img src={food.image} alt="" />
           <h1>{food.title}</h1>
           <button>view more</button>
    </div>
  )
}

export default Fooditem