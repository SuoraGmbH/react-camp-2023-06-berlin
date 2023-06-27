import { useState } from "react";

const ArrayComponent = () => {
  // readonly verbietet array.push
  const [array, setArray] = useState<readonly number[]>([0]);
  const handleClick = () => {
    setArray((prevArray) => [...prevArray, 0]);
  };

  return (
    <div>
      <h1>We have {array.length} entries.</h1>
      <button onClick={handleClick}>Append Element</button>
    </div>
  );
};

export default ArrayComponent;
