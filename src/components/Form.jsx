import { useState } from "react"

export default function Form(){
    const [name, setname] = useState("");
    return(
        <div>
            <form>
                <input onChange={(e)=>setname(e.target.value)} type="text" value={name}/>
            </form>
        </div>
    )

}