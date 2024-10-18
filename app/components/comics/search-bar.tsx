import { Form, Link } from "@remix-run/react";
import ModeSelectorBar from "./mode-selector-bar";
import ModeMeaningBar from "./mode-meaning-bar";
import ModeDateBar from "./mode-date-bar";
import ModeCharacterBar from "./mode-character-bar";

import { useState, useEffect } from "react";

export default function SearchBar({ mode, children, isSearching }) {
  return (
    <div className={`fixe mt-16 w-full bg-purple- 1000 min-h-30  ${isSearching && "animate-pulse"} `}>
      <div className="relative flex max-w-7xl w-full mx-auto min-h-30">
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          {children}
          <ModeSelectorBar mode={mode} />
        </div>
      </div>
    </div>
  );
}
