import { useState, useEffect } from "react";
import { Form, Link } from "@remix-run/react";
import { ModeBarProps, QueryProp } from "../types";


export default function ModeDateBar({ isSearching, query: latestQuery }: ModeBarProps) {
  const [radioButton, setRadioButton] = useState("month");
  const [query, setQuery] = useState(latestQuery);


  const fixMonthInputQuery = (query: QueryProp["query"]) => {
    const isMonthFormat = /^\d{4}-\d{2}$/.test(query);
    const isDayFormat = /^\d{4}-\d{2}-\d{2}$/.test(query);

    if (!isMonthFormat && !isDayFormat) {
      return "";
    } else if (isDayFormat) {
      return query.slice(0, 7);
    } else { return query; }
  };

  const fixDayInputQuery = (query: QueryProp["query"]) => {
    const isMonthFormat = /^\d{4}-\d{2}$/.test(query);
    const isDayFormat = /^\d{4}-\d{2}-\d{2}$/.test(query);

    if (!isMonthFormat && !isDayFormat) {
      return "";
    } else if (isMonthFormat) {
      return query + "-01";
    } else { return query; }
  };



  useEffect(() => {
    setQuery(latestQuery);
  }, []);

  return (
    <div className="max-w-4xl flex flex-col dmd:flex-row px-4 mt-6 dmd:mt-8 mb-4 w-full">
      <Link
        to="/comics/meaning"
        className="text-3xl dmd:text-[2.9rem]/9 text-center dmd:mr-4 w-[300px] text-primary1 font-bold dmd:mb-0 -ml-1"
      >
        <div className="aspect-[1404/245] h-9 mt-[1.5px]">
          <img src="/main/socrates-raw.png" alt="" className="h-full w-full" />
        </div>
      </Link>

      <Form id="full-md" className="max-w-x full-md:flex flex-col hidden w-full text-base">
        <div className="flex items-center gap-x-4 accent-black w-full grow my-[2px] dmd:my-0 ">
          <div className="flex items-center ml-auto">
            <label className="inline-flex items-center shrink-0">
              <input
                type="radio"
                name="dateType"
                value="month"
                className="form-radio"
                checked={radioButton === "month"}
                onChange={() => setRadioButton("month")}
              />
              <span className="ml-2 shrink-0">by Month</span>
            </label>

            <input
              type="month"
              className="ml-2 border-2 border-primary1 rounded-lg bg-transparent px-2 py-1 h-10 focus:bg-purple-1000 focus:outline-none"
              name="month"
              value={fixMonthInputQuery(query)}
              onChange={(e) => setQuery(e.target.value)}
              disabled={radioButton !== "month"}
            />
          </div>

          <div className="flex items-center ml-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="dateType"
                value="day"
                className="form-radio"
                checked={radioButton === "day"}
                onChange={() => setRadioButton("day")}
              />
              <span className="ml-2 shrink-0">by Day</span>
            </label>

            <input
              type="date"
              className="ml-2 border-2 border-primary1 bg-transparent focus:outline-none rounded-lg px-2 py-1 h-10 focus:bg-purple-1000"
              name="day"
              value={fixDayInputQuery(query)}
              onChange={(e) => setQuery(e.target.value)}
              disabled={radioButton !== "day"}
            />
          </div>

          <button
            type="submit"
            className="bg-primary1 hover:bg-purple-600 rounded-lg h-10 px-4 ml-4"
            disabled={isSearching}
          >
            <img src="/main/search.png" alt="" className="invert size-3 tiny:size-4" />
          </button>
        </div>
      </Form>
    </div>
  );
}
