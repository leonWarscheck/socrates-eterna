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
        <div className="size-12 bg-transparent rounded-xl border-2 border-dilred ml-auto my-auto mr-4">
        </div>
<div className="absolute top-44 right-0 size-96 bg-purple- 950 border-2 border-dilred rounded-xl">pantheon ad

</div>
      </div>
    </div>
  );
}
