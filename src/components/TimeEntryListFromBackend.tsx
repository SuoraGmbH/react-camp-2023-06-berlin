import React, { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry";
import TimeEntryList from "./TimeEntryList";
import { z } from "zod";

const TimeEntryBackendSchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.string(),
  end: z.string().datetime(),
});

const TimeEntryResponseSchema = z.array(TimeEntryBackendSchema);

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((timeEntries: unknown) => {
        const parsedTimeEntries = TimeEntryResponseSchema.parse(timeEntries);

        return parsedTimeEntries.map(
          (timeEntry): TimeEntry => ({
            ...timeEntry,
            start: new Date(timeEntry.start),
            end: new Date(timeEntry.end),
          })
        );
      })
      .then(setTimeEntries);
  }, []);

  if (timeEntries === undefined) {
    return <div>Loading…</div>;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromBackend;
