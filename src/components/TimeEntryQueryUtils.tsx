import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getGetTimeEntriesQueryKey } from "../api/time-entries";

const TimeEntryQueryUtils: React.FunctionComponent = () => {
  const queryClient = useQueryClient();

  return (
    <div>
      <button
        onClick={() => queryClient.refetchQueries(getGetTimeEntriesQueryKey())}
      >
        Daten neu laden
      </button>
      <button
        onClick={() => {
          queryClient.setQueryData(["timeEntries"], []);
        }}
      >
        Daten ersetzen
      </button>
    </div>
  );
};

export default TimeEntryQueryUtils;
