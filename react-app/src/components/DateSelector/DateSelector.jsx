import React from "react";
import { useState } from "react";
import {
  Datepicker,
  DatepickerEvent,
} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { startOfDay, getDay, addDays, subDays } from "date-fns";

export default function DateSelector({ onDateSelected }) {
  const today = startOfDay(new Date());
  const [date, setDate] = useState({
    startValue: subDays(today, 7),
    endValue: addDays(today, 7),
    rangeDates: [subDays(today, 7), addDays(today, 7)],
  });

  const handleChange = (DatepickerEvent) => {
    const [startValue] = DatepickerEvent;
    setDate(startValue);
    const dayOfWeek = getDay(startValue);
    onDateSelected(dayOfWeek);
    console.log(dayOfWeek);
  };

  return (
    <div>
      <Datepicker
        onChange={handleChange}
        locale={enUS}
        startValue={date.startValue}
        endValue={date.endValue}
      />
      <div>Select a date</div>
    </div>
  );
}

// Passsing a date object for info
// Debugging dates
// DatepickerEvent: {startValue, endValue, rangeDates} find out why not keeping track values
