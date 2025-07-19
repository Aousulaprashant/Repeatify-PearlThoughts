import React from "react";
import { useRecurring } from "../Context/RecurringContext";
import "../styles/RecurrOptions.css";

const RecurrenceOptions = () => {
  const { frequency, setFrequency, interval, setInterval } = useRecurring();

  return (
    <div className="recurrence-options">
      <div>
        <label className="label labelT">Recurrence Type</label>
        <br />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="select"
        >
          {["Daily", "Weekly", "Monthly", "Yearly"].map((freq) => (
            <option key={freq} value={freq}>
              {freq}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="label labelT">
          Every X {frequency.toLowerCase()}(s):
        </label>
        <br />
        <input
          type="number"
          value={interval}
          min={1}
          onChange={(e) => setInterval(+e.target.value)}
          className="input inpop"
        />
      </div>
    </div>
  );
};

export default RecurrenceOptions;
