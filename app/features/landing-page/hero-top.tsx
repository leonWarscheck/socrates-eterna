import { Link } from "@remix-run/react";

export default function HeroSectionTop() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center bg-purple-950 pt-[40vw] lg1:pt-[26vw]"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-purple-950 bg-[url('/hero/sm.jpg')] bg-[length:100%] bg-top bg-no-repeat md1:bg-[url('/hero/md.jpg')] lg1:bg-[url('/hero/lg.jpg')]"></div>
      <div
        id="title"
        className="z-10 mx-auto flex grow flex-col text-center text-white md1:mb-14 lg1:mb-10"
      >
        <h2 className="mx-4 text-center font-socrates text-[55px] font-bold leading-[69px] lg1:text-[85px]">
          JOIN THE PANTHEON
        </h2>
        <h3 className="mx-4 mt-2.5 hyphens-auto text-center font-socrates text-4xl font-semibold lg1:text-5xl">
          Gain Exclusive Insight and Fellowship
        </h3>

        <div className="mx-auto mt-8 flex flex-col gap-5 text-xl md2:flex-row">
          <Link
            to="#join-pantheon"
            className="animate-bg-pulse-slow rounded-lg bg-primary1 px-8 py-2.5 text-white md2:ml-auto"
          >
            Pantheon Membership
          </Link>
          <Link
            className=" animate-[pulse-border_6s_infinite animate-border-pulse rounded-lg border-2 px-8 py-2 md2:mr-auto"
            to="/comics/meaning"
          >
            Search Comics
          </Link>
        </div>
      </div>

      <div className="absolute bottom-[4dvh] w-full screen-h-sm:hidden">
        <img
          src="/main/down-arrow.png"
          alt="downward arrow icon"
          className="mx-auto size-4 animate-pulse opacity-80 invert"
        />
      </div>
    </section>
  );
}
