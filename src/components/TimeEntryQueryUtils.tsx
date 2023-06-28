import React from "react";
import { useQueryClient } from "@tanstack/react-query";

const TimeEntryQueryUtils: React.FunctionComponent = () => {
  const queryClient = useQueryClient();

  return (
    <div>
      <button onClick={() => queryClient.refetchQueries(["timeEntries"])}>
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
