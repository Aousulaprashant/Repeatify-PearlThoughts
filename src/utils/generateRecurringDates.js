import { addDays, addWeeks, addMonths, addYears, format } from "date-fns";

export const generateRecurringDates = ({
  frequency,
  interval,
  weekDays,
  customPattern,
  startDate,
  endDate,
}) => {
  if (!startDate) return [];
  const results = [];
  let current = new Date(startDate);
  const last = endDate
    ? new Date(endDate)
    : new Date(current.getFullYear() + 1, 0, 1);

  while (current <= last && results.length < 100) {
    const dayName = current.toLocaleDateString("en-US", { weekday: "long" });

    if (
      (frequency === "Weekly" && weekDays.includes(dayName)) ||
      frequency === "Daily" ||
      frequency === "Monthly" ||
      frequency === "Yearly"
    ) {
      results.push(format(current, "yyyy-MM-dd"));
    }

    if (frequency === "Daily") current = addDays(current, interval);
    else if (frequency === "Weekly") current = addWeeks(current, interval);
    else if (frequency === "Monthly") current = addMonths(current, interval);
    else if (frequency === "Yearly") current = addYears(current, interval);
  }

  return results;
};
