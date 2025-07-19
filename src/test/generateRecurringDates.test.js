import { generateRecurringDates } from "../utils/generateRecurringDates";

describe("generateRecurringDates", () => {
  it("should generate daily recurring dates", () => {
    const dates = generateRecurringDates({
      frequency: "Daily",
      interval: 1,
      startDate: "2025-07-01",
      endDate: "2025-07-03",
      weekDays: [],
      customPattern: {},
    });

    expect(dates).toEqual(["2025-07-01", "2025-07-02", "2025-07-03"]);
  });

  it("should return empty if startDate is after endDate", () => {
    const dates = generateRecurringDates({
      frequency: "Daily",
      interval: 1,
      startDate: "2025-07-10",
      endDate: "2025-07-03",
      weekDays: [],
      customPattern: {},
    });

    expect(dates).toEqual([]);
  });
});
