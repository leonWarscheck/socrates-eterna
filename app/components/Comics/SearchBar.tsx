import { Form, Link } from "@remix-run/react";
import ModeSelectorBar from "./ModeSelectorBar";
import ModeMeaningBar from "./ModeMeaningBar";
import ModeDateBar from "./ModeDateBar";
import ModeCharacterBar from "./ModeCharacterBar";

import { useState, useEffect } from "react";

export default function SearchBar({ query, mode, setMode, isSearching }) {
  const [isVisible, setIsVisible] = useState(true); // state to control visibility
  const [lastScrollPos, setLastScrollPos] = useState(0); // state to track last scroll position

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//  console.log(currentScrollPos)
//       // Detect scroll direction and hide/show after 100 pixels of scroll
//       if (currentScrollPos - lastScrollPos > 2) {
//         setIsVisible(false); // Scrolling down
//       } else if (lastScrollPos - currentScrollPos > 5) {
//         setIsVisible(true); // Scrolling up
//       }

//       // Update last scroll position
//       setLastScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollPos]);

  return (
    <div
      className={`fixe mt-16 w-full bg-purple-1000 min-h-30 transition-transform duration-500 ${
        isSearching && "animate-pulse"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="relative flex max-w-7xl w-full mx-auto min-h-30">
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          {mode === "meaning" && <ModeMeaningBar query={query} />}
          {mode === "date" && <ModeDateBar setMode={setMode} />}
          {mode === "character" && <ModeCharacterBar setMode={setMode} />}
          <ModeSelectorBar mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
}
