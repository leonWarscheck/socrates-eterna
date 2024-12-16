import { useState, useRef } from "react";
import RandomComicButton from "./random-comic-button";
import { Form } from "@remix-run/react";
import type { IsSearchingProp } from "../types";

const placeholders = [
  "Find a comic by related words not included in its text...",
  "'cigar' finds a comic about Cuba...",
  "'branding' finds a comic about Gandhi's message...",
  "'health' finds a comic about physical training...",
];

export default function ModeMeaning({ isSearching }: IsSearchingProp) {
  const [placeholder, setPlaceholder] = useState("");
  const indexRef = useRef(0);

  const handleFocus = () => {
    indexRef.current = ++indexRef.current % placeholders.length;
    setPlaceholder(placeholders[indexRef.current]);
  };

  return (
    <Form className="mx-auto flex w-full max-w-xl flex-col">
      <div className="relative mx-auto w-full">
        <input
          className="h-10 w-full grow rounded-lg border-2 border-primary1 bg-purple-1000 bg-transparent px-4 placeholder:text-purple-400 focus:outline-none"
          type="text"
          name="search"
          placeholder={placeholder}
          onBlur={() => setPlaceholder("")}
          onClick={handleFocus}
        />
        <img
          src="/main/search.png"
          alt="Search"
          className="pointer-events-none absolute right-4 top-1/2 z-20 w-4 -translate-y-1/2 transform invert"
        />
      </div>

      <div className="mx-auto mt-6 flex h-9 space-x-4">
        <button
          type="submit"
          disabled={isSearching}
          className={`rounded-md bg-primary1 px-4 py-2 text-sm hover:bg-purple-600`}
        >
          Eterna Search
        </button>
        <RandomComicButton />
      </div>
    </Form>
  );
}
