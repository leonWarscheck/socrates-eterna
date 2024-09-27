import { Form } from "@remix-run/react";
import { useState } from "react";
import ModeCharacter from "./ModeCharacter";
import ModeDate from "./ModeDate";
import ModeMeaning from "./ModeMeaning";
import ModeSelector from "./ModeSelector";

export default function SearchForms({ query, mode, setMode, isSearching }) {
  console.log("mode:", mode);

  return (
    <div className={`flex flex-col landscape-narrow:pt-[5dvh]  my-auto ${isSearching && "animate-pulse"} `}>
      <h2 className="text-7xl dmd:text-8xl text-center text-purple-300 font-bold font-socrates mt- mb-4 tracking- wider"><img></img></h2>
      {mode === "meaning" && <ModeMeaning query={query} isSearching={isSearching}/>}
      {mode === "date" && <ModeDate  />}
      {mode === "character" && <ModeCharacter isSearching={isSearching} />}
      <ModeSelector mode={mode} setMode={setMode} />
    </div>
  );
}
