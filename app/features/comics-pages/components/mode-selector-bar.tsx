import { Link } from "@remix-run/react";
import type { ModeProp } from "../types";

export default function ModeSelectorBar({ mode }: ModeProp) {
  return (
    <div className="flex text-base mt- max-w-4xl  px-4 w-full pb-2 bg-teal- ">
      <h3 className="pr-4 py-0 ml-auto dmd:ml-0 ">Search by:</h3>
      <ul className=" flex gap-x-4 mr-auto ">
        <li className="">
          <Link
            to={`/results/meaning`}
            className={
              (mode === "meaning" && `text-purple-400 underline`) ||
              `hover:text-purple-400`
            }
          >
            {" "}
            Meaning<span className="text-x align-supe"></span>
          </Link>{" "}
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
