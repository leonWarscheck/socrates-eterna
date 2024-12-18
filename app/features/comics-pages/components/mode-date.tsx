import { Form } from "@remix-run/react";
import { useState } from "react";

import type { IsSearchingProp } from "../types";

export default function ModeDate({ isSearching }: IsSearchingProp) {
  const [radioButton, setRadioButton] = useState("month");
  return (
    <>
      {/* Small Screen Form */}
      <Form id="sm" className="mx-auto flex w-full max-w-xl flex-col">
        <div className="flex w-full items-center  px-4 text-base accent-black">
          <div className="ml-auto flex items-center">
            <select
              value={radioButton}
              onChange={(e) => setRadioButton(e.target.value)}
              className="h-10 w-full min-w-28 max-w-44 rounded-l-lg border-y-2 border-l-2 border-primary1 bg-transparent px-2 focus:outline-none"
            >
              <option value="month">by Month</option>
              <option value="day">by Day</option>
            </select>
          </div>
          <div className="mr-auto flex w-full items-center justify-center">
            {radioButton === "month" && (
              <input
                type="month"
                name="month"
                className="h-10 w-full rounded-r-lg border-r-2 border-y-2 border-primary1 bg-transparent px-2 py-1 focus:outline-none"
              />
            )}
            {radioButton === "day" && (
              <input
                type="date"
                name="day"
                className="h-10 w-full rounded-r-lg border-r-2 border-y-2 border-primary1 bg-transparent px-4 py-1 focus:outline-none"
              />
            )}
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

      <Form
        id="md"
        className="md2:fle x mx-auto hidden w-full max-w-xl flex-col px-4"
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
    </>
  );
}
