import React, { useState } from "react";

const Counter: React.FunctionComponent = () => {
  // const stateArray = useState(0);
  // const count = stateArray[0];
  // const setCount = stateArray[1];

  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
