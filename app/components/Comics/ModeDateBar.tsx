import { useState } from "react";
import { Form, Link } from "@remix-run/react";
import RandomDilbertButton from "./RandomComicButton";

export default function ModeDateBar({ isSearching }) {
  const [selectedOption, setSelectedOption] = useState("month");
  const [dateQuery, setDateQuery] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [dayValue, setDayValue] = useState("");

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);

    // Update dateQuery based on current selected input's value
    if (option === "month" && monthValue) {
      // If "month" is selected, use the value of the month input
      const [year, month] = monthValue.split("-");
      setDateQuery(`${year}-${month}-15`);
    } else if (option === "day" && dayValue) {
      // If "day" is selected, use the value of the day input
      setDateQuery(dayValue);
    } else {
      setDateQuery(""); // Reset if no value is available
    }
  };

  const handleMonthChange = (event) => {
    const value = event.target.value;
    setMonthValue(value);
    if (selectedOption === "month") {
      const [year, month] = value.split("-");
      setDateQuery(`${year}-${month}-15`);
    }
  };

  const handleDayChange = (event) => {
    const value = event.target.value;
    setDayValue(value);
    if (selectedOption === "day") {
      setDateQuery(value);
    }
  };

  return (
    <div className="max-w-4xl flex flex-col dmd:flex-row  w-full    px-4 mt-6 dmd:mt-8 mb-4 bg-teal-5 ">
      <Link
        to="/comics"
        className="text-3xl dmd:text-[2.9rem]/9 text-center dmd:mr-4 w-[300px] bg-red-  text-primary1 font-bold mt- 2.5 dmd:mb-0 -ml-1 "
      >
        <img src="/main/socrates-raw.png" alt="" className=" bg-blac" />
      </Link>
      <>
        {/* Small Screen Form */}
        <Form id="sm" className=" flex  w-ful mx-auto dmd:hidden   h-8 tiny:h-10">
          <div className="flex text-xs tiny:text-base items-center h-full w-full accent-black gap-x-4 my-[2px border-y-2 border-l-2 border-neutral-300  bg-white ">
            <div className="flex items-center ml-auto h-full">
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="border-y-2 border-gray-300 px-2 h-8 tiny:h-10 focus:outline-none bg-white"
              >
                <option value="month">by Month</option>
                <option value="day">by Day</option>
              </select>
            </div>
            <div className="flex items-center justify-center h-full">
              {selectedOption === "month" && (
                <input
                  type="month"
                  className="border-y-2 border-gray-300 h-8 tiny:h-10 px-2 py-1  focus:outline-none bg-white"
                />
              )}
              {selectedOption === "day" && (
                <input
                  type="date"
                  className="border-y-2 border-gray-300 h-8 tiny:h-10 px-2 py-1  focus:outline-none bg-white"
                />
              )}
            </div>

          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              alert(
                "This is a mockup. Date Search only makes sense to implement, once we import all of your comics into the database."
              );
            }}
            type="submit"
            className="bg-primary1 dmd:hidden mr-auto  hover:bg-red-600 text-white shrink-0 pt- 2 tiny: pt-3  px-2 pb-1 h-full "
          >
            <img src="/main/search.png" alt="" className="invert size-3 tiny:size-4" />
          </button>

        </Form>

        {/* Medium and Larger Screen Form */}


        <Form id="half-md" className="  hidden dmd:flex h-10 mx-auto w-ful full-md:hidden bg-green-500">
          <div className="flex text-x tiny: text-base justify-center  accent-black  w-full border-y-2 border-l-2 border-neutral-300 bg-white">
            <div className="flex items-center ml- auto ">
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="borde border-gray-300 px-2 py- 1.5 h-full focus:outline-none"
              >
                <option value="month">by Month</option>
                <option value="day">by Day</option>
              </select>
            </div>
            <div className="flex items-center justify-center ml-4 mr- auto ">
              {selectedOption === "month" && (
                <input
                  type="month"
                  className="borde border-gray-300 px-2 py- 1 h-full focus:outline-none"
                />
              )}
              {selectedOption === "day" && (
                <input
                  type="date"
                  className="borde border-gray-300 px-2 py- 1 h-full focus:outline-none"
                />
              )}
            </div>
          </div>

          <div className="flex gap-  w-ful shrink-0 ml-auto h-ful w bg-yellow-500">
            <button
              onClick={(event) => {
                event.preventDefault();
                alert(
                  "This is a mockup. Date Search only makes sense to implement, once we import all of your comics into the database."
                );
              }}

              className="bg-primary1  hover:bg-red-600 text-white pt-3 px-2 pb-1 "
            >
              Dilbert Date Search
            </button>
          </div>
        </Form>

        <Form id="full-md" className="max-w-x full-md:flex flex-col  hidden w-full text-base" >
          <div className="flex items-center gap-x-4 accent-black bg-yellow-  w-full grow my-[2px] dmd:my-0 overflow-x- scroll">
            <div className="flex items-center w-ful ml-auto">
              <label className="inline-flex items-center shrink-0">
                <input
                  type="radio"
                  name="date"
                  value="month"
                  className="form-radio"
                  checked={selectedOption === "month"}
                  onChange={handleOptionChange}
                />
                <span className="ml-2 shrink-0">by Month</span>
              </label>
              <input
                type="month"
                className="ml-2 border-2 border-primary1 rounded-lg bg-purple-950 px-2 py-1 h-10 focus:bg-purple-1000 focus:outline-none"
                onChange={handleMonthChange}
                disabled={selectedOption !== "month"}
              />
            </div>

            <div className="flex items-center w-ful ml-4 ">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="date"
                  value="day"
                  className="form-radio"
                  checked={selectedOption === "day"}
                  onChange={handleOptionChange}
                />
                <span className="ml-2  shrink-0">by Day</span>
              </label>
              <input
                type="date"
                className="ml-2 border-2 border-primary1 bg-purple-950 focus:outline-none rounded-lg px-2 py-1 h-10 focus:bg-purple-1000"
                onChange={handleDayChange}
                disabled={selectedOption !== "day"}
              />
            </div>
            <Link
              to={`/results?mode=date&search=${dateQuery}`}
              onClick={(e) => isSearching && e.preventDefault()}
              type="submit"
              className="bg-primary1   hover:bg-purple-600 rounded-lg h-10  px-4   shrink- 0 ml-4 mr-"
            >
              <img src="/main/search.png" alt="" className="invert size-3 tiny:size-4 mt-3" />
            </Link>

          </div>


        </Form>
      </>
    </div>
  );
}
