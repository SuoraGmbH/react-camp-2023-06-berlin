import { z } from "zod";
import TimeEntry from "../domain/TimeEntry";

export const TimeEntryBackendSchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

const TimeEntryResponseSchema = z.array(TimeEntryBackendSchema);

const fetchTimeEntries = async (): Promise<TimeEntry[]> => {
  const response = await fetch("http://localhost:3001/timeEntries");

  return TimeEntryResponseSchema.parse(await response.json());
};

export default fetchTimeEntries;
