import { MetaFunction, Link } from "@remix-run/react";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "About | Socrates Eterna" }];
};

export default function About() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 11);
  // }, []);

  return (
    <>
      <main id="screen-lg" className=" ">
        <section
          id="0-about-top"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div className="bg- gradient-to-b z- mx-auto my-auto flex h-52 max-w-4xl items-center gap-14 rounded-xl from-purple-1000 to-purple-900">
            <div className="font-ligh my-auto ml-auto flex flex-col items-center">
              <h1 className="-mt-4 mb-6 pl-2 pt-14 text-center text-xl font-bold text-purple-200 tiny:text-3xl">
                ABOUT{" "}
                <span className="border- 2 ml- 0.5 px- 3 rounded-lg border-purple-200 py-1.5 font-socrates text-purple-200">
                  ERIK HOLM
                </span>
              </h1>
              <p className="animate-pulse text-xl text-purple-400">
                scroll to read...
              </p>
            </div>
            <img className="mr-auto w-1/2" src="/about/author2.jpg" alt="" />
          </div>
        </section>

        <section
          id="1-early-years"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div className="bg -gradient-to-b z- mx-auto my-auto flex h-52 max-w-4xl items-center gap-12 rounded-xl from-purple-1000 to-purple-900">
            <div className="ml-auto flex w-5/12 flex-col gap-4">
              <div className="flex gap-4">
                <img
                  className="my-auto size-1/3"
                  src="/about/home2.jpg"
                  alt=""
                />
                <img className="w-2/3" src="/about/family2.jpg" alt="" />
              </div>
              <img
                className="mx-auto w-2/3"
                src="/about/valedictorian.jpg"
                alt=""
              />
            </div>
            <div className="items-cente my-auto mr-auto flex flex-col text-center">
              <h2 className="pb-4 text-2xl font-bold">1. Early Years</h2>
              <p className="text-md max-w-80 text-pretty">
                {" "}
                Born 7/3/89, Erik grew up in Blåwand, Denmark. He is the last
                child with two siblings, the son of a an engineer and a
                herbalist. In high school, he graduated as valedictorian.
              </p>
              <div className="pt- pb- flex gap-3 text-xl"></div>
            </div>
          </div>
        </section>

        <section
          id="2-school"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div className="mx-auto my-auto flex max-w-4xl flex-col items-center px-4 md2:h-52 md2:flex-row md2:gap-10">
            <div className="items-cente my-auto mb-10 flex flex-col text-center md2:ml-auto">
              <h2 className="pb-4 text-2xl font-bold">2. School</h2>
              <p className="text-md max-w-80">
                After completing his BA in Psychology at the University of
                Copenhagen, he went on to earn an MBA from Saïd Business School
                at the University of Oxford.
              </p>
            </div>
            <div className="mx-auto space-y-4">
              <div className="flex space-x-4">
                <div className="my-auto aspect-video max-h-32">
                  <img
                    className="h-full w-full object-cover"
                    src="/about/oxford.jpg"
                  />
                </div>
                <div className="aspect-square max-h-36">
                  <img
                    className="h-full w-full object-cover"
                    src="/about/kopenhagen2c.jpg"
                  />
                </div>
              </div>
              <div className="mx-auto aspect-video max-h-36">
                <img
                  className="h-full w-full object-cover"
                  src="/about/kopenhagen.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="3-pre-socrates"
          className="bg-purple- 950 relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div className="mx-auto my-auto flex max-w-4xl flex-col items-center px-4 md2:h-52 md2:flex-row md2:gap-10">
            <div className="mx-auto mb-10 md2:ml-auto">
              <div className="mx-auto aspect-video max-h-56">
                <img
                  className="h-full w-full object-cover"
                  src="/about/clipboard.jpg"
                />
              </div>
            </div>
            <div className="my-auto flex flex-col text-center md2:mr-auto md2:w-5/12">
              <h2 className="pb-4 text-2xl font-bold">
                3. Pre 'Socrates Eterna' Career
              </h2>
              <p className="text- max-w-96">
                He spent eight years at Henne Bank as a teller, management
                trainee, systems analyst, and budget supervisor. After that, he
                worked for eight years at Eurotel Telecommunications, focusing
                on financial analysis and behavioral customer research.
              </p>
              <div className="pt- pb- flex gap-3 text-xl"></div>
            </div>
          </div>
        </section>

        <section
          id="4-socrates-1"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div className="bg -gradient-to-b z- mx-auto my-auto flex h-52 max-w-4xl items-center gap-14 rounded-xl from-purple-1000 to-purple-950">
            <div className="my-auto ml-auto flex flex-col text-pretty text-center">
              <h2 className="pb-4 text-2xl font-bold">4. Socrates Eterna</h2>
              <p className="text-md max-w-80">
                Socrates Eterna launched in 2008 in select EU countries and is
                now available in 30 countries worldwide. Erikholm.com was one of
                the first ever comic subscription websites. In 2012, Erik won
                the Aurelius Prize.
              </p>
            </div>
            <div className="mr-auto flex w-5/12 flex-col gap-4">
              <div className="flex gap-4">
                <img className="size-1/2" src="/about/award.jpg" alt="" />
                <img
                  className="my-auto size-1/3"
                  src="/about/magazine.jpg"
                  alt=""
                />
              </div>
              <img className="mx-auto size-1/2" src="/about/site.jpg" alt="" />
            </div>
          </div>
        </section>

        <section
          id="5-socrates-2"
          className="bg-purple- 950 relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div className="bg -gradient-to-b z- mx-auto my-auto flex h-52 max-w-4xl items-center gap-14 rounded-xl from-purple-1000 to-purple-950">
            <div className="ml-auto flex w-5/12 flex-col gap-4">
              <div className="flex gap-4">
                <img className="size-1/2" src="/books/tools.jpg" alt="" />
                <img className="size-1/2" src="/books/secret.jpg" alt="" />
              </div>
            </div>
            <div className="my-auto mr-auto flex flex-col text-pretty text-center">
              <h2 className="pb-4 text-2xl font-bold">
                5. Socrates Bestsellers
              </h2>
              <p className="text-md max-w-80">
                From 2012 onwards Erik Holm wrote multiple International #1
                Bestsellers, including "The Socratic Method: Tools for the
                Modern Age (Le Monde)", and "Plato’s Secret Notes: Hidden
                Lessons from the Academy (Der Spiegel)".
                <br />
              </p>
              <div className="pt- pb- flex gap-3 text-xl"></div>
            </div>
          </div>
        </section>

        {/* <section id="follow"
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
        </section> */}
      </main>
    </>
  );
}
