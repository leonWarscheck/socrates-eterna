import { MetaFunction, useLoaderData, Link, useLocation } from "@remix-run/react";
import { useEffect, useRef } from "react";


export default function About() {
//  const location = useLocation();

 useEffect(() => {
    console.log("useEffect running");
    setTimeout(() => {
      window.scrollTo(0, 0);
      console.log("scrollTo ran");
    }, 11);
  }, []);

  // useEffect(() => {
  //   console.log("useEffect running");
  //     window.scrollTo(0, 0);
  //     return window.scrollTo(0, 0);
  // }, [location]);
  
  // useEffect(() => {
  //   console.log("useEffect running");
  //   const handleScroll = () => {
  //     window.scrollTo(0, 0);
  //     console.log("scrollTo ran");
  //   };
  //   requestAnimationFrame(handleScroll);
  // }, []);

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
                ABOUT <span className="border-2 border-dilred ml-0.5 px-2 p-1 pt-4">SCOTT ADAMS</span>
              </h1>
            </div>
            <img
              className=" mr-aut
              w-full "
              src="/portraits/scottPortrait.webp"
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
                The chapters on this About page are mockups to demo the design
                concept. If you like it, I will finish the whole journey, also
                with real pictures. Maybe we can also finetune the page to make it
                even more obvious that you are a caring human and not a racist.
              </p>
            </div>
            <div className=" flex flex-col gap-4 p-4 pb-10 ">
              <div className="flex gap-4 ">
                <img
                  className="w-1/3 mt-2.5 object-cover"
                  src="/characters/dogbert-0a98df7d560fe35a4654715f65948b79.jpg"
                  alt=""
                />
                <img
                  className="w-2/3  object-cover overflow-hidden"
                  src="/portraits/Scott-Adams.webp"
                  alt=""
                />
              </div>
              <img
                className="size-2/3 mx-auto object-cover"
                src="/portraits/dilbert-c-17dec98-dd-mac-scott-adams-the-creator-of-dilbert-the-comic-strip-has-a-new-project.webp"
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
                  to="https://www.twitter.com/@ScottAdams.com"
                >
                  X.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.instagram.com/ScottAdams925"
                >
                  Instagram
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.linkedin.com/in/scott-adams-52b1595a/"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="flex gap-3 text-xl pt-1 pb-">
                <Link
                  className="hover:underline"
                  to="https://www.scottadams.locals.com"
                >
                  Locals.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.youtube.com/RealCoffeeWithScottAdams"
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
          <div className="flex items-center my-auto mx-auto justify-center bg-neutral-200
          h-44 gap-8 max-w-2xl ">
            <div className="ml -auto text-neutral-500 -mr- 1 flex ml- 4 flex-col items-center my-auto ">
              <h1 className="text-dilred  -mt-6  font-bold 
              pb-4 pt-14 text-xl tiny:text-xl text-center">
                ABOUT <span className="border-2 border-dilred ml-0.5 px-2 p-1 pt-4">SCOTT ADAMS</span>
              </h1>
              <p className="  animate-pulse 
              text-lg ">scroll to read...</p>
            </div>
            <img
              className=" mr- auto
              w-1/2  "
              src="/portraits/scottPortrait.webp"
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
                  src="/characters/dogbert-0a98df7d560fe35a4654715f65948b79.jpg"
                  alt=""
                />
                <img
                  className="w-2/3  object-cover"
                  src="/portraits/Scott-Adams.webp"
                  alt=""
                />
              </div>
              <img
                className="size-2/3 mx-auto object-cover"
                src="/portraits/dilbert-c-17dec98-dd-mac-scott-adams-the-creator-of-dilbert-the-comic-strip-has-a-new-project.webp"
                alt=""
              />
            </div>
            <div className="mr-auto text-neutral-600 flex flex-col w-5/12  items-center my-auto ">
              <h2 className="text-dilred text-2xl font-bold pb-4 ">
                3. Mock Up Chapter
              </h2>
              <p className="text-xs">
                {" "}
                The chapters on this About page are mockups to demo the design
                concept. If you like it, I will finish the whole journey, also
                with real pictures. Maybe we can also finetune the page to make it
                even more obvious that you are a caring human and not a racist.
              </p>
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
                  to="https://www.twitter.com/@ScottAdams.com"
                >
                  X.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.instagram.com/ScottAdams925"
                >
                  Instagram
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.linkedin.com/in/scott-adams-52b1595a/"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="flex gap-3 text-xl pt-1 pb-">
                <Link
                  className="hover:underline"
                  to="https://www.scottadams.locals.com"
                >
                  Locals.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.youtube.com/RealCoffeeWithScottAdams"
                >
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>




      <main id="lg" className=" hidden dlg:block">

        <section
          id="0-about-top"
          className="relative h-screen flex flex-col  bg-neutral-10 snap-start snap-always"
        >
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-9 bg-neutral-200 h-52 z- ">
            <div className="ml-auto text-neutral-500 font-ligh flex flex-col items-center my-auto ">
            <h1 className="text-dilred pl-2 -mt-4 font-bold 
              mb-6 pt-14 text-xl tiny:text-3xl text-center ">
                ABOUT <span className="border-2 border-dilred text-dilred ml-0.5 px-2 p-1 pt-4">SCOTT ADAMS</span>
              </h1>
              <p className="text-xl animate-pulse">scroll to read...</p>
            </div>
            <img
              className="  w-1/2  mr-auto "
              src="/portraits/scottPortrait.webp"
              alt=""
            />
          </div>
        </section>

        <section id="1-early-years"
          className="relative h-screen flex flex-col  bg-neutral-100 snap-start snap-always">
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-14 bg-neutral-300 h-52 z- ">
            <div className=" flex flex-col gap-4 w-5/12  ml-auto ">
              <div className="flex gap-4 ">
                <img className="w-1/3" src="/about/catskill.jpg" alt="" />
                <img className="w-2/3" src="/about/family.jpg" alt="" />
              </div>
              <img className="w-2/3 mx-auto" src="/about/vale.png" alt="" />
            </div>
            <div className="mr-auto text-neutral-600 flex flex-col items-center my-auto ">
              <h2 className="text-dilred text-2xl font-bold pb-4 ">
                1. Early Years
              </h2>
              <p className="text-md">
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
              <div className="flex gap-3 text-xl pt- pb-"></div>
            </div>
          </div>
        </section>


        <section id="2-school"
          className="relative h-screen flex flex-col  bg-neutral-10 snap-start snap-always">
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-14 bg-neutral-300 h-52 z- ">
            <div className="ml-auto text-neutral-600 flex flex-col items-center my-auto ">
              <h2 className="text-dilred text-2xl font-bold pb-4 ">2. School</h2>
              <p className="text-md">
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
          <div className="flex items-center max-w-4xl my-auto mx-auto gap-14 bg-neutral-300 h-52 z- ">
            <div className=" flex flex-col gap-4 w-5/12  ml-auto ">
              <div className="flex gap-4 ">
                <img
                  className="size-1/3 mt-8"
                  src="/characters/dogbert-0a98df7d560fe35a4654715f65948b79.jpg"
                  alt=""
                />
                <img
                  className="h-2/3 overflow-hidden"
                  src="/portraits/Scott-Adams.webp"
                  alt=""
                />
              </div>
              <img
                className="size-2/3 mx-auto"
                src="/portraits/dilbert-c-17dec98-dd-mac-scott-adams-the-creator-of-dilbert-the-comic-strip-has-a-new-project.webp"
                alt=""
              />
            </div>
            <div className="mr-auto text-neutral-600 flex flex-col w-5/12  items-center my-auto ">
              <h2 className="text-dilred text-2xl font-bold pb-4 ">
                3. Mock Up Chapter
              </h2>
              <p className="text-sm">
                {" "}
                The chapters on this About page are mockups to demo the design
                concept. If you like it, I will finish the whole journey, also
                with real pictures. Maybe we can also finetune the page to make it
                even more obvious that you are a caring human and not a racist.
              </p>
              <div className="flex gap-3 text-xl pt- pb-"></div>
            </div>
          </div>
        </section>


        <section id="follow"
          className="relative h-screen flex flex-col  bg-neutral-10 snap-start snap-always">
          <div className="flex items-center max-w-4xl w-full my-auto mx-auto gap-14 bg-dilred h-52 z- ">
            <div className="mx-auto text-neutral-50 flex flex-col items-center my-auto ">
              <h2 className="text-white text-4xl font-bold pb-4 ">Follow</h2>
              <div className="flex gap-3 items-center  text-xl pt- pb-  ">
                <Link
                  className="hover:underline"
                  to="https://www.x.com"
                target="_blank"
                rel="noopener norefferrer"
                >
                  X.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.instagram.com"
                target="_blank"
                rel="noopener norefferrer"
                >
                  Instagram
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.linkedin.com"
                target="_blank"
                rel="noopener norefferrer"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="flex gap-3 text-xl pt-1 pb-">
                <Link
                  className="hover:underline"
                  to="https://patreon.com"
                target="_blank"
                rel="noopener norefferrer"
                >
                Patreon
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.youtube.com/"
                target="_blank"
                rel="noopener norefferrer"
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
