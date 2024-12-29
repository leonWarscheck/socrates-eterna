import { Form } from "@remix-run/react";
import { useRef, useState } from "react";

import type { IsSearchingProp as IsSearchingProperty } from "../types";
import RandomComicButton from "./random-comic-button";

const placeholders = [
  "Find a comic by related words not included in its text...",
  "'cigar' finds a comic about Cuba...",
  "'branding' finds a comic about Gandhi's message...",
  "'health' finds a comic about physical training...",
];

export default function ModeMeaning({ isSearching }: IsSearchingProperty) {
  const [placeholder, setPlaceholder] = useState("");
  const indexRef = useRef(0);

  // Sets different descriptive placeholders, which change in rotation on
  // clicking the input.
  const handleFocus = () => {
    indexRef.current = ++indexRef.current % placeholders.length;
    setPlaceholder(placeholders[indexRef.current]);
  };

  return (
    <Form className="mx-auto flex w-full max-w-xl flex-col">
      <div className="relative mx-auto w-full px-4">
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
          alt="search icon magnifying glass"
          className="pointer-events-none absolute right-8 top-1/2 z-20 w-4 -translate-y-1/2 transform invert"
        />
      </div>

      <div className="mx-auto mt-6 flex h-9 space-x-4">
        <button
          // This submission is a `GET` request per default. In Remix, `GET`
          // requests send form data as search params via the URL. The request
          // is recieved by the loader in comics.meaning.
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
