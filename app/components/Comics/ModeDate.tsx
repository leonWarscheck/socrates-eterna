import { useState } from "react";
import { Form, Link } from "@remix-run/react";

export default function ModeDate({isSearching}) {
  const [selectedOption, setSelectedOption] = useState("month");
  const [dateQuery, setDateQuery] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [dayValue, setDayValue] = useState("");

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);

    // Update dateQuery based on current selected input's value
    if (option === "month" && monthValue) {
      // If "month" is selected, use the value of the month input
      const [year, month] = monthValue.split("-");
      setDateQuery(`${year}-${month}-15`);
    } else if (option === "day" && dayValue) {
      // If "day" is selected, use the value of the day input
      setDateQuery(dayValue);
    } else {
      setDateQuery(""); // Reset if no value is available
    }
  };

  const handleMonthChange = (event) => {
    const value = event.target.value;
    setMonthValue(value);
    if (selectedOption === "month") {
      const [year, month] = value.split("-");
      setDateQuery(`${year}-${month}-15`);
    }
  };

  const handleDayChange = (event) => {
    const value = event.target.value;
    setDayValue(value);
    if (selectedOption === "day") {
      setDateQuery(value);
    }
  };

  return (
    <Form id="md" className="max-w-xl dmd:flex flex-col mx-auto px-4 w-full hidden bg-purple-">
      <input type="hidden" name="mode" value="date" />
      <div className="flex items-center mx-auto justify-between accent-black w-full my-[2px bg-amber-">
        <div className="flex items-center mr-auto bg-pink-">
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
            value={monthValue}
            onChange={handleMonthChange}
            disabled={selectedOption !== "month"}
          />
        </div>

        <div className="flex items-center ml-auto bg-teal-">
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
            value={dayValue}
            onChange={handleDayChange}
            disabled={selectedOption !== "day"}
          />
        </div>
      </div>

      <div className="flex gap-4 mx-auto mt-6">
        <Link
          to={`/results?mode=date&search=${dateQuery}`}
          onClick={(e)=> isSearching && e.preventDefault()}
          className="bg-primary1 text-sm small:text-sm hover:bg-purple-600 h-9 px-4 rounded pt-2"
        >
          Eterna Date Search
        </Link>
      </div>
    </Form>
  );
}
