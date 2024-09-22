import React from "react";
import RandomDilbertButton from "./RandomDilbertButton";
import { Form, Link } from "@remix-run/react";

export default function ModeMeaningBar({ query }) {
  return (
    <Form className="max-w-4xl flex flex-col dmd:flex-row mx-auto w-full px-4  mt-6 dmd:mt-8 mb-4">
      <Link
        to="/classic-search"
        className="text-3xl dmd:text-[2.9rem]/9 text-center dmd:mr-6  text-dilred font-bold mb-4 dmd:mb-0 bg-tea  mx-auto"
      >
        Dilbert
      </Link>
      <div className=" flex  grow ml-auto w-full ">
        <input
          className="border-y-2 border-l-2 border-neutral-300 focus:outline-none  grow h-10 px-3 pt-1.5"
          type="search"
          defaultValue={query}
          name="search"
          placeholder=""
        />
        <button
          type="submit"
          className="bg-dilred dmd:hidden  hover:bg-red-600 text-white pt-3 px-2 pb-1 "
        >
         <img src="/main/search.png" alt="" className="invert size-4"/> 
        </button>
      </div>

      <div className="dmd:flex mr-auto h-10 hidden shrink-0">
        <button
          type="submit"
          className="bg-dilred   hover:bg-red-600 text-white pt-3 px-2 pb-1 "
        >
          Dilbert Search
        </button>
      </div>
    </Form>
  );
}
