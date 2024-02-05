import React from "react";
import { useState } from "react";
import {
  Datepicker,
  DatepickerEvent,
} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { startOfDay, addDays, subDays } from "date-fns";

export default function DateSelector() {
  const today = startOfDay(new Date());
  const [date, setDate] = useState({
    startValue: today,
    endValue: today,
    rangeDates: [],
  });

  const handleChange = (DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = DatepickerEvent;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
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
