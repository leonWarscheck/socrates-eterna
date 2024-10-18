import { useState } from "react";
import { Form, Link } from "@remix-run/react";

export default function ModeDate({isSearching}) {
  const [radioButton, setRadioButton] = useState("month");
  return (
    <Form id="md" className="max-w-xl dmd:flex flex-col mx-auto px-4 w-full hidden bg-purple-">
      <div className="flex items-center mx-auto justify-between accent-black w-full my-[2px bg-amber-">
        <div className="flex items-center mr-auto bg-pink-">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="dateType"
              value="month"
              className="form-radio"
              checked={radioButton === "month"}
              onChange={()=> setRadioButton("month")}
            />
            <span className="ml-2">by Month</span>
          </label>
          <input
            type="month"
            className="ml-2 border-2 border-primary1 px-2 py-1 h-10 bg-transparent focus:outline-none focus:bg-purple-950 rounded-lg"
            name="month"
            disabled={radioButton !== "month"}
          />
        </div>

        <div className="flex items-center ml-auto bg-teal-">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="dateType"
              value="day"
              className="form-radio"
              checked={radioButton === "day"}
              onChange={()=> setRadioButton("day")}
            />
            <span className="ml-2">by Day</span>
          </label>
          <input
            type="date"
            className="ml-2 border-2 bg-transparent border-primary1 px-2 py-1 h-10 focus:outline-none focus:bg-purple-950 rounded-lg"
            name="day"
            disabled={radioButton !== "day"}
          />
        </div>
      </div>

      <div className="flex gap-4 mx-auto mt-6">
        <button
        type="submit"
          className="bg-primary1 text-sm small:text-sm hover:bg-purple-600 h-9 px-4 rounded "
          disabled={isSearching}
        >
          Eterna Date Search
        </button>
      </div>
    </Form>
  );
}
