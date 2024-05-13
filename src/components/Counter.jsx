import { useState } from "react"

export default function Counter(){
   const [count,setcount] = useState(0);
   function handelonclick(){
      setcount(count+1)
   }
   function handelonclickdis(){
      setcount(count-1)
   }
    return(

        <div>
            <h1>Number is : {count}</h1>
            <button onClick={handelonclick}>incress</button>
            <button onClick={handelonclickdis}>dicress</button>
        </div>
    )
}