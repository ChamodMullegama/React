import Display from "./Display";
import NonDisplay from "./NonDisplay,";

export default function ConditionalComponents(){
    const display =false;
    if(display){
        return(
            <div>
               <Display/>
            </div>
        )
    }else{
        return(
            <div>
               <NonDisplay/>
            </div>
        )
    }
    
}