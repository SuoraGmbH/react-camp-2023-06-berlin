import { z } from "zod";

const TimeEntryBackendSchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

const TimeEntryResponseSchema = z.array(TimeEntryBackendSchema);

const fetchTimeEntries = () => {
  return fetch("http://localhost:3001/timeEntries")
    .then((response) => response.json())
    .then(TimeEntryResponseSchema.parse);
};

export default fetchTimeEntries;
