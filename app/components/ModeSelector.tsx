import React from "react";

export default function ModeSelector({ mode, setMode }) {
  return (
    <div className="flex dmd:mt-8 mt-6 landscape-narrow:mb- px-4 text-sm text-purple-200 font-ligh ">
      <div className="mx-auto  flex ">
        <h3 className="pr-4 dmd:py-0 mx-auto pb-2 ">Search by:</h3>
        <ul className=" flex space-x-4 ">
          <li className="">
            {" "}
            <button
              onClick={() => setMode("meaning")}
              className={
                (mode === "meaning" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              {" "}
              Meaning<span className="text-x align-supe"></span>
            </button>{" "}
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
            {" "}
            <button
              onClick={() => {
                setMode("character");
                // alert('The Sample Comics so far only contain: Dilbert, Boss, Wally, Asok, Carol and Ceo.');
              }}
              className={
                (mode === "character" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              Character
            </button>
          </li>
          {/* <li>
            {" "}
            <button
            className=" text-xs border rounded-full px-1.5"
              onClick={() => {
                setMode("character");
                // alert('The Sample Comics so far only contain: Dilbert, Boss, Wally, Asok, Carol and Ceo.');
              }}
              className={
                (mode === "character" && `text-dilred underline`) ||
                `hover:text-dilred`
              }
            >
            <img className="size-2.5 -mb-[0.75px] opacity-70" src="/main/question.png" alt="" />
            
            </button>
          </li> */}
          {/* <li>
          <button
            onClick={() => setMode("keyword")}
            className={
              (mode === "keyword" && `text-dilred underline`) ||
              `hover:text-dilred`
            }
          >
            Keyword
          </button>
        </li> */}
        </ul>
      </div>
    </div>
  );
}
