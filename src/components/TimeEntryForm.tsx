import React, { useState } from "react";
import TimeEntry from "../domain/TimeEntry";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const [comment, setComment] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onAddTimeEntry({
      id: new Date().toISOString(),
      comment: comment,
      start: new Date(),
      end: new Date(),
    });
    setComment("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={comment} />
      {comment}
      <button type="submit">Absenden</button>
    </form>
  );
};

export default TimeEntryForm;
