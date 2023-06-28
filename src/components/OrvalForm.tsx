import TimeEntryForm from "./TimeEntryForm";
import TimeEntry from "../domain/TimeEntry";
import { useAddTimeEntry } from "../api/time-entries";

const OrvalForm = () => {
  const mutation = useAddTimeEntry();
  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    mutation.mutate({
      data: timeEntry,
    });
  };

  return <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />;
};
