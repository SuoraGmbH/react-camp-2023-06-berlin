import TimeEntryView from "./components/TimeEntryView";
import React, { useState } from "react";
import TimeEntry from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import TimeEntryList from "./components/TimeEntryList";
import GithubRepoStats from "./components/GithubRepoStats";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats";

export default function App() {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
  };

  return (
    <>
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <TimeEntryList timeEntries={timeEntries} />
      <GithubRepoStats repoName="facebook/react" />
      <GithubRepoStats repoName="lacebook/react" />
      <GithubRepoStats repoName="" />
      <div style={{ border: "3px dashed yellow" }}>
        <DynamicGithubRepoStats />
      </div>
    </>
  );
}
