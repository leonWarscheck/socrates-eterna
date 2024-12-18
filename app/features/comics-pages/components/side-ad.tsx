import { Link } from "@remix-run/react";

export default function SideAd() {
  return (
    <div className="mr-4 mt-16 hidden flex-col self-start rounded-xl border-primary1 bg-purple-1000 sxl:flex">
      <div className="mx-auto mt-8 aspect-[660/876] max-h-32">
        <img
          className="h-full w-full object-cover"
          src="/books/calendar03.png"
          alt="socrates physical page a day calendar"
        />
      </div>
      <div className="mb-8 ml-6 mr-4 pr-6 text-center">
        <h2 className="py-3 text-xl font-bold">2025 Page-A-Day Calendar</h2>

        <p className="mb-6 text-base">
          <span className="font-bold">Available Now! </span>
          Back by popular demand, now featuring both{" "}
          <span className="font-semibol italic">Socrates Eterna and </span>{" "}
          <span className="font-semibol italic">Socrates Pantheon!</span> 2
          comics each day, printed in Athens!
          <br />
        </p>
        <Link
          to="https://www.amazon.com"
          className="mx-auto h-8 rounded-lg border-2 bg-purple-950 px-4 py-1 text-sm font-normal hover:underline"
          target="_blank"
          rel="noopener norefferrer"
        >
          click to shop
        </Link>
      </div>
    </div>
  );
}
