import React from 'react'
import { Link } from '@remix-run/react'

export default function HeroSectionTop() {
  return (
    <section id="hero" className="bg-purple-950 min-h-dvh flex items-center relative dlg:pt-[26vw] pt-[40vw]">
        <div
          className="
            bg-top
            bg-no-repeat
            bg-[length:100%]
            landscape-narrow:bg-[center_top_-4.9rem
          
            bg-purple-950
            bg-[url('/hero/sm.jpg')]
            dmd:bg-[url('/hero/md.jpg')]
            dlg:bg-[url('/hero/lg.jpg')]
            absolute 
            top-0
            right-0
            bottom-0
            left-0
            z-0
          "
        ></div>
        <div
          id="title"
          className="
          flex z-10 flex-col px- 4 mx-auto max-w- mb-10 text-center dlg:max-w-5x text-white grow "
        >
          <h2 className="font-socrates leading3 text-[55px] tiny:text-6xl dlg:text-[85px] font-bold text-center leading- [69px]">
            JOIN THE PANTHEON
          </h2>
          <h3 className="font-socrates text-center text-4xl px- dlg:text-5xl hyphens-auto mt-2.5 font-semibold">
            Gain Exclusive Insight and Fellowship
          </h3>
          <Link
            to="#get-reborn"
            className=" dmd:hidden px-3 pt-3 pb-1 mx-auto mt-7 text-xl text-white border2 bg-primary1 hover:bg-red-600"
          >
            Get Started
          </Link>
          <div className="flex bg-teal- 500 text-xl mt-10 gap-6">
            <Link
              to="#join-pantheon"
              className="hidden dmd:block px-4 py-2 font- socrates bg-primary1  ml-auto  text-xl text-white border-2 rounded-lg border-primary1  bg-purple- hover:bg-purple-600"
            >
              Pantheon Membership
            </Link>
            <Link
              className=" text-cente text-purple-40 px-4 py-2 border-2 rounded-lg font-ligh mr-auto  font- socrates"
              to="/comics"
            >Search Comics</Link>
          </div>
        </div>

        <div className="absolute bottom-[4dvh] w-full portrait-narrow:hidden ">
          <img src="/main/down-arrow.png" alt="" className="mx-auto size-4  animate-pulse invert opacity-80" />
        </div>
      </section>
  )
}
