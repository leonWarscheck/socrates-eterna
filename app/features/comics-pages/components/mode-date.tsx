import { Form, Link } from "@remix-run/react";
import { useState } from "react";

import type { IsSearchingProp} from "../types";

export default function ModeDate({ isSearching }: IsSearchingProp) {
  const [radioButton, setRadioButton] = useState("month");
  return (
    <Form
      id="md"
      className="mx-auto hidden w-full max-w-xl flex-col px-4 dmd:flex"
    >
      <div className="mx-auto flex w-full items-center justify-between accent-black">
        <div className="mr-auto flex items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="dateType"
              value="month"
              className="form-radio"
              checked={radioButton === "month"}
              onChange={() => setRadioButton("month")}
            />
            <span className="ml-2">by Month</span>
          </label>
          <input
            type="month"
            className="ml-2 h-10 rounded-lg border-2 border-primary1 bg-transparent px-2 py-1 focus:bg-purple-950 focus:outline-none"
            name="month"
            disabled={radioButton !== "month"}
          />
        </div>

        <div className="ml-auto flex items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="dateType"
              value="day"
              className="form-radio"
              checked={radioButton === "day"}
              onChange={() => setRadioButton("day")}
            />
            <span className="ml-2">by Day</span>
          </label>
          <input
            type="date"
            className="ml-2 h-10 rounded-lg border-2 border-primary1 bg-transparent px-2 py-1 focus:bg-purple-950 focus:outline-none"
            name="day"
            disabled={radioButton !== "day"}
          />
        </div>
      </div>

      <div className="mx-auto mt-6 flex gap-4">
        <button
          type="submit"
          className="h-9 rounded-md bg-primary1 px-4 text-sm hover:bg-purple-600 small:text-sm"
          disabled={isSearching}
        >
          Eterna Date Search
        </button>
      </div>
    </Form>
  );
}
