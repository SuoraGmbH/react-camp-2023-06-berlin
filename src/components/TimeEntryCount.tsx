import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchTimeEntries from "../api/fetchTimeEntries";

const TimeEntryCount: React.FunctionComponent = () => {
  const { data } = useQuery({
    queryKey: ["timeEntries"],
    queryFn: fetchTimeEntries,
  });

  if (data === undefined) {
    return null;
  }

  return <div>Wir haben aktuell {data.length} time entries</div>;
};

export default TimeEntryCount;
