import { useState } from "react";
import { Form } from "@remix-run/react";
import React from 'react';

const ModeDate = () => {
  const [selectedOption, setSelectedOption] = React.useState("month");
  const [monthDate, setMonthDate] = React.useState("");
  const [dayDate, setDayDate] = React.useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonthDate(event.target.value);
  };

  const handleDayChange = (event) => {
    setDayDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    let dateString;

    if (selectedOption === "month") {
      // Transform monthDate to a dayDate string, setting it to the 15th of the month
      const [year, month] = monthDate.split('-'); // Extract year and month
      dateString = `${year}-${month}-15`; // Create a string for the 15th
    } else if (selectedOption === "day") {
      dateString = dayDate; // Day date selected
    }

    // Redirect with query string
    window.location.href = `?date=${dateString}`;
  };

  return (
    <Form id="md" className="max-w-xl dmd:flex flex-col mx-auto px-4 w-full hidden bg-purple-" onSubmit={handleSubmit}>
      <div className="flex items-center mx-auto justify-between accent-black w-full my-[2px bg-amber-">
        <div className="flex items-center mr- auto bg-pink-">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="dateType"
              value="month"
              className="form-radio"
              checked={selectedOption === "month"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">by Month</span>
          </label>
          <input
            type="month"
            className="ml-2 border-2 border-primary1 px-2 py-1 h-10 bg-transparent focus:outline-none focus:bg-purple-950 rounded-lg"
            value={monthDate}
            onChange={handleMonthChange}
            disabled={selectedOption !== "month"}
          />
        </div>

        <div className="flex items-center ml- auto bg-teal-">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="dateType"
              value="day"
              className="form-radio"
              checked={selectedOption === "day"}
              onChange={handleOptionChange}
            />
            <span className="ml-2">by Day</span>
          </label>
          <input
            type="date"
            className="ml-2 border-2 bg-transparent border-primary1 px-2 py-1 h-10 focus:outline-none focus:bg-purple-950 rounded-lg"
            value={dayDate}
            onChange={handleDayChange}
            disabled={selectedOption !== "day"}
          />
        </div>
      </div>

      <div className="flex gap-4 mx-auto mt-6">
        <button
          type="submit"
          className="bg-primary1 text-sm small:text-sm hover:bg-purple-600 h-9 px-4 rounded"
        >
          Eterna Date Search
        </button>
      </div>
    </Form>
  );
};

export default ModeDate;
