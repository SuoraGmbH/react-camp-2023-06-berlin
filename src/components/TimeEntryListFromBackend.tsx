import React from "react";
import TimeEntryList from "./TimeEntryList";
import fetchTimeEntries from "../api/fetchTimeEntries";
import { useQuery } from "@tanstack/react-query";
import { useGetTimeEntries } from "../api/time-entries";

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const { data: response } = useGetTimeEntries();

  if (response === undefined) {
    return <div>Loading…</div>;
  }

  return <TimeEntryList timeEntries={response.data} />;
};

export default TimeEntryListFromBackend;
