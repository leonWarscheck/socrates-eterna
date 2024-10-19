import { MetaFunction, useLoaderData, Link, useLocation } from "@remix-run/react"; 
import { useEffect, useRef } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "About | Socrates Eterna" },
  ];
};


export default function About() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 11);
  }, []);

  return (
    <>
      <main id="screen-lg" className=" hidden dlg:block">

        <section
          id="0-about-top"
          className="relative h-screen flex flex-col  bg-gradient-to-b from-purple-1000 to-purple-900 snap-start snap-always"
        >
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-14 bg- gradient-to-b from-purple-1000 to-purple-900 h-52 z-  rounded-xl">
            <div className="ml-auto font-ligh flex flex-col items-center my-auto ">
              <h1 className="text-purple-200 pl-2 -mt-4 font-bold 
              mb-6 pt-14 text-xl tiny:text-3xl text-center ">
                ABOUT <span className="border- 2 border-purple-200 rounded-lg text-purple-200 ml- 0.5 px- 3 py-1.5  font-socrates">ERIK HOLM</span>
              </h1>
              <p className="text-xl animate-pulse text-purple-400">scroll to read...</p>
            </div>
            <img
              className="  w-1/2  mr-auto "
              src="/about/author2.jpg"
              alt=""
            />
          </div>
        </section>

        <section id="1-early-years"
          className="relative h-screen flex flex-col bg-gradient-to-b from-purple-1000 to-purple-900 snap-start snap-always">
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-12 bg -gradient-to-b from-purple-1000 to-purple-900 h-52 z- rounded-xl">
            <div className=" flex flex-col gap-4 w-5/12  ml-auto ">
              <div className="flex gap-4 ">
                <img className="size-1/3 my-auto" src="/about/home2.jpg" alt="" />
                <img className="w-2/3" src="/about/family2.jpg" alt="" />
              </div>
              <img className="w-2/3 mx-auto" src="/about/valedictorian.jpg" alt="" />
            </div>
            <div className="mr-auto  flex flex-col items-cente text-center my-auto ">
              <h2 className=" text-2xl font-bold pb-4 ">
                1. Early Years
              </h2>
              <p className="text-md max-w-80 text-pretty">
                {" "}
                Born 7/3/89, Erik grew up in Blåwand, Denmark.
                He is the last child with two siblings, the son of a an engineer and a herbalist.
                In high school, he graduated as valedictorian.
              </p>
              <div className="flex gap-3 text-xl pt- pb-"></div>
            </div>
          </div>
        </section>


        <section id="2-school"
          className="relative h-screen flex flex-col  bg-gradient-to-b from-purple-1000 to-purple-900 snap-start snap-always">
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-10 bg -gradient-to-b from-purple-1000 to-purple-900 h-52 z- rounded-xl">
            <div className="ml-auto  flex flex-col items-cente text-center my-auto ">
              <h2 className=" text-2xl font-bold pb-4 ">2. School</h2>
              <p className="text-md max-w-80">
                After completing his BA in Psychology at the University of Copenhagen, he went on to earn an MBA from Saïd Business School at the University of Oxford.
              </p>
            </div>
            <div className=" flex flex-col gap-4 w-5/12  mr-auto ">
              <div className="flex gap-4 ">
                <img className="w-56 h-full my-auto" src="/about/oxford.jpg" alt="" />
                <img className="w-44 h-36 my-auto object-cover " src="/about/kopenhagen2c.jpg" alt="" />
              </div>
              <img className="w-2/3 mx-auto" src="/about/kopenhagen.jpg" alt="" />
            </div>
          </div>
        </section>


        <section id="3-pre-socrates"
          className="relative h-screen flex flex-col  bg-purple- 950 snap-start snap-always bg-gradient-to-b from-purple-1000 to-purple-900 ">
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-10 bg -gradient-to-b from-purple-1000 to-purple-900 h-52 z- rounded-xl">
            <div className=" flex flex-col  w-6/12  ml-auto ">
              <div className="flex gap-4 ">

                {/* <img
                  className="size-1/3 overflow-hidden my-auto"
                  src="/about/bankteller2.jpg"
                  alt=""
                /> */}
                <img
                  className="w-full my-auto object-cover"
                  src="/about/clipboard.jpg"
                  alt=""
                />
              </div>
              {/* <img
                className="size-2/3 mx-auto"
                src="/about/telecom2.jpg"
                alt=""
              /> */}
            </div>
            <div className="mr-auto  flex flex-col w-5/12  text-center my-auto ">
              <h2 className=" text-2xl font-bold pb-4 ">
                3. Pre 'Socrates Eterna' Career
              </h2>
              <p className="text-">
                He spent eight years at Henne Bank as a teller, management trainee, systems analyst, and budget supervisor. After that, he worked for eight years at Eurotel Telecommunications, focusing on financial analysis and behavioral customer research.
              </p>
              <div className="flex gap-3 text-xl pt- pb-"></div>
            </div>
          </div>
        </section>



        <section id="4-socrates-1"
          className="relative h-screen flex flex-col   snap-start snap-always bg-gradient-to-b from-purple-1000 to-purple-900">
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-14 bg -gradient-to-b from-purple-1000 to-purple-950 h-52 z- rounded-xl">
            <div className="ml-auto  flex flex-col text-center text-pretty my-auto ">
              <h2 className=" text-2xl font-bold pb-4 ">4. Socrates Eterna</h2>
              <p className="text-md max-w-80">
                Socrates Eterna launched in 2008 in select EU countries and is now available in 30 countries worldwide. Erikholm.com was one of the first ever comic subscription websites. In 2012, Erik won the Aurelius Prize.
              </p>
            </div>
            <div className=" flex flex-col gap-4 w-5/12  mr-auto ">
              <div className="flex gap-4 ">
                <img className="size-1/2" src="/about/award.jpg" alt="" />
                <img className="size-1/3 my-auto " src="/about/magazine.jpg" alt="" />
              </div>
              <img className="size-1/2 mx-auto" src="/about/site.jpg" alt="" />
            </div>
          </div>
        </section>


        <section id="5-socrates-2"
          className="relative h-screen flex flex-col  bg-purple- 950 snap-start snap-always bg-gradient-to-b from-purple-1000 to-purple-900 ">
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-14 bg -gradient-to-b from-purple-1000 to-purple-950 h-52 z- rounded-xl">
            <div className=" flex flex-col gap-4 w-5/12  ml-auto ">
              <div className="flex gap-4 ">
                <img className="size-1/2 " src="/books/tools.jpg" alt="" />
                <img className="size-1/2 " src="/books/secret.jpg" alt="" />
              </div>
            </div>
            <div className="mr-auto  flex flex-col text-center text-pretty my-auto ">
              <h2 className=" text-2xl font-bold pb-4 ">
                5. Socrates Bestsellers
              </h2>
              <p className="text-md max-w-80">
                From 2012 onwards Erik Holm wrote multiple International #1 Bestsellers, including "The Socratic Method: Tools for the Modern Age (Le Monde)", and "Plato’s Secret Notes: Hidden Lessons from the Academy (Der Spiegel)".

                <br />
              </p>
              <div className="flex gap-3 text-xl pt- pb-"></div>
            </div>
          </div>
        </section>


        <section id="follow"
          className="relative h-screen flex flex-col  snap-start snap-always bg-gradient-to-b from-purple-1000 to-purple-900">
          <div className="mx-4 my-auto">
            <div className=" animate-border-pulse border-y-2 flex items-center max-w-7xl w-full my-auto mx-auto gap-14 bg -gradient-to-b from-purple-950 to-purple-900 h-52 z- rounded- xl">
              <div className="mx-auto justify-center flex flex-col items-center my-auto ">
                <h2 className="text-4xl font-bold pb-4 drop-shadow-2xl">Follow Erik</h2>
                <div className="flex gap-3 items-center  text-xl pt- pb-  ">
                  <Link
                    className="hover:underline"
                    to="https://www.x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X.com
                  </Link>
                  <Link
                    className="hover:underline"
                    to="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Link>
                  <Link
                    className="hover:underline"
                    to="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </div>
                <div className="flex gap-3 text-xl pt-1 pb-">
                  <Link
                    className="hover:underline"
                    to="https://patreon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Patreon
                  </Link>
                  <Link
                    className="hover:underline"
                    to="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}


