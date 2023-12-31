import TimeEntryView from "./components/TimeEntryView";
import React, { useState } from "react";
import TimeEntry from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import TimeEntryList from "./components/TimeEntryList";
import GithubRepoStats from "./components/GithubRepoStats";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats";
import TimeEntryListFromBackend from "./components/TimeEntryListFromBackend";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Toggle from "./components/Toggle";
import TimeEntryQueryUtils from "./components/TimeEntryQueryUtils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TimeEntryQueryUtils />
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <TimeEntryList timeEntries={timeEntries} />
      <Toggle />
      <GithubRepoStats repoName="facebook/react" />
      {/*<GithubRepoStats repoName="" />*/}
      {/*<div style={{ border: "3px dashed yellow" }}>*/}
      {/*  <DynamicGithubRepoStats />*/}
      {/*</div>*/}
      {/*<hr />*/}
      {/*<TimeEntryListFromBackend />*/}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
