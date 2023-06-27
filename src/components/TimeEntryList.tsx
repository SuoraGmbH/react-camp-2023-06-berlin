import React from "react";
import TimeEntry from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

const TimeEntryList: React.FunctionComponent = () => {
  const timeEntries: TimeEntry[] = [
    { id: "1", comment: "Hi", start: new Date(), end: new Date() },
    { id: "2", comment: "Hallo", start: new Date(), end: new Date() },
    { id: "3", comment: "Hello", start: new Date(), end: new Date() },
  ];

  return (
    <div>
      {timeEntries.map((timeEntry) => {
        return <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />;
      })}
    </div>
  );
};

export default TimeEntryList;
