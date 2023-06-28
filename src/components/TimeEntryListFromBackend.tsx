import React from "react";
import TimeEntryList from "./TimeEntryList";
import fetchTimeEntries from "../api/fetchTimeEntries";
import { useQuery } from "@tanstack/react-query";
import { useGetTimeEntries } from "../api/time-entries";
import { data } from "msw";

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const { data: response } = useGetTimeEntries();

  if (data === undefined) {
    return <div>Loading…</div>;
  }

  return <TimeEntryList timeEntries={data.data} />;
};

export default TimeEntryListFromBackend;
