import { Form } from "@remix-run/react";
import { useState } from "react";

import type { IsSearchingProp } from "../types";

export default function ModeDate({ isSearching }: IsSearchingProp) {
  const [selectValue, setSelectValue] = useState("month");
  return (
    <Form id="sm" className="mx-auto flex w-full max-w-xl flex-col">
      <div className="flex w-full items-center px-4 text-base accent-black">
        <div className="ml-auto flex items-center">
          <select
            value={selectValue}
            name="dateType"
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
              className="h-10 w-full rounded-r-lg border-y-2 border-r-2 border-primary1 bg-transparent px-2 py-1 focus:outline-none"
            />
          )}
          {selectValue === "day" && (
            <input
              type="date"
              name="day"
              className="h-10 w-full rounded-r-lg border-y-2 border-r-2 border-primary1 bg-transparent px-4 py-1 focus:outline-none"
            />
          )}
        </div>
      </div>

      <div className="mx-auto mt-6 flex gap-4">
        <button
          // This submission is a `GET` request per default. In Remix, `GET`
          // requests send form data as search params via the URL. The request
          // is recieved by the loader in comics.date.
          type="submit"
          className="h-9 rounded-md bg-primary1 px-4 text-sm hover:bg-purple-600 sm1:text-sm"
          disabled={isSearching}
        >
          Eterna Date Search
        </button>
      </div>
    </Form>
  );
}
