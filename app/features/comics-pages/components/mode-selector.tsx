import { Link } from "@remix-run/react";

import type { ModeProp } from "../types";

export default function ModeSelector({ mode }: ModeProp) {
  return (
    <div className="landscape-narrow:mb- font-ligh mt-6 flex px-4 text-sm text-purple-200">
      <div className="mx-auto flex">
        <h3 className="mx-auto pb-2 pr-4 dmd:py-0">Search by:</h3>
        <ul className="flex space-x-4">
          <li className="">
            {" "}
            <Link
              prefetch="render"
              to={`/comics/meaning`}
              className={
                (mode === "meaning" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              Meaning
            </Link>
          </li>
          <li>
            <Link
              prefetch="render"
              to="/comics/date"
              className={
                (mode === "date" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              Date
            </Link>
          </li>
          <li>
            <Link
              prefetch="render"
              to={`/comics/character`}
              className={
                (mode === "character" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              Character
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
