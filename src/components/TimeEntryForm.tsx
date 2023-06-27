import React, { useState } from "react";
import TimeEntry from "../domain/TimeEntry";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onAddTimeEntry({
      id: new Date().toISOString(),
      comment: inputValue,
      start: new Date(),
      end: new Date(),
    });
    setInputValue("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue} />
      {inputValue}
      <button type="submit">Absenden</button>
    </form>
  );
};

export default TimeEntryForm;
