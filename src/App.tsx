import TimeEntryView from "./components/TimeEntryView";
import React from "react";

export default function App() {
  const timeEntryViewProps: React.ComponentProps<typeof TimeEntryView> = {
    comment: "React ist knorke!",
  };

  return (
    <>
      <h1>Hallo react-camp!</h1>
      <TimeEntryView {...timeEntryViewProps} />
    </>
  );
}
