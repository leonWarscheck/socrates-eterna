import React from "react";

export default function HeroStory() {
  return (
    <div
      id="copy"
      className="mx-auto flex w-full max-w-7xl grow flex-col md2:flex-row"
    >
      <h2 className="mx-4 pt-28 text-center text-3xl font-bold md2:hidden">
        What Happened to Socrates?
      </h2>
      <div className="mt-10 flex aspect-square max-h-56 md2:hidden">
        <img
          className="h-full w-full object-cover"
          src="/hero/fade2cut2.jpg"
          alt="socrates main character closeup on a mountaintop staring into the distance at golden hour"
        />
      </div>
      <div
        id="text"
        className="flex flex-col text-pretty from-purple-1000 to-purple-900 px-4 md2:w-3/5 md2:px-0 md2:pl-4 md2:pr-12 md2:pt-28"
      >
        <h2 className="hidden text-left text-4xl font-bold md2:flex">
          What Happened to Socrates?
        </h2>
        <br />
        <p className="text-lg font-bold">
          Cartoonist and soul explorer Erik Holm has emerged from his 3 year
          retreat with a refined mission - launching Socrates Pantheon.
        </p>
        <br />
        <p>
          Erik was struck by a vision to fast and sit silent on mount Olympus
          until his next chapter emerged.
        </p>
        <br />
        <p>
          During this time, he explored his own shortcomings, discovered hidden
          scriptures, met new mentors, and had otherworldly encounters. These
          experiences transformed his understanding and strength, leading him to
          merge philosophy with action on a new level.
        </p>
        <br />
        Pantheon is the gateway to discover your purpose...
        <br />
        <br />
        <br />
        <br />
        <p id="join-pantheon"></p>
      </div>
      <img
        className="hidden w-2/4 object-cover md2:flex xl2:pr-4"
        src="/hero/fade1a.jpeg"
        alt="socrates main character closeup on a mountaintop staring into the distance at golden hour"
      />
    </div>
  );
}
