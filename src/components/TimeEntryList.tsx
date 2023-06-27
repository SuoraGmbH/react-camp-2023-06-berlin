import React from "react";
import TimeEntry from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

interface Props {
  timeEntries: TimeEntry[];
}

const TimeEntryList: React.FunctionComponent<Props> = ({ timeEntries }) => {
  return (
    <div>
      {timeEntries.map((timeEntry) => {
        return <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />;
      })}
    </div>
  );
};

export default TimeEntryList;
