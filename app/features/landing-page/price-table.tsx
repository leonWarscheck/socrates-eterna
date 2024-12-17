import { Link } from "@remix-run/react";

export default function PriceTable() {
  return (
    <div className="w-full bg-gradient-to-b from-purple-950 via-purple-1000 to-purple-1000 pb-16 pt-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4">
        <h2 className="pb-5 text-center text-4xl font-bold text-purple-200">
          Join the PANTHEON
        </h2>

        <table className="mt-8 w-full table-auto">
          <thead className="sticky top-[62px] z-10 border-t-2 border-purple-900 bg-purple-1000">
            <tr className="w-full border-b-2 border-primary1">
              <th className="w-1/2 pl-4 text-left text-sm md2:text-xl">
                Including
              </th>
              <th className="w-1/4">
                <div className="flex flex-col pt-4">
                  <Link
                    className="mx-2 max-w-36 rounded-lg bg-primary1 px-3.5 py-2 text-base font-medium hover:bg-purple-600 md2:mx-auto md2:px-6 md2:text-xl"
                    to="https://www.x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    on X.com
                  </Link>
                  <p className="mb-3 mt-6 text-xs md2:text-sm">3$ / month</p>
                </div>
              </th>
              <th className="w-1/4 bg-purple-950">
                <div className="flex flex-col pt-4">
                  <Link
                    className="mx-2 max-w-40 animate-bg-pulse-slow2 rounded-lg bg-primary1 px-2 py-2 text-base font-medium hover:bg-purple-600 md2:mx-auto md2:px-6 md2:text-xl"
                    to="https://www.patreon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    on Patreon
                  </Link>
                  <p className="mb-3 mt-6 text-xs md2:text-sm">18$ / month</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm md2:text-base">
            <tr className="border-y-2 border-purple-900">
              <td className="w-1/2 bg-purple-1000 py-6 pl-4">
                Socrates PANTHEON daily comic
              </td>
              <td className="bg-purple-1000">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
              <td className="bg-purple-950">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
            </tr>
            <tr className="border-y-2 border-purple-900">
              <td className="bg-purple-1000 py-6 pl-4">
                Daily Socrates Calendar (digital version)
              </td>
              <td className="bg-purple-1000">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
              <td className="bg-purple-950">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
            </tr>
            <tr className="border-y-2 border-purple-900">
              <td className="bg-purple-1000 py-6 pl-4">
                My morning livestreams without commercials
              </td>
              <td className="bg-purple-1000">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
              <td className="bg-purple-950">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
            </tr>
            <tr className="border-y-2 border-purple-900">
              <td className="py-6 pl-4">
                "Philosophers Read News" comic (usually daily) - about the
                headlines
              </td>

              <td className="">
                {" "}
                <img
                  className="mx-auto h-6"
                  src="/main/dash.svg"
                  alt="dash icon"
                />
              </td>
              <td className="bg-purple-950">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
            </tr>

            <tr className="border-y-2 border-purple-900">
              <td className="py-6 pl-4">
                Access to the PANTHEON network of highly driven, likeminded
                people
              </td>
              <td className="">
                {" "}
                <img
                  className="mx-auto h-6"
                  src="/main/dash.svg"
                  alt="dash icon"
                />
              </td>
              <td className="bg-purple-950">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
            </tr>
            <tr className="border-y-2 border-purple-900">
              <td className="py-6 pl-4">
                Take part in the weekly "PANTHEON" group coaching calls!
              </td>
              <td className="">
                {" "}
                <img
                  className="mx-auto h-6"
                  src="/main/dash.svg"
                  alt="dash icon"
                />
              </td>
              <td className="bg-purple-950">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
            </tr>
            <tr className="border-b-2 border-purple-900">
              <td className="py-6 pl-4">
                Over 200 of my Psychology Lessons (2-4 minutes) on improving
                your life!
              </td>
              <td className="">
                {" "}
                <img
                  className="mx-auto h-6"
                  src="/main/dash.svg"
                  alt="dash icon"
                />
              </td>
              <td className="bg-purple-950">
                {" "}
                <img
                  className="mx-auto size-4"
                  src="/main/checkmark-rounded.svg"
                  alt="checkmark icon"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="12 bg-purple- 950 mx-auto w-full max-w-7xl rounded-2xl">
          <p className="mt-6 max-w-lg text-pretty pl-4 text-xs text-purple-200">
            If you are a company or individual who wants to use a Socrates
            Eterna comic in a legal manner, or wants to advertise on the Eterna
            comics page,{" "}
            <Link className="text-purple-400 underline" to="/licensing">
              click here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
