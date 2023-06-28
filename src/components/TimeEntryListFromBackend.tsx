import React, { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry";
import TimeEntryList from "./TimeEntryList";
import { z } from "zod";

const TimeEntryBackendSchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

const TimeEntryResponseSchema = z.array(TimeEntryBackendSchema);

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then(TimeEntryResponseSchema.parse)
      .then(setTimeEntries);
  }, []);

  if (timeEntries === undefined) {
    return <div>Loading…</div>;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromBackend;
