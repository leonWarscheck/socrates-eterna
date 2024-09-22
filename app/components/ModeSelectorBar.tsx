import React from "react";

export default function ModeSelectorBar({ mode, setMode }) {
  return (
    <div className="flex text-base text-neutral-500 mt- max-w-4xl mx-auto px-4 w-full pb-2 bg-teal- ">
      <h3 className="pr-4 py-0 ml-auto dmd:ml-0 ">Search by:</h3>
      <ul className=" flex gap-x-4 mr-auto ">
        <li className="">
          <button
            onClick={() => setMode("meaning")}
            className={
              (mode === "meaning" && `text-dilred underline`) ||
              `hover:text-dilred`
            }
          >
            Meaning
          </button>
        </li>
        <li>
          <button
            onClick={() => setMode("date")}
            className={
              (mode === "date" && `text-dilred underline`) ||
              `hover:text-dilred`
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
              (mode === "character" && `text-dilred underline`) ||
              `hover:text-dilred`
            }
          >
            Character
          </button>
        </li>
      </ul>
    </div>
  );
}
