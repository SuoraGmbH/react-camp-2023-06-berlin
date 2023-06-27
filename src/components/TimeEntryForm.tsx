import React, { useState } from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hello World");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      {inputValue}
      <button type="submit">Absenden</button>
    </form>
  );
};

export default TimeEntryForm;
