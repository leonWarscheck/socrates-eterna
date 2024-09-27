import type { MetaFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { initScrollHeader } from "~/utils/scrollHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Socrates Eterna | PANTHEON" },
    {
      property: "og:title",
      content: "PANTHEON - Exclusive Insight and Fellowship!"
    },
    {
      name: "description",
      content: "Find Out What Happened to Socrates..."
    },
    {
      property: "og:image",
      content: "/main/lp2-lg-cmyk-crop4.jpg"
    }
  ];
};

export default function Index() {

  return (
    <main className="mb-16">
      <section className="bg-purple-950 min-h-dvh flex items-center relative dlg:pt-[26vw] pt-[40vw]">
        <div
          className="
            bg-top
            bg-no-repeat
            bg-[length:100%]
            landscape-narrow:bg-[center_top_-4.9rem
          
            bg-purple-950
            bg-[url('/main/lp2cs7-sm.jpg')]
            dmd:bg-[url('/main/lp2cs7-md.jpg')]
            dlg:bg-[url('/main/s-hero-lg.jpg')]
            absolute 
            top-0
            right-0
            bottom-0
            left-0
            z-0
          "
        ></div>
        <div
          id="title"
          className="
          flex z-10 flex-col px- 4 mx-auto max-w- mb-10 text-center dlg:max-w-5x text-white grow "
        >
          <h2 className="font-socrates leading3 text-[55px] tiny:text-6xl dlg:text-7xl font-bold text-center leading- [69px]">
            JOIN THE PANTHEON
          </h2>
          <h3 className="font-socrates text-center text-4xl px- dlg:text-5xl hyphens-auto mt-2.5 font-semibold">
           Exclusive Insight and Fellowship
          </h3>
          <Link
            to="#get-reborn"
            className=" dmd:hidden px-3 pt-3 pb-1 mx-auto mt-7 text-xl text-white border2 bg-dilred hover:bg-red-600"
          >
            Get Started
          </Link>
          <Link
            to="#get-reborn1"
            className="hidden dmd:block px-6 py-2 font- socrates  mx-auto mt-7 text-2xl text-white border2 rounded-lg border-purple-400 bg-purple-700 hover:bg-purple-600"
          >
          Get Started
          </Link>
          <Link
            className="mt-4 text-center text-neutral-500 font-ligh underline font- socrates"
            to="/comics"
          >
            or explore the Eterna comics
          </Link>
        </div>

        <div className="absolute bottom-[4dvh] w-full portrait-narrow:hidden ">
          <img src="/main/down-arrow.png" alt="" className="mx-auto size-4  animate-pulse invert opacity-80" />
        </div>
      </section>

      <section className="">
        {/* <div className="flex text-center bg-dilred"></div> */}
        <div className="flex flex-col px-4 pt-16 mb- mx-auto w-full max-w-4xl grow">
          <h2 className="flex mx-auto text-5xl text-center font-bold text-purple-100">
            What Happened to Socrates?
          </h2>
          <section className="small:text-justify text-pretty hyphens-aut mb-4">
            <br />
            <br />
            <p className="text-xl font-bold text-justif">
              Soul exploring cartoonist Julian Bendtsen has emerged from his 3 year retreat and upgraded his work to a purer and more actionable version titled Socrates Pantheon.
            </p>
            <br />
            <p>
              <span className="font-bold">Why did Julian retreat?</span>{" "}
              ...because he was involuntarily struck by a vision to fast and sit silent on mount Olympus until his next chapter for impacting the world emerges.
            </p>
            <br />
            <p className="italic">
              Context: I am used to intense retreats, but none came close the challenges and wonders I experienced in the past 3 years.
            </p>
            <br />
            <p>
            I painstakingly looked for all the places where I was wrong. I found hidden scriptures, met multiple new mentors by chance and had otherworldly encounters with humans and other beings... </p>
            <br />
            <p className="">
            Stories that are too mind shattering for the untrained character. Stories that lead me to new dimensions of tapping into my strenghts. Stories that helped me to lead others to find the same insights, and to merge philosophy with action! 
            </p>
            <br />
            Socrates Pantheon is the right place to follow your curiousity.  
            <span id="get-reborn1"></span>
            
            <br />
            <br />
            <br />
          </section>

          <section className="px4 py-6 mx-auto w-full bg- rounded-2xl">
            <h2 className="text-4xl font-bold text-center text-purple-200">
              Join the PANTHEON
            </h2>
            <table className="mt-6 bg-purple-1000 table-auto  border-purple-700 rounded">
              <thead className="sticky  z-10">
                <tr className="h-24 ">
                  <th className="w-1/2 bg-purple-1000">
                    <Link
                      className="px-3 py-2 text-base rounded-lg  bg-dilred small:text-xl hover:bg-purple-600 mb-"
                      to="https://www.x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      on X.com
                    </Link>
                  </th>
                  <th className="w-1/2">
                    <Link
                      className="px-3 py-2 text-base rounded-lg bg-dilred small:text-xl hover:bg-purple-600 mb-"
                      to="https://patreon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      on Patreon
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="text-center ">
                <tr className="border-purple-700 border-y-2">
                  <td className="py-6 bg-purple-1000">3$ / month</td>
                  <td>7$ / month</td>
                </tr>
                <tr className="border-purple-700 border-y-2">
                  <td className="py-6 bg-purple-1000">Socrates PANTHEON daily</td>
                  <td>Socrates PANTHEON daily</td>
                </tr>
                <tr className="border-purple-700 border-y-2">
                  <td className="py-6 bg-purple-1000">
                    Daily Socrates Calendar (digital version)
                  </td>
                  <td>Daily Socrates Calendar (digital version)</td>
                </tr>
                <tr className="border-purple-700 border-y-2">
                  <td className="bg-purple-1000">x</td>
                  <td className="py-6">
                    "Philosophers Read News" comic (usually daily) - about the
                    headlines
                  </td>
                </tr>
                <tr className="border-purple-700 border-y-2">
                  <td className="bg-purple-1000">x</td>
                  <td className="py-6">
                    My morning livestreams without commercials
                  </td>
                </tr>
                <tr className="border-purple-700 border-y-2">
                  <td className="bg-purple-1000">x</td>
                  <td className="py-6">My behind-the-scenes content</td>
                </tr>
                <tr className="border-purple-700 border-y-2">
                  <td className="bg-purple-1000">x</td>
                  <td className="py-6">Access to the PANTHEON network of highly driven, likeminded people</td>
                </tr>
                <tr className="border-purple-700 border-y-2">
                  <td className="bg-purple-1000">x</td>
                  <td className="py-6">
                    Take part in the evening "PANTHEON" group calls.
                  </td>
                </tr>
                <tr className="border-purple-700 border-b-2">
                  <td className="bg-purple-1000">x</td>
                  <td className="py-6">
                    Over 200 of my Psychology Lessons (2-4 minutes) on improving your
                    life!
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <div className="p-4 mt-12 bg-purple-950 rounded-2xl">
            <p className="text-purple-200">
              If you are a company or individual who wants to use a Socrates Eterna
              comic in a legal manner, or wants to advertise on the Eterna comics page,{" "}
              <Link className="underline text-purple-400" to="/licensing">
                click here.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
