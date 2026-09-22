import { useEffect } from "react";



const Hooks = ({toggle, onToggle}) => {
    useEffect(()=>{
    console.log('iam run on every render : mount')
  },[])

   return (
    <div>
      <button type="button" onClick={onToggle}> Toggle</button>
      {toggle && <div> hello react </div> }
    </div>
   )
}
    
export default Hooks;
