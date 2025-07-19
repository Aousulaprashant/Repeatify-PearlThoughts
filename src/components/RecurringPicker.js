import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import CustomPattern from "./CustomPattern";
import DateRangeSelector from "./DateRangeSelector";
import CalendarPreview from "./CalendarPreview";
import { useRecurring } from "../Context/RecurringContext";
import "../styles/RecurrPicler.css";

const RecurringPicker = () => {
  const { dates } = useRecurring();

  return (
    <div className="recurring-picker-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="sidebar-title">
          🪄Let’s Build Your Schedule
          <hr />
        </h2>
        <RecurrenceOptions />
        <CustomPattern />
        <DateRangeSelector />
      </aside>

      {/* MAIN CONTENT */}
      <main className="calendar-area">
        <CalendarPreview dates={dates} />
      </main>
    </div>
  );
};

export default RecurringPicker;
