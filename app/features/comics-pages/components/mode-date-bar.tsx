import { Form, Link } from "@remix-run/react";
import { useEffect, useState } from "react";

import { ModeBarProps, QueryProp } from "../types";

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

export default function ModeDateBar({
  isSearching,
  query: syncedQuery,
}: ModeBarProps) {
  const [selectValue, setSelectValue] = useState("month");
  const [query, setQuery] = useState(syncedQuery);

  useEffect(() => {
    setQuery(syncedQuery);
  }, []);

  return (
    <div className="mb-4 mt-6 flex w-full max-w-4xl flex-col px-4 md1:mt-8 md1:flex-row">
      <Link
        to="/comics/meaning"
        className="mb-4 text-center text-3xl font-bold text-primary1 md1:-ml-1 md1:mb-0 md1:mr-6 md1:text-[2.9rem]/9"
      >
        <div className="mx-auto mt-[1.5px] aspect-[1404/245] h-9 md1:mx-0">
          <img
            src="/main/socrates-raw.png"
            alt="socrates as text logo"
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <Form id="sm" className="mx-auto flex w-full max-w-2xl grow">
        <div className="flex w-full items-center text-sm accent-black md1:text-base">
          <div className="ml-auto flex items-center">
            <select
              name="dateType"
              value={selectValue}
              onChange={(event) => setSelectValue(event.target.value)}
              className="h-10 w-full min-w-28 max-w-44 rounded-l-lg border-y-2 border-l-2 border-primary1 bg-transparent px-2 focus:outline-none"
            >
              <option value="month">by Month</option>
              <option value="day">by Day</option>
            </select>
          </div>
          <div className="mr-auto flex w-full items-center justify-center">
            {selectValue === "month" && (
              <input
                type="month"
                name="month"
                defaultValue={fixMonthInputQuery(query)}
                className="h-10 w-full border-y-2 border-primary1 bg-transparent px-2 py-1 pl-4 focus:outline-none xs1:px-4"
              />
            )}
            {selectValue === "day" && (
              <input
                type="date"
                name="day"
                defaultValue={fixDayInputQuery(query)}
                className="h-10 w-full border-y-2 border-primary1 bg-transparent px-2 py-1 pl-4 focus:outline-none xs1:px-4"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="h-10 rounded-r-lg bg-primary1 px-2 hover:bg-purple-600 xs1:px-4"
          disabled={isSearching}
        >
          <img
            src="/main/search.png"
            alt="search icon magnifying glass"
            className="size-3 invert xs1:size-4"
          />
        </button>
      </Form>
    </div>
  );
}
