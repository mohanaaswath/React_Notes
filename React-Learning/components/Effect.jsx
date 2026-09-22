import React, { useEffect, useState } from 'react';
function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Effect ran because count or userId changed!`);
    

    // Example: Fetch data when count or userId changes
    // fetchData(count, userId);

  }, [count]); // Runs whenever count or userId changes

  return (
    <div>
      <h1>useEffect on Specific Value Change</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
export default Effect;