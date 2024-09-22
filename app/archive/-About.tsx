import { MetaFunction, useLoaderData, Link } from "@remix-run/react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { useEffect, useRef } from "react";
import { initScrollHeader, showHeader } from "~/utils/scrollHeader";
import { motion, useTransform, useScroll } from "framer-motion";
// import Lenis from "lenis";

export default function About() {
  useEffect(() => showHeader());

  return (
    <main className="">
      <section
        id="about-top"
        className="bg-neutral-10 relative flex h-screen snap-start snap-always flex-col"
      >
        <div className="z- mx-auto my-auto flex h-52 max-w-4xl items-center gap-10 bg-neutral-200">
          <div className="font-ligh my-auto ml-auto flex flex-col items-center text-neutral-500">
            <h1 className="pb-4 text-4xl font-bold text-dilred">
              About Scott Adams
            </h1>
            <p className="animate-pulse text-xl">scroll to read...</p>
            {/* <div className="flex gap-3 items-center  text-xl pt- pb-  ">
              <p>Follow:</p>
              <Link
                className="hover:underline"
                to="https://www.twitter.com/@ScottAdams.com"
              >X.com</Link>
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
            <div className="flex gap-3 text-xl pt- pb-">
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
            </div> */}
          </div>
          <img
            className="mr-auto w-1/2"
            src="/portraits/scottPortrait.webp"
            alt=""
          />
        </div>
        {/* <p className=" absolute bottom-20 inset-x-1/2  bg-black   text-neutral-500 ">scroll&nbsp;to&nbsp;read...</p> */}
        {/* <p className="absolute left-1/2 bottom-24 animate-pulse transform -translate-x-1/2 bg-blac text-neutral-400 font-light ">
          scroll&nbsp;to&nbsp;read...
        </p> */}
      </section>
      <section className="relative flex h-screen snap-start snap-always flex-col bg-neutral-100">
        <div className="z- mx-auto my-auto flex h-52 max-w-4xl items-center gap-14 bg-neutral-300">
          <div className="ml-auto flex w-5/12 flex-col gap-4">
            <div className="flex gap-4">
              <img className="w-1/3" src="/about/catskill.jpg" alt="" />
              <img className="w-2/3" src="/about/family.jpg" alt="" />
            </div>
            <img className="mx-auto w-2/3" src="/about/vale.png" alt="" />
          </div>
          <div className="my-auto mr-auto flex flex-col items-center text-neutral-600">
            <h2 className="pb-4 text-2xl font-bold text-dilred">
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
            <div className="pt- pb- flex gap-3 text-xl"></div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-10 relative flex h-screen snap-start snap-always flex-col">
        <div className="z- mx-auto my-auto flex h-52 max-w-4xl items-center gap-14 bg-neutral-300">
          <div className="my-auto ml-auto flex flex-col items-center text-neutral-600">
            <h2 className="pb-4 text-2xl font-bold text-dilred">2. School</h2>
            <p className="text-md">
              - BA in Economics, Hartwick College
              <br />- MBA, Haas School of Business, <br /> &nbsp;
              &nbsp;University of California at Berkeley
            </p>
          </div>
          <div className="mr-auto flex w-5/12 flex-col gap-4">
            <div className="flex gap-4">
              <img className="w-2/3" src="/about/berkeley.webp" alt="" />
              <img className="my-auto size-1/3" src="/about/uc.webp" alt="" />
            </div>
            <img className="mx-auto w-2/3" src="/about/hartwick.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="relative flex h-screen snap-start snap-always flex-col bg-neutral-100">
        <div className="z- mx-auto my-auto flex h-52 max-w-4xl items-center gap-14 bg-neutral-300">
          <div className="ml-auto flex w-5/12 flex-col gap-4">
            <div className="flex gap-4">
              <img
                className="mt-8 size-1/3"
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
              className="mx-auto size-2/3"
              src="/portraits/dilbert-c-17dec98-dd-mac-scott-adams-the-creator-of-dilbert-the-comic-strip-has-a-new-project.webp"
              alt=""
            />
          </div>
          <div className="my-auto mr-auto flex w-5/12 flex-col items-center text-neutral-600">
            <h2 className="pb-4 text-2xl font-bold text-dilred">
              3. Mock Up Chapter
            </h2>
            <p className="text-sm">
              {" "}
              The chapters on this About page are mockups to demo the design
              concept. If you like it, I will finish the whole journey, also
              with real pictures. Maybe we can also finetune the page to make it
              even more obvious that you are a caring human and not a racist.
            </p>
            <div className="pt- pb- flex gap-3 text-xl"></div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-10 relative flex h-screen snap-start snap-always flex-col">
        <div className="z- mx-auto my-auto flex h-52 w-full max-w-4xl items-center gap-14 bg-dilred">
          <div className="mx-auto my-auto flex flex-col items-center text-neutral-50">
            <h2 className="pb-4 text-4xl font-bold text-white">Follow</h2>
            <div className="pt- pb- flex items-center gap-3 text-xl">
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
            <div className="pb- flex gap-3 pt-1 text-xl">
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
      {/* <section className="h-screen bg-neutral-100 snap-start snap-alway"></section> */}
    </main>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "About | Dilbert.com" },
    { name: "description", content: "content" },
  ];
};
