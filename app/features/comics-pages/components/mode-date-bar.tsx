import { Form, Link } from "@remix-run/react";
import { useEffect, useState } from "react";

import { ModeBarProps, QueryProp} from "../types";

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
    <div className="mb-4 mt-6 flex w-full max-w-4xl flex-col px-4 dmd:mt-8 dmd:flex-row">
      <Link
        to="/comics/meaning"
        className="-ml-1 w-[300px] text-center text-3xl font-bold text-primary1 dmd:mb-0 dmd:mr-4 dmd:text-[2.9rem]/9"
      >
        <div className="mt-[1.5px] aspect-[1404/245] h-9">
          <img src="/main/socrates-raw.png" alt="" className="h-full w-full" />
        </div>
      </Link>

      <Form
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
              alt=""
              className="size-3 invert tiny:size-4"
            />
          </button>
        </div>
      </Form>
    </div>
  );
}
