import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DataRange.css";
import "react-datepicker/dist/react-datepicker.css";
import { useRecurring } from "../Context/RecurringContext";

const FloatingDatePicker = ({ label, value, onChange }) => {
  const [focused, setFocused] = useState(false);

  const showLabelUp = focused || !!value;
  const inputId = `datepicker-${label.toLowerCase().replace(/\s+/g, "-")}`; // 👈 unique & testable ID

  return (
    <div className="floating-date-wrapper">
      <label
        htmlFor={inputId}
        className={`floating-label ${showLabelUp ? "float" : ""}`}
      >
        {label}
      </label>
      <DatePicker
        id={inputId} // 👈 bind to label
        selected={value ? new Date(value) : null}
        onChange={(date) =>
          onChange(date ? date.toISOString().split("T")[0] : "")
        }
        dateFormat="yyyy-MM-dd"
        placeholderText=""
        className="datepicker-input"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        isClearable
      />
    </div>
  );
};

const DateRangeSelector = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurring();

  return (
    <>
      <label className="labelDate">Dates?</label>
      <div className="date-range-selector">
        <FloatingDatePicker
          label="Start Date"
          value={startDate}
          onChange={setStartDate}
        />
        <FloatingDatePicker
          label="End Date"
          value={endDate}
          onChange={setEndDate}
        />
      </div>
    </>
  );
};

export default DateRangeSelector;
