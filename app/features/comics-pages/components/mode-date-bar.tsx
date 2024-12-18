import { Form, Link } from "@remix-run/react";
import { useEffect, useState } from "react";

import { ModeBarProps, QueryProp } from "../types";

export default function ModeDateBar({
  isSearching,
  query: latestQuery,
}: ModeBarProps) {
  const [radioButton, setRadioButton] = useState("month");
  const [query, setQuery] = useState(latestQuery);

  const fixMonthInputQuery = (query: QueryProp["query"]) => {
    const isMonthFormat = /^\d{4}-\d{2}$/.test(query);
    const isDayFormat = /^\d{4}-\d{2}-\d{2}$/.test(query);

    if (!isMonthFormat && !isDayFormat) {
      return "";
    } else if (isDayFormat) {
      return query.slice(0, 7);
    } else {
      return query;
    }
  };

  const fixDayInputQuery = (query: QueryProp["query"]) => {
    const isMonthFormat = /^\d{4}-\d{2}$/.test(query);
    const isDayFormat = /^\d{4}-\d{2}-\d{2}$/.test(query);

    if (!isMonthFormat && !isDayFormat) {
      return "";
    } else if (isMonthFormat) {
      return query + "-01";
    } else {
      return query;
    }
  };

  useEffect(() => {
    setQuery(latestQuery);
  }, []);

  return (
    <div className="mb-4 mt-6 flex w-full max-w-4xl flex-col px-4 dmd:mt-8 dmd:flex-row ">
      <Link
        to="/comics/meaning" 
        className="dmd:-ml-1 text-center text-3xl font-bold text-primary1 mb-4  dmd:mb-0 dmd:mr-6 dmd:text-[2.9rem]/9 "
      >
        <div className="mt-[1.5px] aspect-[1404/245] h-9 mx-auto dmd:mx-0">
          <img
            src="/main/socrates-raw.png"
            alt="socrates as text logo"
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <Form id="sm" className="mx-auto flex w-full grow max-w-2xl ">
        <div className="flex w-full items-center gap- text-sm dmd:text-base accent-black">
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
                className="h-10 w-full  border-y-2 border-primary1 bg-transparent px-2 pl-4 tiny:px-4 py-1 focus:outline-none"
              />
            )}
            {radioButton === "day" && (
              <input
                type="date"
                name="day"
                className="h-10 w-full border-y-2 border-primary1 bg-transparent px-2 pl-4 tiny:px-4 py-1 focus:outline-none"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className=" h-10 rounded-r-lg bg-primary1 px-2 tiny:px-4 hover:bg-purple-600"
          disabled={isSearching}
        >
          <img
            src="/main/search.png"
            alt="search icon magnifying glass"
            className="size-3 invert tiny:size-4"
          />
        </button>

      </Form>

      {/* <Form
        id="full-md"
        className="max-w-x hidden w-full flex-col text-base full-md:flex"
      >
        <div className="my-[2px] flex w-full grow items-center gap-x-4 accent-black dmd:my-0">
          <div className="ml-auto flex items-center">
            <label className="inline-flex shrink-0 items-center">
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
              className="ml-2 h-10 rounded-lg border-2 border-primary1 bg-transparent px-2 py-1 focus:bg-purple-1000 focus:outline-none"
              name="month"
              value={fixMonthInputQuery(query)}
              onChange={(e) => setQuery(e.target.value)}
              disabled={radioButton !== "month"}
            />
          </div>

          <div className="ml-4 flex items-center">
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
              className="ml-2 h-10 rounded-lg border-2 border-primary1 bg-transparent px-2 py-1 focus:bg-purple-1000 focus:outline-none"
              name="day"
              value={fixDayInputQuery(query)}
              onChange={(e) => setQuery(e.target.value)}
              disabled={radioButton !== "day"}
            />
          </div>

          <button
            type="submit"
            className="ml-4 h-10 rounded-lg bg-primary1 px-4 hover:bg-purple-600"
            disabled={isSearching}
          >
            <img
              src="/main/search.png"
              alt="search icon magnifying glass"
              className="size-3 invert tiny:size-4"
            />
          </button>
        </div>
      </Form> */}
    </div>
  );
}
