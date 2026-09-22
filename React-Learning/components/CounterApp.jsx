import React , {useState} from 'react'

const CounterApp = () => {

    const[Count,setCount] = useState(0)
    const handleIncrease = () =>{
        setTimeout(()=>setCount(Count+1),1000);
    };

    const handleDecrease = () =>{
        setTimeout(()=>setCount(Count-1),1000)
    } 

  return (
    <div>
        count:{Count}
        <hr/>
        <div>
            <button type='button' onClick={handleIncrease}>Increase</button>
            <button type='button' onClick={handleDecrease}>Decrease</button>
        </div>
    </div>
  )
}

export default CounterApp