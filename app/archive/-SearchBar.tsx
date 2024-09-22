import { Form, Link } from "@remix-run/react";
import { useState } from "react";
import SearchModeSelector from "./ModeSelector";
import ModeMeaningBar from "./ModeMeaningBar";

export default function SearchBar({ query, mode, setMode }) {
  return (
    <div className="border-b-dilre border-b- fixed w-full bg-neutral-100 z-10">
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <Link
          to="/classic-search"
          className="text-4xl text-center text-dilred font-bold mr-"
        >
          Dilbert
        </Link>
        {mode === "meaning" && <ModeMeaningBar query={query} />}
        {/* <Form className="   flex   ">
          

          <div className=" flex  grow pl-10">
            <input
              className="border-y-2 border-l-2 focus:outline-none  grow h-10 px-4"
              type="search"
              defaultValue={query}
              name="search"
              placeholder=""
            />
          </div>

          <div className="flex gro ml-auto">
            <button
              type="submit"
              className="bg-dilred   text-xs small:text-sm hover:bg-red-600 text-white pt-3 px-2 pb-1 "
            >
              Classic Search
            </button>
          </div>
        </Form> */}

        <div className="flex mt-6 text-sm text-neutral-500 w-fullfont-ligh pb-4 ">
          <div className="mx-aut  w-full flex flex-col small:flex-row">
            <SearchModeSelector mode={mode} setMode={setMode} />
            {/* <Link to="/" className=" ml-auto">
              Home
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
