import type { MetaFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { initScrollHeader } from "~/utils/scrollHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Dilbert.com | Get REBORN" },
    {
      property: "og:title",
      content: " Dilbert REBORN - Uncensored and Spicier Than Ever!"
    },
    {
      name: "description",
      content: "Find Out What Happened to Dilbert..."
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
      <section className="bg-dilred min-h-dvh flex items-center relative dlg:pt-[26vw] pt-[40vw]">
        <div
          className="
            bg-top
            bg-no-repeat
            bg-[length:100%]
            landscape-narrow:bg-[center_top_-4.9rem]
          
            bg-dilred
            bg-[url('/main/lp2cs7-sm.jpg')]
            dmd:bg-[url('/main/lp2cs7-md.jpg')]
            dlg:bg-[url('/main/lp2cs7-lg.jpg')]
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
          flex z-10 flex-col px-4 mx-auto max-w- mb-10 text-center dlg:max-w-5x text-white grow "
        >
          <h2 className="text-7xl dlg:text-8xl font-bold text-center leading-[69px]">
            DILBERT REBORN
          </h2>
          <h3 className="text-center text-5xl px- dlg:text-6xl hyphens-auto mt-2.5 font-semibold">
            Uncensored and Spicier Than Ever!
          </h3>
          <Link
            to="#get-reborn"
            className=" dmd:hidden px-3 pt-3 pb-1 mx-auto mt-7 text-2xl text-white border-2 bg-dilred hover:bg-red-600"
          >
            Get REBORN
          </Link>
          <Link
            to="#get-reborn1"
            className="hidden dmd:block px-3 pt-3 pb-1 mx-auto mt-7 text-2xl text-white border-2 bg-dilred hover:bg-red-600"
          >
            Get REBORN
          </Link>
          <Link
            className="mt-4 text-center text-black underline"
            to="classic-search"
          >
            or explore the Dilbert Classic comics
          </Link>
        </div>

        <div className="absolute bottom-[4dvh] w-full portrait-narrow:hidden ">
          <img src="/main/down-arrow.png" alt="" className="mx-auto size-4  animate-pulse invert opacity-80" />
        </div>
      </section>

      <section className="">
        {/* <div className="flex text-center bg-dilred"></div> */}
        <div className="flex flex-col px-4 pt-16 mb- mx-auto w-full max-w-4xl grow">
          <h2 className="flex mx-auto text-5xl text-center font-bold text-dilred">
            What Happened to Dilbert?
          </h2>
          <section className="small:text-justify text-pretty hyphens-aut mb-4">
            <br />
            <p className="text-xl font-bold text-justif">
              Disgraced and canceled cartoonist Scott Adams has moved his work
              and upgraded it to a spicier version entitled Dilbert Reborn.
            </p>
            <br />
            <p>
              <span className="font-bold">Why did Dilbert get cancelled?</span>{" "}
              ...If you believe the news, it was because I am a big ol' racist.
            </p>
            <br />
            <p className="italic">
              Context: No news about public figures is ever true and in context.
              Never.
            </p>
            <br />
            <p>
              If you look into the context, the point that got me cancelled is
              that CRT, DEI and ESG all have in common the framing that White
              Americans are historically the oppressors and Black Americans have
              been oppressed, and it continues to this day. I recommended
              staying away from any group of Americans that identifies your
              group as the bad guys, because that puts a target on your back.
            </p>
            <br />
            <p className="">
              I was speaking hyperbolically, of course, because we Americans
              don't have an option of staying away from each other.  But it did
              get a lot of attention, as I hoped. (More than I planned,
              actually.)
            </p>
            <br />
            <br />
          </section>

          <div id="ad2 md" className=" hidden relative dmd:flex bg-neutral-100 text-whit w-full h- -mt-3  shrink-0 mb-12 border-8 border-dilred">
            <img
              className=" h-52 w-1/3 p- mx- 6 mt-6 object-cover bg-pink- -mb-6 ml-4 bg-pink- 500"
              src="/books/calender.webp"
              alt=""
            />
            <p className="absolute text-dilred font-bold text-base -top-3 -left-3 border-2 bg-neutral-100 border-dilred px-1">Available Now!</p>


            <div className="flex flex-col mr-4 mt-4 pr-6 ml-">
              {" "}
              <div className="flex py-4 text-center mx-auto text-3xl">
                <h2 className="font-bold ">
                  2025 Page-A-Day Calendar
                </h2>

              </div>
              <p className="overflow-hidden text-whit  text-center text- justify hyphens-auto text- pretty mb- bg- white">
                <span className="font-semibold uppercas">Double Dilbert!</span>  Back by popular demand, now featuring both <span className="font-semibol italic">Dilbert Classic and </span> <span className="font-semibol italic">Dilbert Reborn!</span>  2 comics each day, made in the USA!
              </p>
              <Link
                to="https://shopdilbert.online/product/2025-page-a-day-calendar/"
                className="font-light text- hover:underline bg-dilred text-white mt-4 pt-1 h-8 px-4 mx-auto mb-6 "
                target="_blank"
                rel="noopener norefferrer"
              >
                click to shop<span id="get-reborn1"></span>
              </Link>
            </div>
          </div>




          <div id="ad2 sm" className="flex dmd:hidden flex-col bg-neutral-100 w-full shrink-0 mb-16 border-8 border-dilred -mt-2">
            <div className="relative  pt-12   mx-auto my-auto">
              <img
                className="h-72 w-full  object-cover -mb-4"
                src="/books/calender.webp"
                alt=""
              />
              <p className="absolute top-8 -left-1.5 text-dilre font-bold text-base border-2 bg-neutral-100 border-dilred px-1">
                Available Now!
              </p>
            </div>
            <div className="flex flex-col pb-4 px-6">
              <div className="flex pb-4 text-xl ">
                <h2 className="font-bold mx-auto text-center text-2xl  mr -2 ">
                  2025 Page-A-Day Calendar
                </h2>

              </div>

              <p className="overflow-hidden text-whit  text-center text- justify hyphens-auto text- pretty mb- bg- white">
                <span className="font-semibold uppercas">Double Dilbert!</span>  Back by popular demand, now featuring both <span className="font-semibol italic">Dilbert Classic and </span> <span className="font-semibol italic">Dilbert Reborn!</span>  2 comics each day, made in the USA!
              </p> <Link
                to="https://shopdilbert.online/product/2025-page-a-day-calendar/"
                className="font-light text- hover:underline bg-dilred text-white mt-5 pt-1 h-8 px-4 mx-auto mb-4 "
                target="_blank"
                rel="noopener norefferrer"
              >
                click to shop
              </Link>
              <span id="get-reborn"></span>
            </div>
          </div>



          <section className="px-4 py-4 pt-14 mx-auto w-full bg-dilred">
            <h2 className="text-4xl font-bold text-center text-neutral-100">
              Get Dilbert REBORN
            </h2>
            <table className="mt-6 bg-white table-fixed">
              <thead>
                <tr className="h-24 border-2">
                  <th className="w-1/2 bg-neutral-50">
                    <Link
                      className="px-3 pt-3 pb-1 text-base text-white bg-dilred small:text-xl hover:bg-red-600 mb-"
                      to="https://www.x.com/ScottAdamsSays"
                      target="_blank"
                      rel="noopener norefferrer"
                    >
                      on X.com
                    </Link>
                  </th>
                  <th className="w-1/2">
                    <Link
                      className="px-3 pt-3 pb-1 text-base text-white bg-dilred small:text-xl hover:bg-red-600 mb-"
                      to="https://scottadams.locals.com"
                      target="_blank"
                      rel="noopener norefferrer"
                    >
                      on Locals.com
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-2">
                  <td className="py-6 bg-neutral-50">3$ / month</td>
                  <td>7$ / month</td>
                </tr>
                <tr className="border-2">
                  <td className="py-6 bg-neutral-50">Dilbert REBORN daily</td>
                  <td>Dilbert REBORN daily</td>
                </tr>
                <tr className="border-2">
                  <td className="py-6 bg-neutral-50">
                    Daily Dilbert Calendar (digital version)
                  </td>
                  <td>Daily Dilbert Calendar (digital version)</td>
                </tr>
                <tr className="border-2">
                  <td className="bg-neutral-50">x</td>
                  <td className="py-6">
                    "Robots Read News" comic (usually daily) - about the
                    headlines
                  </td>
                </tr>
                <tr className="border-2">
                  <td className="bg-neutral-50">x</td>
                  <td className="py-6">
                    My morning livestreams without commercials
                  </td>
                </tr>
                <tr className="border-2">
                  <td className="bg-neutral-50">x</td>
                  <td className="py-6">
                    My evening "Man Cave" livestreams without commercials
                  </td>
                </tr>
                <tr className="border-2">
                  <td className="bg-neutral-50">x</td>
                  <td className="py-6">My behind-the-scenes content</td>
                </tr>
                <tr className="border-2">
                  <td className="bg-neutral-50">x</td>
                  <td className="py-6">My political content </td>
                </tr>
                <tr className="border-2">
                  <td className="bg-neutral-50">x</td>
                  <td className="py-6">
                    Over 200 of my Micro Lessons (2-4 minutes) on improving your
                    life!
                  </td>
                </tr>
                <tr className="h-24 border-2 dmd: hidden">
                  <td className="w-1/2 bg-neutral-50">
                    <Link
                      className="px-3 pt-3 pb-1 text-base text-dilred small:text-xl hover:bg-red-600 mb-"
                      to="https://www.twitter.com/@ScottAdams.com"
                    >
                      on X.com
                    </Link>
                  </td>
                  <td className="w-1/2">
                    <Link
                      className="px-3 pt-3 pb-1 text-base text-dilred underlin bg- small:text-xl hover:bg-red-600 mb-"
                      to="https://www.scottadams.locals.com"
                    >
                      on Locals.com
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <div className="p-4 mt-16 bg-neutral-100">
            <p className="text-neutral-500">
              If you are a company or individual who wants to use a Dilbert
              comic in a legal manner, or wants to advertise on the Dilbert
              Classic page,{" "}
              <Link className="underline text-dilred" to="/licensing">
                click here.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
