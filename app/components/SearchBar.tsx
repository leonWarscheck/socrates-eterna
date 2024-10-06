import { Form, Link } from "@remix-run/react";
import { useState } from "react";
import ModeSelectorBar from "./ModeSelectorBar";
import ModeMeaningBar from "./ModeMeaningBar";
import ModeDateBar from "./ModeDateBar";
import ModeCharacterBar from "./ModeCharacterBar";

export default function SearchBar({ query, mode, setMode , isSearching}) {
  return (
    <div className={`fixed w-full bg-purple-950 z-30 min-h-30 pointer-events- auto ${isSearching&& "animate-pulse"}`}>
      {/* <div className="max-w-4xl mx-auto px-4 mt-8"> */}

      {mode === "meaning" && <ModeMeaningBar query={query} />}
      {mode === "date" && <ModeDateBar setMode={setMode} />}
      {mode === "character" && <ModeCharacterBar setMode={setMode} />}

      <ModeSelectorBar mode={mode} setMode={setMode} />
    </div>
  );
}
