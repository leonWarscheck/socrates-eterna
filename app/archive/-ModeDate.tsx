import { useState } from "react";
import "../styles/datepicker.css";
import { Form } from "@remix-run/react";
import RandomDilbertButton from "./RandomDilbertButton";

export default function ModeDate() {
  const [selectedOption, setSelectedOption] = useState("month");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <Form className="max-w-xl flex flex-col mx-auto w-full ">
      <div className="flex mx-auto items-center  dmd:mx-4 accent-black
      dmd:flex-row dmd:w-full gap-y-4 my-2 dmd:my-0">
        <div className="flex items-center mr-auto ">
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
            className="ml-2 border border-gray-300  px-2 py-1 focus:outline-neutral-300 "
            disabled={selectedOption !== "month"}
          />
        </div>

        <div className="flex items-center ">
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
            className="ml-2 border border-gray-300  px-2 py-1 focus:outline-neutral-300"
            disabled={selectedOption !== "day"}
          />
        </div>
      </div>
      <div className="flex  gap-4 mx-auto mt-6">
        <button
          onClick={() => {
            alert(
              "This is a mockup. Date Search only makes sense to implement, once we import all of your comics into the database.",
            );
          }}
          type="submit"
          className="bg-dilred   text-sm small:text-sm hover:bg-red-600 text-white pt-3 px-2 pb-1 "
        >
          Dilbert Date Search
        </button>
        {/* <RandomDilbertButton /> */}
      </div>
    </Form>
  );
}
