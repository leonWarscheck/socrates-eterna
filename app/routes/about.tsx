import { Link, MetaFunction } from "@remix-run/react";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "About | Socrates Eterna" }];
};

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 11);
  }, []);

  return (
    <>
      <main id="screen-lg">
        <section
          id="0-about-top"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div className="mx-auto my-auto flex max-w-4xl flex-col items-center px-4 pt-16 md2:h-52 md2:flex-row md2:gap-14 md2:pt-0 landscape1:pt-16 landscape2:flex-row landscape2:gap-8">
            <div className="my-auto flex flex-col items-center md2:ml-auto">
              <h1 className="-mt-4 mb-6 text-center text-3xl font-bold text-purple-200 md2:pl-2 md2:pt-4">
                ABOUT{" "}
                <span className="font-socrates text-purple-200">ERIK HOLM</span>
              </h1>
              <p className="hidden animate-pulse text-xl text-purple-400 md2:flex landscape2:flex">
                scroll to read...
              </p>
            </div>
            <div className="mx-auto aspect-video max-h-60">
              <img
                className="h-full w-full object-cover"
                src="/about/author2.jpg"
                alt="portrait of Erik Holm in his studio"
              />
            </div>
            <p className="mt-8 animate-pulse text-xl text-purple-400 md2:hidden landscape2:hidden">
              scroll to read...
            </p>
          </div>
        </section>

        <section
          id="1-early-years"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div
            id="1-container"
            className="mx-auto my-auto flex max-w-4xl flex-col items-center px-4 pt-16 md2:flex-row md2:gap-10 md2:pt-0 landscape1:pt-16 landscape2:flex-row landscape2:gap-8"
          >
            <div
              id="1-images"
              className="mx-auto mb-8 flex flex-col gap-4 md2:mx-0 md2:mb-0 md2:ml-auto md2:w-1/2"
            >
              <div id="1-image-row" className="flex space-x-4">
                <div className="my-auto aspect-square max-h-36 landscape1:max-h-28">
                  <img
                    className="h-full w-full object-cover"
                    src="/about/home2.jpg"
                    alt="Erik Holm in front of Oxford Uni"
                  />
                </div>
                <div className="aspect-video max-h-40 landscape1:max-h-32">
                  <img
                    className="h-full w-full object-cover"
                    src="/about/family2.jpg"
                    alt="Kopenhagen University"
                  />
                </div>
              </div>
              <div className="mx-auto aspect-video max-h-36 landscape1:max-h-28">
                <img
                  className="h-full w-full object-cover"
                  src="/about/valedictorian.jpg"
                  alt="Erik in front of Kopenhagen University"
                />
              </div>
            </div>
            <div
              id="text1"
              className="mx-auto flex flex-col text-center md2:mx-0 md2:mr-auto"
            >
              <h2 className="pb-4 text-2xl font-bold">1. Early Years</h2>
              <p className="text-md max-w-80 text-pretty">
                Born 7/3/89, Erik grew up in Blåwand, Denmark. He is the last
                child with two siblings, the son of a an engineer and a
                herbalist. In high school, he graduated as valedictorian.
              </p>
            </div>
          </div>
        </section>

        <section
          id="2-school"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div
            id="2-container"
            className="mx-auto my-auto flex max-w-4xl flex-col items-center px-4 pt-16 md2:flex-row md2:gap-10 md2:pt-0 landscape1:pt-16 landscape2:flex-row landscape2:gap-8"
          >
            <div
              id="2-text"
              className="mb-10 flex flex-col text-center md2:mb-0 md2:ml-auto"
            >
              <h2 className="pb-4 text-2xl font-bold">2. School</h2>
              <p className="text-md max-w-80">
                After completing his BA in Psychology at the University of
                Copenhagen, he went on to earn an MBA from Saïd Business School
                at the University of Oxford.
              </p>
            </div>
            <div
              id="2-images"
              className="mx-auto flex flex-col space-y-4 md2:mr-auto"
            >
              <div id="2-image-row" className="flex space-x-4">
                <div className="my-auto aspect-video max-h-32 landscape1:max-h-24">
                  <img
                    className="h-full w-full object-cover"
                    src="/about/oxford.jpg"
                    alt="Erik Holm in front of Oxford Uni"
                  />
                </div>
                <div className="aspect-square max-h-36 landscape1:max-h-28">
                  <img
                    className="h-full w-full object-cover"
                    src="/about/kopenhagen2c.jpg"
                    alt="Kopenhagen University"
                  />
                </div>
              </div>
              <div
                id="2-image-bottom"
                className="mx-auto aspect-video max-h-36 landscape1:max-h-28"
              >
                <img
                  className="h-full w-full object-cover"
                  src="/about/kopenhagen.jpg"
                  alt="Erik in front of Kopenhagen University"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="3-pre-socrates"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div
            id="3-container"
            className="mx-auto my-auto flex max-w-4xl flex-col items-center px-4 pt-16 md2:flex-row md2:gap-14 md2:pt-0 landscape1:pt-16 landscape2:flex-row landscape2:gap-8"
          >
            <div
              id="3-image"
              className="mx-auto mb-10 md2:mx-0 md2:mb-0 md2:ml-auto"
            >
              <div className="mx-auto aspect-video max-h-56">
                <img
                  className="h-full w-full object-cover"
                  src="/about/clipboard.jpg"
                  alt="Erik holding a clipboard with some sketches at his office job"
                />
              </div>
            </div>
            <div
              id="3-text"
              className="flex flex-col text-center md2:mr-auto md2:w-5/12"
            >
              <h2 className="pb-4 text-2xl font-bold">
                3. Pre 'Socrates Eterna' Career
              </h2>
              <p className="max-w-96">
                He spent eight years at Henne Bank as a teller, management
                trainee, systems analyst, and budget supervisor. After that, he
                worked for eight years at Eurotel Telecommunications, focusing
                on financial analysis and behavioral customer research.
              </p>
            </div>
          </div>
        </section>

        <section
          id="4-socrates-1"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div
            id="4-container"
            className="mx-auto my-auto flex max-w-4xl flex-col items-center px-4 pt-16 md2:flex-row md2:gap-10 md2:pt-0 landscape1:pt-16 landscape2:flex-row landscape2:gap-8"
          >
            <div
              id="4-text"
              className="mb-10 flex flex-col text-pretty text-center md2:mb-0 md2:ml-auto"
            >
              <h2 className="pb-4 text-2xl font-bold">4. Socrates Eterna</h2>
              <p className="text-md max-w-80">
                Socrates Eterna launched in 2008 in select EU countries and is
                now available in 30 countries worldwide. Erikholm.com was one of
                the first ever comic subscription websites. In 2012, Erik won
                the Aurelius Prize.
              </p>
            </div>
            <div
              id="4-images"
              className="mx-auto flex flex-col gap-4 md2:mr-auto"
            >
              <div id="1-image-row" className="flex space-x-4">
                <div className="my-auto aspect-square max-h-36 landscape1:max-h-28">
                  <img
                    className="h-full w-full object-cover"
                    src="/about/award.jpg"
                    alt="Erik at the Aurelius Prize ceremony"
                  />
                </div>
                <div className="aspect-[2/3] max-h-40 landscape1:max-h-32">
                  <img
                    className="h-full w-full object-cover"
                    src="/about/magazine.jpg"
                    alt="magazine cover of first Socrates Eterna Comics"
                  />
                </div>
              </div>
              <div className="mx-auto aspect-square max-h-36 landscape1:max-h-28">
                <img
                  className="h-full w-full object-cover"
                  src="/about/site.jpg"
                  alt="screenshot of old comic subscription website"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="5-socrates-2"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div
            id="5-container"
            className="mx-auto my-auto flex max-w-4xl flex-col items-center px-4 pt-16 md2:flex-row md2:gap-10 md2:pt-0 landscape1:pt-16 landscape2:flex-row landscape2:gap-8"
          >
            <div
              id="5-images"
              className="mx-auto mb-10 flex flex-col gap-4 md2:mb-0 md2:ml-auto"
            >
              <div className="flex gap-4">
                <div className="aspect-[840/1264] max-h-56">
                  <img
                    className="h-full w-full object-cover"
                    src="/books/tools.jpg"
                    alt="book cover of Tools of the Modern Age"
                  />
                </div>
                <div className="aspect-[840/1264] max-h-56">
                  <img
                    className="h-full w-full object-cover"
                    src="/books/secret.jpg"
                    alt="book cover of Platos secrets"
                  />
                </div>
              </div>
            </div>
            <div
              id="5-text"
              className="mx-auto flex flex-col text-pretty text-center md2:mx-0 md2:mr-auto"
            >
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
            </div>
          </div>
        </section>

        <section
          id="follow"
          className="relative flex h-screen snap-start snap-always flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
        >
          <div className="mx-4 my-auto pt-16 md2:pt-0 landscape1:pt-16">
            <div className="mx-auto my-auto flex h-52 w-full max-w-7xl animate-border-pulse items-center gap-14 border-y-4 from-purple-950 to-purple-900">
              <div className="mx-auto my-auto flex flex-col items-center justify-center">
                <h2 className="pb-4 text-4xl font-bold drop-shadow-2xl">
                  Follow Erik
                </h2>
                <div className="flex items-center gap-3 text-xl">
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
                <div className="flex gap-3 pt-1 text-xl">
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
