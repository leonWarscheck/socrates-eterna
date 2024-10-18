import { Link } from "@remix-run/react";

export default function ModeSelector({ mode }) {
  // console.log("mode in ModeSelector:", mode)
  return (
    <div className="flex dmd:mt-8 mt-6 landscape-narrow:mb- px-4 text-sm text-purple-200 font-ligh ">
      <div className="mx-auto  flex ">
        <h3 className="pr-4 dmd:py-0 mx-auto pb-2 ">Search by:</h3>
        <ul className=" flex space-x-4 ">
          <li className="">
            {" "}
            <Link
              prefetch="render"
              to={`/comics/meaning`}
              className={
                (mode === "meaning" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              {" "}
              Meaning<span className="text-x align-supe"></span>
            </Link>{" "}
          </li>
          <li>
            <Link
              prefetch="render"
              to="/comics/date"
              className={
                (mode === "date" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              Date
            </Link>
          </li>
          <li>
            {" "}
            <Link
              prefetch="render"
              to={`/comics/character`}
              className={
                (mode === "character" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              Character
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
