import React from "react";

export default function ModeSelectorBar({ mode, setMode }) {
  return (
    <div className="flex text-base mt- max-w-4xl  px-4 w-full pb-2 bg-teal- ">
      <h3 className="pr-4 py-0 ml-auto dmd:ml-0 ">Search by:</h3>
      <ul className=" flex gap-x-4 mr-auto ">
        <li className="">
          <button
            onClick={() => setMode("meaning")}
            className={
            (mode === "meaning" && `text-purple-400 underline`) ||
              `hover:text-purple-400`
            }
          >
            Meaning
          </button>
        </li>
        <li>
          <button
            onClick={() => setMode("date")}
            className={
              (mode === "date" && `text-purple-400 underline`) ||
              `hover:text-purple-400`
            }
          >
            Date
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setMode("character");
              // alert(
              //   "The Sample Comics so far only contain: Dilbert, Boss, Wally, Asok, Carol and Ceo."
              // );
            }}
            className={
              (mode === "character" && `text-purple-400 underline`) ||
              `hover:text-purple-400`
            }
          >
            Character
          </button>
        </li>
      </ul>
    </div>
  );
}
