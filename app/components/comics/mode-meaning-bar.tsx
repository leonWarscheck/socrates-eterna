import { useState, useRef, useEffect } from "react";
import RandomDilbertButton from "./random-comic-button";
import { Form, Link } from "@remix-run/react";




const placeholders = ["'cigar' finds a comic about cuba...", "'branding' finds a comic about Ghandis message...", "'health' finds a comic about physical training..."]





export default function ModeMeaningBar({ isSearching, query }) {
  const [placeholder, setPlaceholder] = useState("")
  const indexRef = useRef(0)

  const handleFocus = () => {
    indexRef.current = (indexRef.current + 1) % placeholders.length;
    setPlaceholder(placeholders[indexRef.current])
  };


  return (
    <Form className="max-w-4xl flex flex-col dmd:flex-row w-full px-4  mt-6 dmd:mt-8 mb-4">
      <Link
        to="/comics/meaning"
        className="text-3xl dmd:text-[2.9rem]/9 text-center dmd:mr-6 w-[386px] bg-red-5  text-primary1 font-bold mb-4 dmd:mb-0 -mt- 1.5 -ml-1 "
      >
        <div className=" aspect-[1404/245] h-9 mt-[1.5px]">
          <img src="/main/socrates-raw.png" alt="" className=" h-full w-full" />
        </div>
      </Link>
      <div className=" flex  grow ml-auto w-full ">
        <input
          className="border-y-2 border-l-2 border-primary1 rounded-l-lg bg-transparent focus:outline-none focus:bg-purple-1000 grow h-10 px-3 placeholder:text-purple-400 placeholder:text-"
          type="search"
          defaultValue={query}
          name="search"
          placeholder={placeholder}
          onBlur={() => setPlaceholder("")}
          onClick={handleFocus}
        />
        <button
          type="submit"
          className="bg-primary1 dmd:hidden rounded-r-lg hover:bg-purple-600 text-white pt-1.5 px-2 pb-1 "
        >
          <img src="/main/search.png" alt="" className="invert size-4" />
        </button>
      </div>

      <div className="dmd:flex mr-auto h-10 hidden shrink-0">
        <button
          type="submit"
          disabled={isSearching}
          className="bg-primary1  rounded-r-lg  hover:bg-purple-600 text-white  px-4  mr-"
        >
          Eterna Search
        </button>
      </div>
    </Form>
  );
}
