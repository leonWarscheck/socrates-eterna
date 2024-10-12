import React from 'react'

export default function HeroStory() {
  return (
    <div id="copy" className="flex bg-teal- 500  mb- mx-auto w-full max-w-7xl grow">
    <div id="text" className="flex flex-col small:text-justif text-pretty pl-4 w-3/5 pr-12 bg -gradient-to-r from-purple-1000 to-purple-900 pt-28">
      <h2 className="text-4xl font-bold text- center bg-blue- 400">
        What Happened to Socrates?
      </h2>
      <br />
      <p className="text-lg font-bold text-justif ">
        Cartoonist and soul explorer Erik Holm has emerged from his 3 year retreat with a refined mission - launching Socrates Pantheon.
      </p>
      <br />
      <p>
        {/* <span className="font-bold">Why the retreat?</span>{" "} */}
        Erik was struck by a vision to fast and sit silent on mount Olympus until his next chapter emerged.
      </p>
      <br />

      <p>
        During this time, he explored his own shortcomings, discovered hidden scriptures, met new mentors, and had otherworldly encounters. These experiences transformed his understanding and strength, leading him to merge philosophy with action on a new level.
      </p>
      <br />
      Pantheon is the gateway to discover your purpose...
      <br />
      <br />
      <br />
      <br />
      <p id="join-pantheon"></p>
    </div>
    <img className="flex w-2/4 object-cover " src="/hero/fade1a.jpeg" alt="" />


  </div>
  )
}
