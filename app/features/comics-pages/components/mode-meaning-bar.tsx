import { Form, Link } from "@remix-run/react";
import { useRef, useState } from "react";

import type { ModeBarProps } from "../types";

const placeholders = [
  "Find a comic by related words not included in its text...",
  "'cigar' finds a comic about cuba...",
  "'branding' finds a comic about Ghandis message...",
  "'health' finds a comic about physical training...",
];

export default function ModeMeaningBar({ isSearching, query }: ModeBarProps) {
  const [placeholder, setPlaceholder] = useState("");
  const indexRef = useRef(1);

  // Sets different descriptive placeholders, which change in rotation on
  // clicking the input.
  const handleFocus = () => {
    indexRef.current = (indexRef.current + 1) % placeholders.length;
    setPlaceholder(placeholders[indexRef.current]);
  };

  return (
    <Form className="mb-4 mt-6 flex w-full max-w-4xl flex-col px-4 md1:mt-8 md1:flex-row">
      <Link
        to="/comics/meaning"
        className="mb-4 text-center text-3xl font-bold text-primary1 md1:-ml-1 md1:mb-0 md1:mr-6 md1:text-[2.9rem]/9"
      >
        <div className="mx-auto mt-[1.5px] aspect-[1404/245] h-9 md1:mx-0">
          <img
            src="/main/socrates-raw.png"
            alt="socrates as text logo"
            className="h-full w-full"
          />
        </div>
      </Link>
      <div className="ml-auto flex w-full grow">
        <input
          className="h-10 grow rounded-l-lg border-y-2 border-l-2 border-primary1 bg-transparent px-3 placeholder:text-purple-400 focus:bg-purple-1000 focus:outline-none"
          type="search"
          defaultValue={query}
          name="search"
          placeholder={placeholder}
          onBlur={() => setPlaceholder("")}
          onClick={handleFocus}
        />
        <button
          type="submit"
          className="rounded-r-lg bg-primary1 px-2 pb-1 pt-1.5 text-white hover:bg-purple-600 md1:hidden"
        >
          <img
            src="/main/search.png"
            alt="search icon magnifying glass"
            className="size-4 invert"
          />
        </button>
      </div>

      <div className="mr-auto hidden h-10 shrink-0 md1:flex">
        <button
          // This submission is a `GET` request per default. In Remix, `GET`
          // requests send form data as search params via the URL. The request
          // is recieved by the loader in results.meaning.
          type="submit"
          disabled={isSearching}
          className="rounded-r-lg bg-primary1 px-4 text-white hover:bg-purple-600"
        >
          Eterna Search
        </button>
      </div>
    </Form>
  );
}
