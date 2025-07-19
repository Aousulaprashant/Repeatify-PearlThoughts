import React from "react";
import "../styles/CustomPattern.css";
import { useRecurring } from "../Context/RecurringContext";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CustomPattern = () => {
  const { frequency, weekDays, setWeekDays, customPattern, setCustomPattern } =
    useRecurring();

  if (frequency === "Weekly") {
    return (
      <div className="custom-pattern">
        <label className="labelcustom">Select Weekdays</label>
        <div className="weekday-grid">
          {daysOfWeek.map((day) => (
            <label key={day} className="weekday-item">
              <input
                type="checkbox"
                checked={weekDays.includes(day)}
                onChange={() =>
                  setWeekDays(
                    weekDays.includes(day)
                      ? weekDays.filter((d) => d !== day)
                      : [...weekDays, day]
                  )
                }
              />
              {day}
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (frequency === "Monthly") {
    return (
      <div className="custom-pattern">
        <label className="labelcustom">Monthly Pattern</label>
        <div className="monthly-pattern">
          <input
            type="number"
            min={1}
            max={5}
            value={customPattern.nth}
            onChange={(e) =>
              setCustomPattern({ ...customPattern, nth: +e.target.value })
            }
            className="input-smallcustom"
          />
          <select
            value={customPattern.day}
            onChange={(e) =>
              setCustomPattern({ ...customPattern, day: e.target.value })
            }
            className="selectcustom"
          >
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomPattern;
