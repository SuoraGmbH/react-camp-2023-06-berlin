import React from "react";
import TimeEntry from "../domain/TimeEntry";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView: React.FunctionComponent<Props> = ({ timeEntry }) => {
  console.log(timeEntry);
  return (
    <div>
      {timeEntry.comment} von {timeEntry.start.toLocaleTimeString()}
    </div>
  );
};

export default TimeEntryView;
