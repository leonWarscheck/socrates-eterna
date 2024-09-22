import { Link, useSearchParams, MetaFunction } from "@remix-run/react";
import { useEffect } from "react";
import { showHeader } from "~/utils/scrollHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Lifechanging Books | Dilbert.com" },
    // { name: "Uncensored and Spiciere Than Ever!", content: "Find Out What Happened to Dilbert!", 'og:image': "/favicon.ico",  },
  ];
};

export default function Books() {
  // useEffect(() => showHeader());


  return (
    <>
      <main id="sm" className="  max-w-4xl w-full mx-auto dmd:hidden flex flex-col h-scree grow mt-28 gap-10 px-4 mb-20 min-h-dvh overflow-y-scrol">
        <div
          onClick={() =>
            alert(
              "Here the user will be able to filter for either Non-Dilbert or Dilbert books.",
            )
          }
          className="flex gap-5 ml-auto text-sm tiny:text-base -mt-3 -mb-5"
        >
          <button className="text-dilred  bg-neutral-100 px-2 p-1 underline hover:text-neutral-500">
            Scott Adams Books
          </button>{" "}
          <button className="text-neutral-500 hover:underline bg-neutral-100 px-2 p-1">
            Dilbert Books
          </button>
        </div>



        <div className="flex flex-col bg-dilred w-full shrink-0">
          <div className="relative  pt-20   mx-auto my-auto bg-dilred">
            <img
              className="w- 1/2 h-96 object-cover -ml-3"
              src="/books/calender.webp"
              alt=""
            />
            <p className="absolute top-8 -left-1.5 text-dilre font-bold text-base border-2 bg-neutral-100 border-dilred px-1">
              Available Now!
            </p>
          </div>
          <div className="flex flex-col pb-4 px-6 ">
            <div className="flex pb-4 text-xl ">
              <h2 className="font-bold mr-2 text-white">
              2025 Page-A-Day Calendar
              </h2>
              <Link
                to="https://shopdilbert.online/product/2025-page-a-day-calendar/"
                className="font-light hover:underline bg-dilred text-white pt-1  h-9 px-4 ml-auto border-2 border-neutral-100 "
                target="_blank"
                rel="noopener norefferrer"
                
              >
                buy
              </Link>
            </div>
            <p className="overflow-hidden text-white  text-justify hyphens-auto mb-5">
            <span className="font-bold">Double Dilbert! </span>

By popular demand, the Dilbert calendar is back, and this time, it has been created entirely in America.

Better yet, this edition is printed on two sides, for twice the comics!
Whaaaaat???
<br/>
<br/><span className="font-bold">
Front of page:</span> Classic Dilbert comics as always.

<br/><span className="font-bold">
Back of page:</span> Dilbert Reborn (a “spicier” Dilbert comic).
<br/>
<br/>
Dilbert Reborn comics have been created more recently, often featuring provocative topics you might not want to share with your humorless coworkers. Rated PG-13, but still, it’s a dangerous world out there, so be careful.

            </p>
          </div>
        </div>

        <div className="flex flex-col bg-neutral-200 w-full shrink-0">
          <div className="relative w-1/2 py-14   mx-auto my-auto">
            <img
              className="w-full"
              src="/books/gods-debris.jpg"
              alt=""
            />
            <p className="absolute top-12 -left-1.5 text-dilred font-bold text-base border-2 bg-neutral-100 border-dilred px-1">
              NEW
            </p>
          </div>
          <div className="flex flex-col pb-4 px-6">
            <div className="flex pb-4 text-xl ">
              <h2 className="font-bold mr-2">
                God's Debris: The Complete Works
                <span className="font-normal text-neutral-500"> (2024)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/5D6HK9Y"
                className="font-light hover:underline bg-dilred text-white pt-1 h-8 px-4 ml-auto"
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-hidden text-justify hyphens-auto mb-5">
              This 2nd Edition features the internationally influential God’s Debris (2001) and its sequel, The Religion War (2004), plus a short story entitled Lucky House that is set in 2120 after the AI War.. <br /> Nothing about this book is normal.

              The author is a trained hypnotist, and the book is written to create an experience you don’t normally get from words on a page. You will feel the effect most profoundly before the end of the first novel, God’s Debris, and in the short story Lucky House.<br />
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                show more...
              </button>
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-neutral-200 w-full  shrink-0 ">
          <img
            className="w-1/2 py-14  mx-auto my-auto"
            src="/books/reframe.jpg"
            alt=""
          />
          <div className="flex flex-col pb-4 px-6">
            <div className="flex pb-4 text-xl">
              <h2 className="font-bold mr-2">
                Reframe Your Brain{" "}
                <span className="font-normal text-neutral-500 ">(2023)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/0V0JTMe"
                className="font-light  hover:underline bg-dilred text-white pt-1 h-8 px-4 ml-auto "
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-hidden text-justify mb-5 ">
              Are you familiar with this old saying? “All publicity is good
              publicity.” That’s a classic reframe. The quote shifts your thinking
              from the shame of whatever you did wrong to your probable benefit.
              You can’t change the past, but you can change how you feel about it.{" "}
              <br />
              Trained hypnotist and persuasion expert Scott Adams has packed more
              than 160 new, counterintuitive, and effective reframes into Reframe
              Your Brain.
              <br />{" "}
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>



        <div className="flex flex-col bg-neutral-200 w-full  shrink-0 ">
          <img
            className=" w-1/2 py-14 mx-auto my-auto"
            src="/books/loserthink.jpg"
            alt=""
          />
          <div className="flex flex-col pb-4 px-6">
            {" "}
            <div className="flex pb-4 text-xl">
              <h2 className="font-bold ">
                Loserthink
                <span className="font-normal text-neutral-500 "> (2019)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/00ERzIbb"
                className="font-light  hover:underline bg-dilred text-white pt-1 px-4 ml-auto"
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-hidden text-justify hyphens-auto text-pretty mb-5 ">
              From the creator of Dilbert and author of Win Bigly, a guide to
              spotting and avoiding loserthink: sneaky mental habits trapping
              victims in their own bubbles of reality. <br /> If you've been on
              social media lately, or turned on your TV, you may have noticed a
              lot of dumb ideas floating around. "We know when history will repeat
              and when it won't." "We can tell the difference between evidence and
              coincidences." <br />{" "}
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>


        <div className="flex flex-col bg-neutral-200 w-full  shrink-0 ">
          <img className=" w-1/2 py-14 mx-auto my-auto" src="/books/win.jpg" alt="" />
          <div className="flex flex-col pb-4 px-6">
            {" "}
            <div className="flex pb-4 text-xl">
              <h2 className="font-bold ">
                Win Bigly
                <span className="font-normal text-neutral-500 "> (2018)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/002DExiY"
                className="font-light  hover:underline bg-dilred text-white pt-1 px-4 ml-auto"
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-y-hidden text-justify hyphens-auto text-pretty mb-5 ">
              The New York Times bestseller that explains one of the most
              important perceptual shifts in the history of humankind Scott Adams
              was one of the earliest public figures to predict Donald Trump’s
              election.
              <br /> The mainstream media regarded Trump as a lucky clown, but
              Adams – best known as “the guy who created Dilbert” -- recognized a
              level of persuasion you only see once in a generation. <br />{" "}
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>


        <div className="flex flex-col bg-neutral-200 w-full  shrink-0 ">
          <img
            className=" w-1/2 py-14 mx-auto my-auto"
            src="/books/winbig2.jpg"
            alt=""
          />
          <div className="flex flex-col pb-4 px-6">
            {" "}
            <div className="flex pb-4 text-xl">
              <h2 className="font-bold mr-2">
                How to ... Still Win Big
                <span className="font-normal text-neutral-500 "> (2013)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/huu7m3Z"
                className="font-light  hover:underline  bg-dilred text-white pt-1 px-4 h-8 ml-auto"
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-y-hidden text-justify hyphens-auto mb-5 ">
              Dilbert creator Scott Adams' funny memoir about his many failures
              and what they eventually taught him about success 'Adams has a
              funny, refreshingly considered set of ideas about how to find
              success-and what that success will look like when one gets there'
              Kirkus Reviews. <br /> Scott Adams has probably failed at more
              things than anyone you've ever met. So how did he go from hapless
              office worker and serial failure to the creator of Dilbert, one of
              the world's most famous comic strips, in just a few years? <br />
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>
      </main>





      <main id="md-lg" className=" hidden  max-w-4xl w-full mx-auto dmd:flex flex-col h-scree grow mt-28 gap-10 px-4 mb-20 min-h-dvh overflow-y-scrol">

        <div
          onClick={() =>
            alert(
              "Here the user will be able to only show either Non-Dilbert or Dilbert books.",
            )
          }
          className="flex gap-5 ml-auto  -mt-3 -mb-5 mr-"
        >
          <button className="text-dilred bg-neutral-100 px-2 p-1 underline hover:text-neutral-500">
            Scott Adams Books
          </button>{" "}
          <button className="text-neutral-500  bg-neutral-100 px-2 p-1 hover:underline">
            Dilbert Books
          </button>
        </div>
        



        <div className=" relative flex bg-dilred text-white w-full h- 80 shrink-0 ">
          <img
            className=" h-80 w-1/3 p- mx- 6 mt-20 object-cover"
            src="/books/calender.webp"
            alt=""
          />
          <p className="absolute text-dilred font-bold text-base top-4 left-4 border-2 bg-neutral-100 border-dilred px-1">Available Now!</p>


          <div className="flex flex-col mr-4 mt-4 pr-6 ml-6">
            {" "}
            <div className="flex py-4 text-xl">
              <h2 className="font-bold ">
              2025 Page-A-Day Calendar
              </h2>
              <Link
                to="https://shopdilbert.online/product/2025-page-a-day-calendar/"
                className="font-light  hover:underline bg-dilred text-white pt-1 h-9 px-4 ml-auto border-2 border-white "
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
<p className="overflow-hidden text-white  text-justify hyphens-auto mb-5">
            <span className="font-bold">Double Dilbert! </span>

By popular demand, the Dilbert calendar is back, and this time, it has been created entirely in America.

Better yet, this edition is printed on two sides, for twice the comics!
Whaaaaat???
<br/>
<br/><span className="font-bold">
Front of page:</span> Classic Dilbert comics as always.

<br/><span className="font-bold">
Back of page:</span> Dilbert Reborn (a “spicier” Dilbert comic).
<br/>
<br/>
Dilbert Reborn comics have been created more recently, often featuring provocative topics you might not want to share with your humorless coworkers. Rated PG-13, but still, it’s a dangerous world out there, so be careful.

            </p>
            
          </div>
        </div>



        <div className=" relative flex bg-neutral-200 w-full h-80 shrink-0 ">
          <img
            className=" h-5/6 p- mx-6 my-auto"
            src="/books/gods-debris.jpg"
            alt=""
          />
          <p className="absolute text-dilred font-bold text-base top-4 left-4 border-2 bg-neutral-100 border-dilred px-1">NEW</p>


          <div className="flex flex-col m-4 pr-6">
            {" "}
            <div className="flex py-4 text-xl">
              <h2 className="font-bold ">
                God's Debris: The Complete Works
                <span className="font-normal text-neutral-500 "> (2024)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/5D6HK9Y"
                className="font-light  hover:underline bg-dilred text-white pt-1 h-8 px-4 ml-auto  "
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-y-hidden text-justify mb-5 ">
              This 2nd Edition features the internationally influential God’s Debris (2001) and its sequel, The Religion War (2004), plus a short story entitled Lucky House that is set in 2120 after the AI War.. <br /> Nothing about this book is normal.

              The author is a trained hypnotist, and the book is written to create an experience you don’t normally get from words on a page. You will feel the effect most profoundly before the end of the first novel, God’s Debris, and in the short story Lucky House.<br />
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>
        <div className="flex bg-neutral-200 w-full h-80 shrink-0 ">
          <img
            className="h-5/6 p- mx-6 my-auto"
            src="/books/reframe.jpg"
            alt=""
          />
          <div className="flex flex-col m-4 pr-6">
            <div className="flex py-4 text-xl">
              <h2 className="font-bold ">
                Reframe Your Brain{" "}
                <span className="font-normal text-neutral-500 ">(2023)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/0V0JTMe"
                className="font-light  hover:underline bg-dilred text-white pt-1 px-4 ml-auto"
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-hidden text-justify mb-5 ">
              Are you familiar with this old saying? “All publicity is good
              publicity.” That’s a classic reframe. The quote shifts your thinking
              from the shame of whatever you did wrong to your probable benefit.
              You can’t change the past, but you can change how you feel about it.{" "}
              <br />
              Trained hypnotist and persuasion expert Scott Adams has packed more
              than 160 new, counterintuitive, and effective reframes into Reframe
              Your Brain.
              <br />{" "}
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>
        <div className="flex bg-neutral-200 w-full h-80 shrink-0 ">
          <img
            className=" h-5/6 p- mx-6 my-auto"
            src="/books/loserthink.jpg"
            alt=""
          />
          <div className="flex flex-col m-4 pr-6">
            {" "}
            <div className="flex py-4 text-xl">
              <h2 className="font-bold ">
                Loserthink
                <span className="font-normal text-neutral-500 "> (2019)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/00ERzIbb"
                className="font-light  hover:underline bg-dilred text-white pt-1 px-4 ml-auto"
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-hidden text-justify mb-5 ">
              From the creator of Dilbert and author of Win Bigly, a guide to
              spotting and avoiding loserthink: sneaky mental habits trapping
              victims in their own bubbles of reality. <br /> If you've been on
              social media lately, or turned on your TV, you may have noticed a
              lot of dumb ideas floating around. "We know when history will repeat
              and when it won't." "We can tell the difference between evidence and
              coincidences." <br />{" "}
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>
        <div className="flex bg-neutral-200 w-full h-80 shrink-0 ">
          <img className=" h-5/6 p- mx-6 my-auto" src="/books/win.jpg" alt="" />
          <div className="flex flex-col m-4 pr-6">
            {" "}
            <div className="flex py-4 text-xl">
              <h2 className="font-bold ">
                Win Bigly
                <span className="font-normal text-neutral-500 "> (2018)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/002DExiY"
                className="font-light  hover:underline bg-dilred text-white pt-1 px-4 ml-auto"
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-y-hidden text-justify mb-5 ">
              The New York Times bestseller that explains one of the most
              important perceptual shifts in the history of humankind Scott Adams
              was one of the earliest public figures to predict Donald Trump’s
              election.
              <br /> The mainstream media regarded Trump as a lucky clown, but
              Adams – best known as “the guy who created Dilbert” -- recognized a
              level of persuasion you only see once in a generation. <br />{" "}
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>
        <div className="flex bg-neutral-200 w-full h-80 shrink-0 ">
          <img
            className=" h-5/6 p- mx-6 my-auto"
            src="/books/winbig2.jpg"
            alt=""
          />
          <div className="flex flex-col m-4 pr-6">
            {" "}
            <div className="flex py-4 text-xl">
              <h2 className="font-bold ">
                How to ... Still Win Big
                <span className="font-normal text-neutral-500 "> (2013)</span>
              </h2>
              <Link
                to="https://amzn.eu/d/huu7m3Z"
                className="font-light  hover:underline bg-dilred text-white pt-1 h-8 px-4 ml-auto  "
                target="_blank"
                rel="noopener norefferrer"
              >
                buy
              </Link>
            </div>
            <p className="overflow-y-hidden text-justify mb-5 ">
              Dilbert creator Scott Adams' funny memoir about his many failures
              and what they eventually taught him about success 'Adams has a
              funny, refreshingly considered set of ideas about how to find
              success-and what that success will look like when one gets there'
              Kirkus Reviews. <br /> Scott Adams has probably failed at more
              things than anyone you've ever met. So how did he go from hapless
              office worker and serial failure to the creator of Dilbert, one of
              the world's most famous comic strips, in just a few years? <br />
              <button
                onClick={() =>
                  alert(
                    "This button will show the full cover text.",
                  )
                }
                className="underline"
              >
                {" "}
                show more...
              </button>
            </p>
          </div>
        </div>

      </main>
    </>
  );
}
