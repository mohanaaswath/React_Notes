import React, { useState } from "react";

const ConditionalRendering = () => {
  const [count, setcount] = useState(0);

 
let message ;
let remainingClick = 10 - count;

  function handleIncrease() {
    setcount((prevCount) => prevCount + 1);
  }

  if(count < 10){
     message = (
      <div>
          <h3>you click {count} times</h3>
          <p>still {remainingClick} more times to reach a 10% discount </p>
        </div>
     )   
  } else if(count === 10){
     message = (
      <div>
          <h3>you click {count} times</h3>
          <p>you unlock a 10% discount </p>
        </div>
     )   
  } else if(count<20){
     message = (
      <div>
          <h3>you click {count} times</h3>
          <p>you're on the way to get more rewards ! keep click for 20% discount </p>
        </div>
     )  
  }else {
     message = (
      <div>
          <h3>you click {count} times</h3>
          <p> you're on the way to get more rewards ! you are click master </p>
        </div>
     )  
  }
  



  return (
    <div>
      <h1>conditional rendering</h1>
      <button onClick={handleIncrease}> click me</button>
      {message}      
    </div>
  );
};

export default ConditionalRendering;

