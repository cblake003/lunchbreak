import React from "react";
import { useState } from "react";
import {
  Datepicker,
  DatepickerEvent,
} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { startOfDay, format } from "date-fns";

export default function DateSelector({ onDateSelected }) {
  const today = startOfDay(new Date());
  const [date, setDate] = useState(today);

  const handleChange = (DatepickerEvent) => {
    const [startValue] = DatepickerEvent;
    setDate(startValue);
    const dateString = format(startValue, "yyyy-MM-dd");
    onDateSelected(dateString);
    console.log(dateString);
  };

  return (
    <div>
      <Datepicker
        onChange={handleChange}
        locale={enUS}
        startValue={date} // Sets Start date to today & sets to selected date
        endValue={date} // Sets End date to today & sets to selected date
        color="blue"
      />
      <div>Select a date</div>
    </div>
  );
}

// Passsing a date object for info
// Debugging dates
// DatepickerEvent: {startValue, endValue, rangeDates} find out why not keeping track values
