import { useState, useRef } from "react";
import RandomComicButton from "./random-comic-button";
import { Form, Link, useNavigate } from "@remix-run/react";
import type { Props } from "./types";

const placeholders = [
  "Find a comic by related words not included in its text...",
  "'cigar' finds a comic about Cuba...",
  "'branding' finds a comic about Gandhi's message...",
  "'health' finds a comic about physical training...",
];


export default function ModeMeaning({ isSearching }: Props) {
  const [placeholder, setPlaceholder] = useState("");
  const indexRef = useRef(0);

  const handleFocus = () => {
    indexRef.current = (++indexRef.current) % placeholders.length;
    setPlaceholder(placeholders[indexRef.current]);
  };



  return (
    <Form className="max-w-xl flex flex-col mx-auto w-full ">
      <input type="hidden" name="mode" value="meaning" />
      <div className="relative w-full mx-auto"> 
        <input
          className="border-2 bg-purple-1000 bg-transparent border-primary1 focus:outline-none grow h-10 px-4 rounded-lg w-full placeholder:text-purple-400"
          type="text"
          name="search"
          placeholder={placeholder}
          onBlur={() => setPlaceholder("")}
          onClick={handleFocus}
        />
        <img 
          src="/main/search.png"
          alt="Search"
          className="absolute invert w-4 right-4 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none"
        />
      </div>

      <div className="flex h-9 mx-auto space-x-4 mt-6">
        <button
        type="submit"
          disabled={isSearching}
          className={`bg-primary1 text-sm hover:bg-purple-600 px-4 py-2 rounded-md`}
        >
          Eterna Search
        </button>
        <RandomComicButton isSearching={isSearching} />
      </div>
    </Form>
  );
}
