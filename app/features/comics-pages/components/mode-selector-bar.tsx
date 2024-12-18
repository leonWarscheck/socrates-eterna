import { Link } from "@remix-run/react";

import type { ModeProp } from "../types";

export default function ModeSelectorBar({ mode }: ModeProp) {
  return (
    <div className="mt- bg-teal- flex w-full max-w-4xl px-4 pb-2 text-base">
      <h3 className="ml-auto py-0 pr-4 md1:ml-0">Search by:</h3>
      <ul className="mr-auto flex gap-x-4">
        <li className="">
          <Link
            to={`/results/meaning`}
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
            to={`/results/date`}
            className={
              (mode === "date" && `text-purple-400 underline`) ||
              `hover:text-purple-400`
            }
          >
            Date
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={`/results/character`}
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
  );
}
