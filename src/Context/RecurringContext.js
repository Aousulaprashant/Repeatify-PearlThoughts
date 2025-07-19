"use client";
import React, { createContext, useContext, useState, useMemo } from "react";
import { generateRecurringDates } from "../utils/generateRecurringDates";

const RecurringContext = createContext();

export const RecurringProvider = ({ children }) => {
  const [frequency, setFrequency] = useState("Daily");
  const [interval, setInterval] = useState(1);
  const [weekDays, setWeekDays] = useState([]);
  const [customPattern, setCustomPattern] = useState({ nth: 1, day: "Monday" });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dates = useMemo(() => {
    return generateRecurringDates({
      frequency,
      interval,
      weekDays,
      customPattern,
      startDate,
      endDate,
    });
  }, [frequency, interval, weekDays, customPattern, startDate, endDate]);

  return (
    <RecurringContext.Provider
      value={{
        frequency,
        setFrequency,
        interval,
        setInterval,
        weekDays,
        setWeekDays,
        customPattern,
        setCustomPattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        dates,
      }}
    >
      {children}
    </RecurringContext.Provider>
  );
};

export const useRecurring = () => useContext(RecurringContext);
