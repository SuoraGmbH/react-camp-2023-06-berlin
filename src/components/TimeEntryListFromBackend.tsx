import React, { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry";
import TimeEntryList from "./TimeEntryList";

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((timeEntries) =>
        timeEntries.map((timeEntry: any) => {
          return {
            ...timeEntry,
            start: new Date(timeEntry.start),
            end: new Date(timeEntry.end),
          };
        })
      )
      .then(setTimeEntries);
  }, []);

  if (timeEntries === undefined) {
    return <div>Loading…</div>;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromBackend;
