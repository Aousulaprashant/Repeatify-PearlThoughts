import React from "react";
import "../styles/CalenderPre.css";
import { useRecurring } from "../Context/RecurringContext";

const CalendarPreview = () => {
  const { dates } = useRecurring();

  return (
    <div className="preview-top">
      <h2 className="preview-title">Recurring Dates</h2>
      <div className="calendar-preview">
        {dates.length === 0 ? (
          <p className="preview-empty">No dates generated.</p>
        ) : (
          <ul className="preview-list">
            {dates.map((date, i) => (
              <li key={i} className="preview-item">
                {date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CalendarPreview;
