import { useState } from "react";
import TimeEntryCount from "./TimeEntryCount";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <button onClick={() => setIsToggled((prevIsToggled) => !prevIsToggled)}>
        {isToggled ? "ON" : "OFF"}
      </button>

      {isToggled ? <TimeEntryCount /> : null}
    </div>
  );
};

export default Toggle;
