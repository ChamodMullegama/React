import Display from "./Display";
import NonDisplay from "./NonDisplay,";

export default function ConditionalComponents(){
   let display= false;
   let massage;
   if(display){
       massage=<Display/>
   }else{
       massage=<NonDisplay/>
   }

   return massage;


    
}