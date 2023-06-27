import TimeEntryView from "./components/TimeEntryView";
import React from "react";
import TimeEntry from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import TimeEntryList from "./components/TimeEntryList";

export default function App() {
  // So können wir den typen *einer* bestimmten Prop inferieren
  // const timeEntry: React.ComponentProps<typeof TimeEntryView>["timeEntry"] = {
  const timeEntry: TimeEntry = {
    start: new Date(),
    end: new Date(),
    comment: "Hallo Welt",
    id: "sdhiaj9das9udjsaj9ußdsa",
  };

  return (
    <>
      <TimeEntryView timeEntry={timeEntry} />
      <TimeEntryForm />
      <TimeEntryList />
    </>
  );
}
