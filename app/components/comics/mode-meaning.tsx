import { useState, useRef } from "react";
import RandomComicButton from "./random-comic-button";
import { Form, Link, useNavigate } from "@remix-run/react";

const placeholders = [
  "Find a comic by related words not included in its text...",
  "'cigar' finds a comic about Cuba...",
  "'branding' finds a comic about Gandhi's message...",
  "'health' finds a comic about physical training...",
];

export default function ModeMeaning({ isSearching }) {
  const [placeholder, setPlaceholder] = useState("");
  // const [searchQuery, setSearchQuery] = useState(""); // State to track input value
  const indexRef = useRef(3);
  // const navigate = useNavigate(); // Hook to programmatically navigate

  const handleFocus = () => {
    indexRef.current = (++indexRef.current) % placeholders.length;
    setPlaceholder(placeholders[indexRef.current]);
  };

  // const handleInputChange = (e) => {
  //   setSearchQuery(e.target.value); // Update searchQuery with input value
  // };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault(); // Prevent form submission
  //     if (searchQuery.trim()) {
  //       // If there is a valid query, navigate to the desired route
  //       navigate(`/results/meaning?search${encodeURIComponent(searchQuery)}`);
  //     }
  //   }
  // };

  return (
    <Form className="max-w-xl flex flex-col mx-auto w-full ">
      <input type="hidden" name="mode" value="meaning" />
      <div className="relative w-full mx-auto"> {/* Parent div for relative positioning */}
        <input
          className="border-2 bg-purple-1000 bg-transparent border-primary1 focus:outline-none grow h-10 px-4 rounded-lg w-full placeholder:text-purple-400"
          type="text"
          name="search"
          // value={searchQuery} // Bind input value to searchQuery state
          placeholder={placeholder}
          // onChange={handleInputChange} // Capture the input change
          // onKeyDown={handleKeyDown} // Handle Enter key press
          onBlur={() => setPlaceholder("")}
          onFocus={handleFocus}
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
