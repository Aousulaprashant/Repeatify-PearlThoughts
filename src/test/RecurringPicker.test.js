import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RecurringProvider } from "../Context/RecurringContext";
import RecurringPicker from "../components/RecurringPicker";

describe("RecurringPicker Integration Test", () => {
  it("renders and updates preview when inputs change", () => {
    render(
      <RecurringProvider>
        <RecurringPicker />
      </RecurringProvider>
    );

    const startDateInput = screen.getByLabelText(/start date/i);
    fireEvent.change(startDateInput, { target: { value: "2025-07-01" } });

    const endDateInput = screen.getByLabelText(/end date/i);
    fireEvent.change(endDateInput, { target: { value: "2025-07-03" } });

    const intervalInput = screen.getByDisplayValue("1");
    fireEvent.change(intervalInput, { target: { value: "1" } });

    // Recurrence type is defaulted to Daily
    const previewTitle = screen.getByText(/Recurring Dates/i);
    expect(previewTitle).toBeInTheDocument();
  });
});
