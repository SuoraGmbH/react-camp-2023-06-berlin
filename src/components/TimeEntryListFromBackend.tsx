import React, { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry";
import TimeEntryList from "./TimeEntryList";
import fetchTimeEntries from "../api/fetchTimeEntries";

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetchTimeEntries().then(setTimeEntries);
  }, []);

  if (timeEntries === undefined) {
    return <div>Loading…</div>;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromBackend;
