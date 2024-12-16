import { Link } from "@remix-run/react";

export default function HeroSectionTop() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center bg-purple-950 pt-[40vw] dlg:pt-[26vw]"
    >
      <div className="bg- top landscape-narrow: absolute bottom-0 left-0 right-0 top-0 z-0 bg-purple-950 bg-[url('/hero/sm.jpg')] bg-[length:100%] bg-[center_top_+3.5rem] bg-no-repeat dmd:bg-[url('/hero/md.jpg')] dlg:bg-[url('/hero/lg.jpg')]"></div>
      <div
        id="title"
        className="px- 4 max-w- dlg:max-w-5x z-10 mx-auto flex grow flex-col text-center text-white"
      >
        <h2 className="mx-4 text-center font-socrates text-[55px] font-bold leading-[69px] tiny:text-6xl dlg:text-[85px]">
          JOIN THE PANTHEON
        </h2>
        <h3 className="mx-4 mt-2.5 hyphens-auto text-center font-socrates text-4xl font-semibold dlg:text-5xl">
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
            className="text-purple-40 animate-[pulse-border_6s_infinite animate-border-pulse rounded-lg border-2 px-8 py-2 md2:mr-auto"
            to="/comics/meaning"
          >
            Search Comics
          </Link>
        </div>
      </div>

      <div className="portrait-narrow:hidde n absolute bottom-[4dvh] w-full">
        <img
          src="/main/down-arrow.png"
          alt=""
          className="mx-auto size-4 animate-pulse opacity-80 invert"
        />
      </div>
    </section>
  );
}
