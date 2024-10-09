import { Link, useSearchParams, MetaFunction } from "@remix-run/react";
import { useEffect } from "react";
import { showHeader } from "~/utils/scrollHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Books | Socrates Eterna" },
    // { name: "Uncensored and Spiciere Than Ever!", content: "Find Out What Happened to Dilbert!", 'og:image': "/favicon.ico",  },
  ];
};

export default function Books() {
  // useEffect(() => showHeader());


  return (
    <>
      <main id="sm" className="  max-w-4xl w-full mx-auto dmd:hidden flex flex-col h-scree grow mt-24 gap-10 px-4 mb-20 min-h-dvh overflow-y-scrol">
        {/* <div
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
        </div> */}



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

              By popular demand, the Socrates Eterna calendar is back, and this time, it has been created entirely in Athens.

              Better yet, this edition is printed on two sides, for twice the comics!
              Whaaaaat???
              <br />
              <br /><span className="font-bold">
                Front of page:</span> Socrates Eterna comics as always.

              <br /><span className="font-bold">
                Back of page:</span> Socrates Pantheon (advanced concept comics).
              <br />
              <br />
              Socrates Pantheon comics have been created more recently, often featuring mind shattering self reflections that might agitate the people around you. But who knows, sometimes the right person meets the right message!

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
                to="https://www.amazon.com"
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





      <main id="md-lg" className=" hidden w-full dmd:flex flex-col grow mt-16   bg-gradient-to-b from-purple-1000 to-purple-900">





        <div className="bg-purple-800 max-w- 7xl mx-auto w-full mb-8">
          <div id="calendar" className=" relative flex bg-purple- 900 w-full h- 80 shrink-0 rounded-xl max-w-4xl mx-auto pt-10 pb-6">
            <img
              className=" h- 80 size-1/6 ml-10 mr-8 p- mx- 6 my-auto object-cover"
              src="/books/calendar03.png"
              alt=""
            />
            {/* <p className="absolute bg-purple-950 text-purple-100 rounded-lg py-1 border-purple-100 font-bold text-sm top-16 left-4 border-2  px-2">Available Now!</p> */}


            <div className="flex flex-col mr-4 mt-4 pr-6 ml-6 mb-4">
              <div className="flex py-4 text-lg">
                <h2 className="font-bold text-2xl">
                  2025 Page-A-Day Calendar
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-purple-950  h-9 px-4 pt-px ml-auto border-2 border-white rounded-lg "
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  click to shop
                </Link>
              </div>
              <p className="overflow-hidden text-lg  text- justify hyphens-auto mb-5">
                <span className="font-bold">Available Now! </span>

                Back by popular demand, now featuring both <span className="font-semibol italic">Socrates Eterna and </span> <span className="font-semibol italic">Socrates Pantheon!</span>  2 comics each day, printed in Athens!
                <br />
                <br />
              </p>

            </div>
          </div>
        </div>
        {/* <div className="h-8 bg-purple-900 w-full"><div className="bg-purple-950 w-1/2 h-8"></div> <div></div></div> */}

        {/*ROW 1111111111111111111111111*/}

        <div className="flex max-w-7xl mx-auto my-8 gap-x-8">

          <div id="eterna" className=" relative flex bg-purple- 950 rounded-xl w-1/2  shrink- 0 ">

            <img
              className=" h-[300px] mx-6 mt-8 border-2 border-purple-100 "
              src="/books/eterna.jpg"
              alt=""
            />
            <p className="absolute bg-dilred rounded-lg font-bold text-base top-4 left-4 border-2  px-1">
              NEW
            </p>


            <div className="flex flex-col m-4 pr-2">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  Eterna: A Journey Beyond Time
                  <span className="font-normal text-purple-400 "> (2024)</span>
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-dilred rounded-lg pt-px h-8 px-4 ml-auto  "
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>



              <p className="flex h- 96 text-pretty  mb-5 ">
                Follow Socrates on a journey through history like never before. In Eterna: A Journey Beyond Time, the father of philosophy travels across centuries, confronting the great thinkers and ideologies that shaped each era.
                <br />
                From the rise of empires to the age of technology, Socrates questions the beliefs, values, and visions of the future, challenging humanity to reflect on its progress and pitfalls. Through his timeless lens, explore the evolution of thought and the eternal quest for truth.
              </p>


            </div>
          </div>



          <div id="modern-tools" className="flex bg-purple- 950 w-1/2  shrink- rounded-xl ">

            <img
              className=" h-[300px] ml-6 mr-6 mt-8 border-2 "
              src="/books/tools.jpg"
              alt=""
            />





            <div className="flex flex-col m-4 pr-2 ">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  The Socratic Method: Tools for the Modern Age
                  <span className="font-normal text-purple-400 "> (2019)</span>
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-dilred  h-8 pt-px px-4 ml-auto rounded-lg"
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>




              <p className="overflow- text-pretty justify mb-5 ">
                Unlock timeless wisdom for today's complex world. In The Socratic Method: Tools for the Modern Age, discover how the ancient art of questioning can sharpen your critical thinking, solve problems, and foster meaningful conversations.
                <br />
                This guide adapts Socrates' techniques to address modern challenges, empowering you to approach life's toughest questions with clarity and insight. It will equip you with powerful tools for deeper understanding and decision-making.
              </p>



            </div>
          </div>
        </div>




        <div className="flex max-w-7xl mx-auto my-8 gap-x-8">




          <div id="reason" className="flex bg-purple- 950 w-1/2 h- 96 shrink- rounded-xl max-w-4xl mx-auto">
            <img
              className="h-[300px] p- mx-6 mt-8 border-2 border-purple-100"
              src="/books/reason.jpg"
              alt=""
            />
            <div className="flex flex-col m-4 pr-2">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  Socrates and the Age of Reason{" "}
                  <span className="font-normal text-purple-400 ">(2016)</span>
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-dilred  h-8 pt-px px-4 ml-auto rounded-lg"
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>
              <p className="overflow-hidde text- justify mb-5 ">
                Journey back to the roots of Western philosophy in Socrates and the Age of Reason. This compelling exploration brings to life the wisdom of Socrates, the father of critical thinking, and his enduring influence on the modern age.
                <br />From his profound dialogues in ancient Athens to his timeless methods of inquiry, Socrates laid the foundation for rational thought and the pursuit of truth. In this book, discover how his teachings shaped the Age of Reason and continue to inspire thinkers, revolutionaries, and visionaries today.
                <br />{" "}

              </p>
            </div>
          </div>
          <div id="plato" className="flex bg-purple- 950 w-1/2   rounded-xl">


            <img
              className="h-[300px] mt-8 mx-6  border-2 border-purple-100"
              src="/books/secret.jpg"
              alt=""
            />


            <div className="flex flex-col m-4 pr-2">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  Plato’s Secret Notes {" "}
                  <span className="font-normal text-purple-400 ">(2012)</span>
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-dilred  h-8 pt-px px-4 ml-auto rounded-lg"
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>


              <p className="overflow-hidde  text-pretty justify mb-5 ">
                Journey back to the roots of Western philosophy in Socrates and the Age of Reason. This compelling exploration brings to life the wisdom of Socrates, the father of critical thinking, and his enduring influence on the modern age.

                <br />
                From his profound dialogues in ancient Athens to his timeless methods of inquiry, Socrates laid the foundation for rational thought and the pursuit of truth. In this book, discover how his teachings shaped the Age of Reason and continue to inspire thinkers, revolutionaries, and visionaries today.

                {" "}

              </p>


            </div>
          </div>
        </div>




      </main>
    </>
  );
}
