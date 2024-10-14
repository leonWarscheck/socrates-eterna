import React from "react";
import RandomDilbertButton from "./random-comic-button";
import { Form, } from "@remix-run/react";

export default function ModeMeaning({ isSearching }) {


  return (
    <Form className="max-w-xl flex flex-col mx-auto w-full ">
      <input type="hidden" name="mode" value="meaning" />
      <div className="relative w-full mx-auto"> {/* Parent div for relative positioning */}
        <input
          className="border-2 bg-purple- 1000 bg-transparent border-primary1 focus:outline-none grow h-10 px-4 rounded-lg w-full "
          type="search"
          name="search"
          placeholder=""
        />
        <img
          src="/main/search.png"
          alt="Search"
          className="absolute invert w-4 right-4 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none"
        />
      </div>

      <div className="flex h-9 mx-auto space-x-4  mt-6  ">
        <button
          disabled={isSearching}
          type="submit"
          className="bg-primary1   text-sm small:text-sm hover:bg-purple-600 px-4 py- 2 rounded-md"
        >
          Eterna Search
        </button>
        <RandomDilbertButton isSearching={isSearching} />
      </div>
    </Form>
  );
}
