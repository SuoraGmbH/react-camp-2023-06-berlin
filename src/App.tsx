import TimeEntryView from "./components/TimeEntryView";
import React from "react";
import TimeEntry from "./domain/TimeEntry";

export default function App() {
  const timeEntry: TimeEntry = {
    start: new Date(),
    end: new Date(),
    comment: "Hallo Welt",
    id: "sdhiaj9das9udjsaj9ußdsa",
  };

  return (
    <>
      <h1>Hallo react-camp!</h1>
      <TimeEntryView timeEntry={timeEntry} />
    </>
  );
}
