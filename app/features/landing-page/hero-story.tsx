import React from 'react'

export default function HeroStory() {
  return (
    <div id="copy" className="flex flex-col md2:flex-row bg-teal- 500  mb- mx-auto w-full max-w-7xl grow">
      <h2 className="text-3xl md2:hidden pt-28 font-bold text-center mx-4">
        What Happened to Socrates?
      </h2>
      {/* <img className="flex md2:hidden  object-cover  mt-12" src="/hero/fade1a.jpeg" alt="" /> */}
      <div className='aspect-square max-h-56 flex md2:hidden    mt-10'>
        <img className=" h-full w-full object-cover " src="/hero/fade2cut2.jpg" alt="" />
      </div>
      <div id="text" className="flex flex-col pt- text-pretty  px-4 md2:px-0 md2:pl-4 md2:w-3/5 md2:pr-12 bg -gradient-to-r from-purple-1000 to-purple-900 md2:pt-28 ">
        <h2 className="text-4xl hidden md2:flex font-bold text-left bg-blue- 400">
          What Happened to Socrates?
        </h2>
        <br />
        <p className="text-lg font-bold text-justif ">
          Cartoonist and soul explorer Erik Holm has emerged from his 3 year retreat with a refined mission - launching Socrates Pantheon.
        </p>
        <br />
        <p>
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
      <img className=" w-2/4 object-cover xl7:pr-4 hidden md2:flex " src="/hero/fade1a.jpeg" alt="" />


    </div>
  )
}
