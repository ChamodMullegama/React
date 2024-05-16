import React, { useEffect, useState } from 'react'

const URL =" https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "dee50e7439ca4117b50468f761e1ea9e";
function Find() {
    const [query,setquery] = useState("pizza")
    useEffect(()=>{
     async function fatchfood(){
         const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
         const data = await res.json()
         console.log(data.results)
       }
       fatchfood()
      
    },[query])
  return (
    <div>
        <input 
        type="text"
        value={query}
        onChange={(e)=>setquery(e.target.value)}
        />
    </div>
  )
}

export default Find