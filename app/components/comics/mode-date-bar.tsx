import { useState, useEffect } from "react";
import { Form, Link } from "@remix-run/react";

export default function ModeDateBar({ isSearching, query: latestQuery }) {
  const [radioButton, setRadioButton] = useState("month");
  const [query, setQuery]= useState(latestQuery)
  console.log("useState query/ mdb:", latestQuery)

  useEffect(() => {
    setQuery(latestQuery);
  }, []);

  return (
    <div className="max-w-4xl flex flex-col dmd:flex-row  w-full    px-4 mt-6 dmd:mt-8 mb-4 bg-teal-5 ">
      <Link
        to="/comics/meaning"
        className="text-3xl dmd:text-[2.9rem]/9 text-center dmd:mr-4 w-[300px] bg-red-  text-primary1 font-bold mt- 2.5 dmd:mb-0 -ml-1 "
      >
        <div className=" aspect-[1404/245] h-9 mt-[1.5px]">
          <img src="/main/socrates-raw.png" alt="" className=" h-full w-full" />
        </div>
      </Link>
      <>

        <Form id="full-md" className="max-w-x full-md:flex flex-col  hidden w-full text-base" >
          <div className="flex items-center gap-x-4 accent-black bg-yellow-  w-full grow my-[2px] dmd:my-0 overflow-x- scroll">
            <div className="flex items-center w-ful ml-auto">



              <label className="inline-flex items-center shrink-0">
                <input
                  type="radio"
                  name="dateType"
                  value="month"
                  className="form-radio"
                  checked={radioButton === "month"}
                  onChange={() => setRadioButton("month")}
                />
                <span className="ml-2 shrink-0">by Month</span>
              </label>

              <input
                type="month"
                className="ml-2 border-2 border-primary1 rounded-lg bg-transparent px-2 py-1 h-10 focus:bg-purple-1000 focus:outline-none"
                name="month"
                value={ query }
                onChange={(e)=> setQuery(e.target.value)}
                disabled={radioButton !== "month"}
              />
            </div>



            <div className="flex items-center w-ful ml-4 ">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="dateType"
                  value="day"
                  className="form-radio"
                  checked={radioButton === "day"}
                  onChange={() => setRadioButton("day")}
                  />
                <span className="ml-2  shrink-0">by Day</span>
              </label>


              <input
                type="date"
                className="ml-2 border-2 border-primary1 bg-transparent focus:outline-none rounded-lg px-2 py-1 h-10 focus:bg-purple-1000"
                name="day"
                value={ query }
                onChange={(e)=> setQuery(e.target.value)}
                disabled={radioButton !== "day"}
              />
            </div>



            <button
              type="submit"
              className="bg-primary1   hover:bg-purple-600 rounded-lg h-10  px-4   shrink- 0 ml-4 mr-"
              disabled={isSearching}
            >
              <img src="/main/search.png" alt="" className="invert size-3 tiny:size-4 " />
            </button>

          </div>


        </Form>
      </>
    </div>
  );
}
