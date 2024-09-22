import React from "react";
import RandomDilbertButton from "./RandomDilbertButton";
import { Form, useNavigation } from "@remix-run/react";

export default function ModeMeaning({ query, isSearching }) {


  return (
    <Form className="max-w-xl flex flex-col mx-auto w-full ">
      <input
        className="border-2 border-neutral-200 focus:outline-none grow h-10 px-4 mx-4"
        type="search"
        defaultValue={query}
        name="search"
        placeholder=""
      />
      <div className="flex mx-auto space-x-4  mt-6">
        <button
          disabled={isSearching}
          type="submit"
          className="bg-dilred   text-sm small:text-sm hover:bg-red-600 text-white pt-3 px-2 pb-1 "
        >
          Dilbert Classic Search 
        </button>
        <RandomDilbertButton isSearching={isSearching}/>
      </div>
    </Form>
  );
}
