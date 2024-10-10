import React from "react";
import RandomDilbertButton from "./RandomComicButton";
import { Form, Link } from "@remix-run/react";

export default function ModeMeaningBar({ query }) {
  return (
    <Form className="max-w-4xl flex flex-col dmd:flex-row w-full px-4  mt-6 dmd:mt-8 mb-4">
      <Link
        to="/comics"
        className="text-3xl dmd:text-[2.9rem]/9 text-center dmd:mr-6 w-[386px] bg-red-5  text-dilred font-bold mb-4 dmd:mb-0 -mt- 1.5 -ml-1 "
      >
        <img src="/main/socrates-raw.png" alt="" className=" bg-blac" />
      </Link>
      <div className=" flex  grow ml-auto w-full ">
        <input
          className="border-y-2 border-l-2 border-dilred rounded-l-lg bg-purple-950 focus:outline-none  grow h-10 px-3 "
          type="search"
          defaultValue={query}
          name="search"
          placeholder=""
        />
        <button
          type="submit"
          className="bg-dilred dmd:hidden  hover:bg-purple-600 text-white pt-3 px-2 pb-1 "
        >
          <img src="/main/search.png" alt="" className="invert size-4" />
        </button>
      </div>

      <div className="dmd:flex mr-auto h-10 hidden shrink-0">
        <button
          type="submit"
          className="bg-dilred  rounded-r-lg  hover:bg-purple-600 text-white  px-4  mr-"
        >
          Eterna Search
        </button>
      </div>
    </Form>
  );
}
