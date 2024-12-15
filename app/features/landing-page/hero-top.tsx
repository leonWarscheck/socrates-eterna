import React from 'react'
import { Link } from '@remix-run/react'

export default function HeroSectionTop() {
  return (
    <section id="hero" className="bg-purple-950 min-h-dvh flex items-center relative dlg:pt-[26vw] pt-[40vw]">
        <div
          className="
            bg- top
            bg-no-repeat
            bg-[length:100%]
            landscape-narrow:
            bg-[center_top_+3.5rem]
          
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
          flex z-10 flex-col px- 4 mx-auto max-w-  text-center dlg:max-w-5x text-white grow "
        >
          <h2 className="font-socrates mx-4 text-[55px] tiny:text-6xl dlg:text-[85px] font-bold text-center leading-[69px]">
            JOIN THE PANTHEON
          </h2>
          <h3 className="font-socrates text-center text-4xl mx-4 dlg:text-5xl hyphens-auto mt-2.5 font-semibold">
            Gain Exclusive Insight and Fellowship
          </h3>
          
          <div className="flex flex-col md2:flex-row  text-xl mt-8 gap-5 mx-auto">
            <Link
              to="#join-pantheon"
              className="px-8 py-2.5 bg-primary1 animate-bg-pulse-slow  md2:ml-auto  text-white rounded-lg "
            >
              Pantheon Membership
            </Link>
            <Link
              className="text-purple-40 px-8 py-2 border-2 animate-border-pulse animate-[pulse-border_6s_infinite rounded-lg  md2:mr-auto "
              to="/comics/meaning"
            >
              Search Comics
            </Link>
          </div>
        </div>

        <div className="absolute bottom-[4dvh] w-full portrait-narrow:hidde n ">
          <img src="/main/down-arrow.png" alt="" className="mx-auto size-4  animate-pulse invert opacity-80" />
        </div>
      </section>
  )
}
