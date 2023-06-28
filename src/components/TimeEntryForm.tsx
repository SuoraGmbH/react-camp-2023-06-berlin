import React, { useState } from "react";
import TimeEntry from "../domain/TimeEntry";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TimeEntryBackendSchema } from "../api/fetchTimeEntries";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const { handleSubmit, register, formState } = useForm<{
    comment: string;
    start: string;
    end: string;
  }>({
    resolver: zodResolver(
      TimeEntryBackendSchema.omit({ id: true, comment: true }).extend({
        comment: z.string().min(4),
      })
    ),
  });
  console.log(formState.errors);
  return (
    <form
      onSubmit={handleSubmit((values) => {
        onAddTimeEntry({
          id: new Date().toISOString(),
          comment: values.comment,
          start: new Date(values.start),
          end: new Date(values.end),
        });
      })}
    >
      {formState.errors.comment && formState.errors.comment.message}
      <input {...register("comment")} />
      <input type="datetime-local" {...register("start")} />
      <input type="datetime-local" {...register("end")} />

      <button type="submit">Absenden</button>
    </form>
  );
};

export default TimeEntryForm;
