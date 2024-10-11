import { useState } from "react";
import "../styles/datepicker.css";
import { Form } from "@remix-run/react";

export default function ModeDate() {
  const [selectedOption, setSelectedOption] = useState("month");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      {/* Small Screen Form */}
      <Form id="sm" className="max-w-xl flex flex-col mx-auto w-full dmd:hidden">
        <div className="flex text-x tiny: text-base items-center mx-4 accent-black gap-y-2 my-[1px">
          <div className="flex items-center ml-auto">
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="border-2 border-neutral-200 px-2  focus:outline-none h-10  bg-white"
            >
              <option value="month">by Month</option>
              <option value="day">by Day</option>
            </select>
          </div>
          <div className="flex items-center justify-center ml-4 mr-auto">
            {selectedOption === "month" && (
              <input
                type="month"
                className="border-2 border-neutral-200 px-2 py-1 focus:outline-none h-10  bg-white"
              />
            )}
            {selectedOption === "day" && (
              <input
                type="date"
                className="border-2 border-neutral-200 px-2 py-1 focus:outline-none h-10 bg-white"
              />
            )}
          </div>
        </div>

        <div className="flex gap-4 mx-auto mt-6">
          <button
            onClick={(event) => {
              event.preventDefault();
              alert(
                "This is a mockup. Date Search only makes sense to implement, once we import all of your comics into the database."
              );
            }}

            className="bg-primary1 text-sm small:text-sm hover:bg-red-600 text-white pt-3 px-2 pb-1 rounded-md"
          >
            Eterna Date Search
          </button>
        </div>
      </Form>

      {/* Medium and Larger Screen Form */}
      <Form id="md" className="max-w-xl dmd:flex flex-col mx-auto px-4 w-full hidden bg-purple-">
        <div className="flex items-center mx-auto justify-between accent-black w-full my-[2px bg-amber-">
          <div className="flex items-center mr- auto bg-pink-">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="dateType"
                value="month"
                className="form-radio"
                checked={selectedOption === "month"}
                onChange={handleOptionChange}
              />
              <span className="ml-2">by Month</span>
            </label>
            <input
              type="month"
              className="ml-2 border-2 border-primary1 px-2 py-1 h-10 bg-transparent  focus:outline-none focus:bg-purple-950 rounded-lg"
              disabled={selectedOption !== "month"}
            />
          </div>

          <div className="flex items-center ml- auto bg-teal-">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="dateType"
                value="day"
                className="form-radio"
                checked={selectedOption === "day"}
                onChange={handleOptionChange}
              />
              <span className="ml-2">by Day</span>
            </label>
            <input
              type="date"
              className="ml-2 border-2 bg-transparent border-primary1 px-2 py-1 h-10 focus:outline-none focus:bg-purple-950 rounded-lg"
              disabled={selectedOption !== "day"}
            />
          </div>
        </div>

        <div className="flex gap-4 mx-auto mt-6">
          <button
            onClick={(event) => {
              event.preventDefault();
              alert(
                "This is a mockup. Date Search only makes sense to implement, once we import all of your comics into the database."
              );
            }}
            type="submit"
            className="bg-primary1 text-sm small:text-sm hover:bg-purple-600 h-9 px-4  rounded"
          >
            Eterna Date Search
          </button>
        </div>
      </Form>
    </>
  );
}
