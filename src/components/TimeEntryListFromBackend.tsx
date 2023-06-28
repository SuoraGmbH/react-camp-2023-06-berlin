import React from "react";
import TimeEntryList from "./TimeEntryList";
import fetchTimeEntries from "../api/fetchTimeEntries";
import { useQuery } from "@tanstack/react-query";

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const { data: timeEntries } = useQuery({
    queryKey: ["timeEntries"],
    queryFn: fetchTimeEntries,
  });

  if (timeEntries === undefined) {
    return <div>Loading…</div>;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromBackend;
