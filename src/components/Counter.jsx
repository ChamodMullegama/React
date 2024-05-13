import { useState } from "react"

export default function Counter(){
   const [count,setcount] = useState(0);
   const [incremantby,sincremanthbycount] = useState(1)

   function handelonclick(){
      setcount(count+incremantby)
   }
   function handelonclickdis(){
      setcount(count-incremantby)
   }

   function handelonclickinc(){
      sincremanthbycount(incremantby+1)
   }
   function handelonclickdes(){
      sincremanthbycount(incremantby-1)
   }
    return(

        <div>
            <h1>Number is : {count}</h1>
            <button onClick={handelonclick}>incress</button>
            <button onClick={handelonclickdis}>dicress</button>

            <h1>Number is : {incremantby}</h1>
            <button onClick={handelonclickinc}>increment</button>
            <button onClick={handelonclickdes}>descriment</button>
        </div>
    )
}