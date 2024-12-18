import { Link } from "@remix-run/react";

export default function CtaBottom() {
  return (
    <div className="flex w-full flex-col from-purple-1000 via-purple-900 to-purple-1000 px-4 pb-24 pt-36">
      <h3 className="pb-2 text-center font-socrates text-3xl font-bold md2:text-4xl">
        Join the PANTHEON, now!
      </h3>
      <h4 className="mx-auto max-w-4xl text-center text-lg md2:text-2xl">
        Special Offer: Purchase the full year membership and gain instant access
        to the retreat ticket store.
      </h4>
      <Link
        to="#join-pantheon"
        className=" mx-auto mt-7 animate-bg-pulse-slow rounded-lg bg-primary1 px-6 py-2 text-xl text-white hover:bg-purple-600"
      >
        Get Started
      </Link>
      <Link
        className="mx-auto px-4 py-2 pt-6 text-purple-400 underline"
        to="/comics/meaning"
      >
        or explore the Eterna Comic Search
      </Link>
    </div>
  );
}
