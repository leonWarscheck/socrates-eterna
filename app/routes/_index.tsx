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
    <main className="">
      <section id="hero" className="bg-purple-950 min-h-dvh flex items-center relative dlg:pt-[26vw] pt-[40vw]">
        <div
          className="
            bg-top
            bg-no-repeat
            bg-[length:100%]
            landscape-narrow:bg-[center_top_-4.9rem
          
            bg-purple-950
            bg-[url('/hero/sm.jpg')]
            dmd:bg-[url('/hero/md.jpg')]
            dlg:bg-[url('/hero/lg.jpg')]
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
          <h2 className="font-socrates leading3 text-[55px] tiny:text-6xl dlg:text-[85px] font-bold text-center leading- [69px]">
            JOIN THE PANTHEON
          </h2>
          <h3 className="font-socrates text-center text-4xl px- dlg:text-5xl hyphens-auto mt-2.5 font-semibold">
            Gain Exclusive Insight and Fellowship
          </h3>
          <Link
            to="#get-reborn"
            className=" dmd:hidden px-3 pt-3 pb-1 mx-auto mt-7 text-xl text-white border2 bg-dilred hover:bg-red-600"
          >
            Get Started
          </Link>
          <Link
            to="#join-pantheon"
            className="hidden dmd:block px-6 py-2 font- socrates  mx-auto mt-7 text-2xl text-white border-2 rounded-lg border-dilred pulse-border bg-purple- hover:bg-purple-600"
          >
            Get Started
          </Link>
          <Link
            className="mt-4 text-center text-purple-400 font-ligh underline font- socrates"
            to="/comics"
          >
            or explore the Eterna comics
          </Link>
        </div>

        <div className="absolute bottom-[4dvh] w-full portrait-narrow:hidden ">
          <img src="/main/down-arrow.png" alt="" className="mx-auto size-4  animate-pulse invert opacity-80" />
        </div>
      </section>

      {/* <div className="col">
        <div className="flex">
          <div>Copy</div>
          <img src="" alt="" />
        </div>
        <div className="flex">Table</div>
        <div className="flex">License</div>
      </div> */}

      <section id="landing page" className=" flex flex-col ">
        <div id="copy" className="flex bg-teal- 500  mb- mx-auto w-full max-w-7xl grow">
          <div id="text" className="flex flex-col small:text-justif text-pretty pl-4 w-3/5 pr-12 bg -gradient-to-r from-purple-1000 to-purple-900 pt-28">
            <h2 className="text-4xl font-bold text- center bg-blue- 400">
              What Happened to Socrates?
            </h2>
            <br />
            <p className="text-lg font-bold text-justif ">
              Cartoonist and soul explorer Erik Holm has emerged from his 3 year retreat with a refined mission - launching Socrates Pantheon.
            </p>
            <br />
            <p>
              {/* <span className="font-bold">Why the retreat?</span>{" "} */}
              Erik was struck by a vision to fast and sit silent on mount Olympus until his next chapter emerged.
            </p>
            <br />

            <p>
              During this time, he explored his own shortcomings, discovered hidden scriptures, met new mentors, and had otherworldly encounters. These experiences transformed his understanding and strength, leading him to merge philosophy with action on a new level.
            </p>
            <br />
            Pantheon is the gateway to discover your purpose...
            <br />
            <br />
            <br />
            <br />
            <p id="join-pantheon"></p>
          </div>
          <img className="flex w-2/4 object-cover " src="/hero/fade1a.jpeg" alt="" />


        </div>

        <div id="table" className=" mx-auto w-full  pt-28 pb-16 bg-gradient-to-b from-purple-950 via-purple-1000 to-purple-1000 px-4 ">
          <h2 className="text-4xl pb-5 font-bold text-center text-purple-200">
            Join the PANTHEON
          </h2>
          <table className="mt-8 bg-purple- 400 table-auto mx-auto  max-w-7xl w-full">
            <thead className="sticky top-[62px] border-t-2 border-purple-900  z-10 bg-purple-1000">
              <tr className="w-full border-b-2 border-dilred">
                <th className="w-1/2 text-xl text-left pl-4 ">Including</th>
                <th className="w-1/4   ">
                  <div className="flex flex-col pt-4 ">
                    <Link
                      className="px-6 py-2  mx-auto text-base rounded-lg  bg-dilred small:text-xl hover:bg-purple-600 mb-"
                      to="https://www.x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      on X.com
                    </Link>
                    <p className="mt-6 text-sm mb-3">3$ / month</p>
                  </div>
                </th>
                <th className="w-1/4  bg-purple-950">
                  <div className="flex flex-col pt-4 ">
                    <Link
                      className="px-6 py-2  mx-auto text-base rounded-lg  bg-dilred small:text-xl hover:bg-purple-600 mb-"
                      to="https://www.patreon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      on Patreon
                    </Link>
                    <p className="mt-6 text-sm mb-3">18$ / month</p>
                  </div>

                </th>

              </tr>
            </thead>
            <tbody className="text- ">
              <tr className="border-purple-900 border-y-2">
                <td className="py-6 bg-purple-1000 w-1/2 pl-4">Socrates PANTHEON daily comic</td>
                <td className="bg-purple-1000"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
                <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              </tr>
              <tr className="border-purple-900 border-y-2">
                <td className="py-6 pl-4 bg-purple-1000">
                  Daily Socrates Calendar (digital version)
                </td>
                <td className="bg-purple-1000"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
                <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              </tr>
              <tr className="border-purple-900 border-y-2">
                <td className="py-6 pl-4 bg-purple-1000">
                  My morning livestreams without commercials
                </td>
                <td className="bg-purple-1000"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
                <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              </tr>
              <tr className="border-purple-900 border-y-2">
                <td className="py-6 pl-4 ">
                  "Philosophers Read News" comic (usually daily) - about the
                  headlines
                </td>

                <td className=""> <img className="h-6 mx-auto" src="/main/dash.svg" alt="" /></td>
                <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              </tr>


              <tr className="border-purple-900 border-y-2">
                <td className="py-6 pl-4 ">Access to the PANTHEON network of highly driven, likeminded people</td>
                <td className=""> <img className="h-6 mx-auto" src="/main/dash.svg" alt="" /></td>
                <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              </tr>
              <tr className="border-purple-900 border-y-2">
                <td className="py-6 pl-4 ">
                  Take part in the weekly "PANTHEON" group coaching calls!
                </td>
                <td className=""> <img className="h-6 mx-auto" src="/main/dash.svg" alt="" /></td>
                <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              </tr>
              <tr className="border-purple-900 border-b-2">
                <td className="py-6 pl-4 ">
                  Over 200 of my Psychology Lessons (2-4 minutes) on improving your
                  life!
                </td>
                <td className=""> <img className="h-6 mx-auto" src="/main/dash.svg" alt="" /></td>
                <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              </tr>
            </tbody>
          </table>
          <div className="px- 4">
            <div className="  12 bg-purple- 950  rounded-2xl max-w-7xl w-full mx-auto ">
              <p className="text-purple-200 text-xs mt-6 pl-4 ">
                If you are a company or individual who wants to use a Socrates Eterna
                comic in a legal manner, <br /> or wants to advertise on the Eterna comics page,{" "}
                <Link className="underline text-purple-400" to="/licensing">
                  click here.
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="bg-purple-950 w-full h-2"></div> */}
        <div className="mx- 32 bg-gradient-to-b from-purple-1000 to-purple-950">
          <div id="retreat" className="flex flex-col py-24 max-w-7xl mx-auto w-full ">
            <h3 className="text-4xl text-center font-bold">Exclusive: Access to 2025 Pantheon Retreat Tickets</h3>
            <p className="text-center pt-2 text-lg">The high level mastermind journey for longer-than-6-months members.</p>

            <div className="flex justify-between gap-x-12 text-center text-2xl font-bold w-full pt-20">
              <div className="flex flex-col w-96">
                <img className="size-56 rounded-2xl mx-auto mb-8" src="/landing/mount.jpg" alt="" />
                <h4>Powerful Locations</h4>
                <p className="text-base font-normal pt-4">The most powerful transformations happen in the most magical locations and professional settings.</p>
              </div>
              <div className="flex flex-col w-96">
                <img className="size-56 rounded-2xl mx-auto mb-8" src="/landing/erik.jpg" alt="" />
                <h4>Breakthrough Mentoring</h4>
                <p className="text-base font-normal pt-4">Get personal mentoring from Erik Holm to take your life to the next level and awaken the peaceful warrior within yourself. </p>
              </div>
              <div className="flex flex-col w-96">
                <img className="size-56 rounded-2xl mx-auto mb-8" src="/landing/group.jpg" alt="" />
                <h4>Fellowship for Life</h4>
                <p className="text-base font-normal pt-4">Deepen your relationships in the Pantheon Network. Minimum one friendship for life, guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full  pt-28 pb-20">
          <h3 className="text-center text-4xl font-bold font-socrates pb-2">Join the PANTHEON, now!</h3>
          <h4 className="text-center text-xl">Special Offer: Purchase the full year membership and gain instant access to the retreat ticket store.</h4>
          <Link
            to="#join-pantheon"
            className="hidden dmd:block px-6 py-2 font- socrates  mx-auto mt-7 text-2xl text-white border-2 rounded-lg border-dilred pulse-border bg-purple- hover:bg-purple-600"
          >
            Get Started
          </Link>
        </div>


      </section>
    </main >
  );
}
