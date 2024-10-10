import { Form, Link } from "@remix-run/react";
import { useState } from "react";
import ModeSelectorBar from "./ModeSelectorBar";
import ModeMeaningBar from "./ModeMeaningBar";
import ModeDateBar from "./ModeDateBar";
import ModeCharacterBar from "./ModeCharacterBar";

export default function SearchBar({ query, mode, setMode, isSearching }) {
  return (
    <div className={`fixed   w-full bg-purple-950 z-30 min-h-30 pointer-events- auto ${isSearching && "animate-pulse"}`}>
      {/* <div className="max-w-4xl mx-auto px-4 mt-8"> */}
      <div className=" relative flex  max-w-7xl w-full mx-auto min-h-30 bg-red -500">
        <div className="flex flex-col bg-teal- 500 w-full max-w-4xl">
          {mode === "meaning" && <ModeMeaningBar query={query} />}
          {mode === "date" && <ModeDateBar setMode={setMode} />}
          {mode === "character" && <ModeCharacterBar setMode={setMode} />}

          <ModeSelectorBar mode={mode} setMode={setMode} />
        </div>
        <div className="size-10 bg-transparent rounded-lg border-2 border-dilred ml-auto mt-8 mr- 4">
          <img className="size-4 mt-2.5 mx-auto" src="/main/share.svg" alt="" />


        </div>
        <div className="absolute flex flex-col top-44 right-0 size-96 bg-purple- 950 border-2 border-dilred rounded-xl">
        <div className="mx-auto mt-8 "> 
        <img
              className=" h-32  object-cover"
              src="/books/calendar03.png"
              alt=""
            />

        </div>
        <div className="flex flex-col mr-4 pr-6 ml-6 text-center">
                <h2 className="font-bold py-3 text-xl">
                  2025 Page-A-Day Calendar
                </h2>

              <p className="overflow-hidden text-base  text- justify hyphens-auto mb-3">
                <span className="font-bold">Available Now! </span>

                Back by popular demand, now featuring both <span className="font-semibol italic">Socrates Eterna and </span> <span className="font-semibol italic">Socrates Pantheon!</span>  2 comics each day, printed in Athens!
                <br />
              </p>
              <Link
                to="https://www.amazon.com"
                className="font-normal text-sm  hover:underline bg-purple-950  h-8 px-4 pt-1  mx-auto 4 border-2 border- rounded-lg "
                target="_blank"
                rel="noopener norefferrer"
              >
                click to shop
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
