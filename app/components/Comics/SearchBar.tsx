import { Form, Link } from "@remix-run/react";
import ModeSelectorBar from "./ModeSelectorBar";
import ModeMeaningBar from "./ModeMeaningBar";
import ModeDateBar from "./ModeDateBar";
import ModeCharacterBar from "./ModeCharacterBar";

import { useState, useEffect } from "react";

export default function SearchBar({ mode, query, isSearching }) {
  return (
    <div
      className={`fixe mt-16 w-full bg-purple- 1000 min-h-30 transition-transform duration-500 ${isSearching && "animate-pulse"
        } `}
    >
      <div className="relative flex max-w-7xl w-full mx-auto min-h-30">
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          {mode === "meaning" && <ModeMeaningBar {...{ query, isSearching }} />}
          {mode === "date" && <ModeDateBar isSearching={isSearching} />}
          {mode === "character" && <ModeCharacterBar isSearching={isSearching} />}
          <ModeSelectorBar mode={mode} />
        </div>
      </div>
    </div>
  );
}
