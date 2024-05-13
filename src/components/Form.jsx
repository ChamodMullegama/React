import { useState } from "react"

export default function Form(){
    const [name, setname] = useState({fname:"",lname:""});
    function frombuutonhandel(e){
        e.preventDefault();
        console.log(name)
    }
    return(
        <div>
            {name.fname} - {name.lname}
            <form>
                <input 
                onChange={(e)=>setname({...name,fname:e.target.value})} 
                type="text" 
                value={name.fname}
                />
                <input 
                onChange={(e)=>setname({...name,lname:e.target.value})} 
                type="text" 
                value={name.lname}
                />
                <button onClick={(e)=>frombuutonhandel(e)}>Submit</button>
            </form>
        </div>
    )

}