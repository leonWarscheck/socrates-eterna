import { MetaFunction, useLoaderData, Link, useLocation } from "@remix-run/react";
import { useEffect, useRef } from "react";


export default function About() {


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 11);
  }, []);



  return (
    <>
      <main id="sm-portrait" className="dmd:hidden">

        <section
          id="0-about-top"
          className="relative h-screen flex flex-col snap-start snap-always"
        >
          <div className="flex flex-col items-center my-auto mx-aut bg-neutral-200
           gap-10 mx-4 ">
            <div className="w-full  flex flex-col items-center my-auto ">
              <h1 className="text-dilred  font-bold 
              pb-4 pt-14 text-xl small:text-3xl text-center">
                ABOUT <span className="border-2 border-dilred ml-0.5 px-2 p-1 pt-4"></span>
              </h1>
            </div>
            <img
              className=" mr-aut
              w-full "
              src="/portraits/Portrait.webp"
              alt=""
            />
            <p className="  animate-pulse text-neutral-500 pb-10  
              text-lg ">scroll to read...</p>

          </div>
        </section>

        <section id="1-early-years"
          className="relative h-screen flex flex-col  bg-neutral-100 snap-start snap-always">
          <div className="flex flex-col items-center  my-auto  bg-neutral-300  gap-4 mx-4">
            <div className="text-neutral-600 flex flex-col items-center my-auto pt-14 px-4">
              <h2 className="text-dilred text-2xl font-bold pb-4 ">
                1. Early Years
              </h2>
              <p className="text-sm">
                {" "}
                - Born 6/8/57
                <br />
                - Grew up in Windham NY, in the Catskill Mountains
                <br />
                - Middle child with two siblings
                <br />
                - Son of a postal clerk and a real estate agent
                <br />- High school Valedictorian
              </p>
            </div>
            <div className=" flex flex-col gap-3 w-full pt-6 p-4 pb-10">
              <div className="flex gap-3 ">
                <img className="w-1/3 object-cover" src="/about/catskill.jpg" alt="" />
                <img className="w-2/3 object-cover overflow-hidden" src="/about/family.jpg" alt="" />
              </div>
              <img className="w-2/3 object-cover mx-auto" src="/about/vale.png" alt="" />
            </div>

          </div>
        </section>


        <section id="2-school"
          className="relative h-screen flex flex-col  bg-neutral-10 snap-start snap-always">
          <div className="flex flex-col items-center  my-auto  gap-6 bg-neutral-300  mx-4 ">
            <div className="text-neutral-600 flex flex-col items-center my-auto pt-14 px-4">
              <h2 className="text-dilred text-2xl font-bold pb-3 ">2. School</h2>
              <p className="text-sm">
                - BA in Economics, Hartwick College
                <br />- MBA, Haas School of Business, <br /> &nbsp;
                &nbsp;University of California at Berkeley
              </p>
            </div>
            <div className=" flex flex-col gap-4 w-full p-4 pb-10">
              <div className="flex gap-4 ">
                <img className="w-3/5 object-cover" src="/about/berkeley.webp" alt="" />
                <img className="w-1/3 my-auto object-cover " src="/about/uc.webp" alt="" />
              </div>
              <img className="w-2/3 mx-auto" src="/about/hartwick.jpg" alt="" />
            </div>
          </div>
        </section>


        <section id="3-mockup"
          className="relative h-screen flex flex-col  bg-neutral-100 snap-start snap-always">
          <div className="flex flex-col items-center  my-auto mx-4 gap-6 bg-neutral-300  ">

            <div className="text-neutral-600 flex flex-col px-4 pt-14  items-center my-auto ">
              <h2 className="text-dilred text-2xl font-bold pb-4 ">
                3. Mock Up Chapter
              </h2>
              <p className="text-sm">
                {" "}
               
              </p>
            </div>
            <div className=" flex flex-col gap-4 p-4 pb-10 ">
              <div className="flex gap-4 ">
                <img
                  className="w-1/3 mt-2.5 object-cover"
                  src="/characters/dog.jpg"
                  alt=""
                />
                <img
                  className="w-2/3  object-cover overflow-hidden"
                  src="/portraits/.webp"
                  alt=""
                />
              </div>
              <img
                className="size-2/3 mx-auto object-cover"
                src="/portraits/.webp"
                alt=""
              />
            </div>
          </div>
        </section>


        <section id="follow"
          className="relative h-screen flex flex-col  bg-neutral-10 snap-start snap-always">
          <div className="flex items-center  my-auto mx-4  bg-dilred h-52 ">
            <div className="mx-auto text-neutral-50 flex flex-col items-center my-auto ">
              <h2 className="text-white text-4xl font-bold pb-4 ">Follow</h2>
              <div className="flex gap-3 items-center  text-xl pt- pb-  ">
                <Link
                  className="hover:underline"
                  to="https://www.twitter.com/@.com"
                >
                  X.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.instagram.com/"
                >
                  Instagram
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.linkedin.com/in/"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="flex gap-3 text-xl pt-1 pb-">
                <Link
                  className="hover:underline"
                  to="https://www..com"
                >
                  Locals.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.youtube.com/"
                >
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>





      <main id="md" className=" hidden dmd:block dlg:hidden">

        <section
          id="0-about-top"
          className="relative h-screen flex flex-col snap-start snap-always"
        >
          <div className="flex items-center my-auto mx-auto justify-center bg-purple-700
          h-44 gap-8 max-w-2xl ">
            <div className="ml -auto text-neutral-500 -mr- 1 flex ml- 4 flex-col items-center my-auto ">
              <h1 className="text-dilred  -mt-6  font-bold 
              pb-4 pt-14 text-xl tiny:text-xl text-center">
                ABOUT <span className="border-2 border-dilred ml-0.5 px-2 p-1 pt-4">Erik Holm</span>
              </h1>
              <p className="  animate-pulse 
              text-lg ">scroll to read...</p>
            </div>
            <img
              className=" mr- auto
              w-1/2  "
              src="/portraits/.webp"
              alt=""
            />
          </div>
        </section>

        <section id="1-early-years"
          className="relative h-screen flex flex-col  bg-neutral-100 snap-start snap-always">
          <div className="flex items-center  my-auto mx-auto  bg-neutral-300 h-44 gap-8 max-w-2xl">
            <div className=" flex flex-col gap-3 w-5/12  ml-auto pt-6">
              <div className="flex gap-3 ">
                <img className="w-1/3 object-cover" src="/about/catskill.jpg" alt="" />
                <img className="w-2/3 object-cover" src="/about/family.jpg" alt="" />
              </div>
              <img className="w-2/3 object-cover mx-auto" src="/about/vale.png" alt="" />
            </div>
            <div className="mr-auto text-neutral-600 flex flex-col items-center my-auto ">
              <h2 className="text-dilred text-2xl font-bold pb-2 ">
                1. Early Years
              </h2>
              <p className="text-sm">
                {" "}
                - Born 6/8/57
                <br />
                - Grew up in Windham NY, in the Catskill Mountains
                <br />
                - Middle child with two siblings
                <br />
                - Son of a postal clerk and a real estate agent
                <br />- High school Valedictorian
              </p>
            </div>
          </div>
        </section>


        <section id="2-school"
          className="relative h-screen flex flex-col  bg-neutral-10 snap-start snap-always">
          <div className="flex items-center max-w-2xl my-auto mx-auto gap-14 bg-neutral-300 h-52 z- ">
            <div className="ml-auto text-neutral-600 flex flex-col items-center my-auto ">
              <h2 className="text-dilred text-2xl font-bold pb-3 ">2. School</h2>
              <p className="text-sm">
                - BA in Economics, Hartwick College
                <br />- MBA, Haas School of Business, <br /> &nbsp;
                &nbsp;University of California at Berkeley
              </p>
            </div>
            <div className=" flex flex-col gap-4 w-5/12  mr-auto ">
              <div className="flex gap-4 ">
                <img className="w-2/3" src="/about/berkeley.webp" alt="" />
                <img className="size-1/3 my-auto " src="/about/uc.webp" alt="" />
              </div>
              <img className="w-2/3 mx-auto" src="/about/hartwick.jpg" alt="" />
            </div>
          </div>
        </section>


        <section id="3-mockup"
          className="relative h-screen flex flex-col  bg-neutral-100 snap-start snap-always">
          <div className="flex items-center max-w-2xl my-auto mx-auto gap-10 bg-neutral-300 h-52 z- ">
            <div className=" flex flex-col gap-4 w-5/12  ml-auto ">
              <div className="flex gap-4 ">
                <img
                  className="size-1/3 mt-2.5 object-cover"
                  src="/characters/dog.jpg"
                  alt=""
                />
                <img
                  className="w-2/3  object-cover"
                  src="/portraits/.webp"
                  alt=""
                />
              </div>
              <img
                className="size-2/3 mx-auto object-cover"
                src="/portraits/.webp"
                alt=""
              />
            </div>
            <div className="mr-auto text-neutral-600 flex flex-col w-5/12  items-center my-auto ">
              <h2 className="text-dilred text-2xl font-bold pb-4 ">
                3. Mock Up Chapter
              </h2>
              <p className="text-xs"></p>
              <div className="flex gap-3 text-xl pt- pb-"></div>
            </div>
          </div>
        </section>


        <section id="follow"
          className="relative h-screen flex flex-col  bg-neutral-10 snap-start snap-always">
          <div className="flex items-center max-w-2xl w-full my-auto mx-auto gap-14 bg-dilred h-52 z- ">
            <div className="mx-auto text-neutral-50 flex flex-col items-center my-auto ">
              <h2 className="text-white text-4xl font-bold pb-4 ">Follow</h2>
              <div className="flex gap-3 items-center  text-xl pt- pb-  ">
                <Link
                  className="hover:underline"
                  to="https://www.twitter.com/@.com"
                >
                  X.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.instagram.com/"
                >
                  Instagram
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.linkedin.com/in/"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="flex gap-3 text-xl pt-1 pb-">
                <Link
                  className="hover:underline"
                  to="https://www..com"
                >
                  Locals.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.youtube.com/"
                >
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>




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
          <div className=" pulse-border border-y-2 flex items-center max-w-7xl w-full my-auto mx-auto gap-14 bg -gradient-to-b from-purple-950 to-purple-900 h-52 z- rounded- xl">
            <div className="mx-auto flex flex-col items-center my-auto ">
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
        </section>

      </main>
    </>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "About | Socrates Eterna" },
  ];
};
