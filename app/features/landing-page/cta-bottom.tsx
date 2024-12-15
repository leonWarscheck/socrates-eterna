import React from 'react'
import { Link } from '@remix-run/react'

export default function CtaBottom() {
  return (
    <div className="flex flex-col w-full  pt-36 pb-24 px-4 bg- gradient-to-b to-purple-1000 from-purple-1000 via-purple-900">
          <h3 className="text-center text-3xl md2:text-4xl font-bold font-socrates pb-2">Join the PANTHEON, now!</h3>
          <h4 className="text-center text-lg md2:text-2xl max-w-4xl mx-auto">Special Offer: Purchase the full year membership and gain instant access to the retreat ticket store.</h4>
          <Link
            to="#join-pantheon"
            className="px-6 py-2 font- socrates  bg-primary1 animate-bg-pulse-slow   mx-auto mt-7 text-xl  text-white border- 2 rounded-lg  hover:bg-purple-600"
            // className="px-6 py-2 font- socrates  mx-auto mt-7 text-2xl text-white border-2 rounded-lg border-primary1 animate-border-pulse bg-purple- hover:bg-purple-600"
          >
            Get Started
          </Link>
          <Link
            className=" text-purple-400 px-4 py-2  underline  font-ligh mx-auto pt-6  font- socrates"
            to="/comics/meaning"
          >or explore the Eterna Comic Search</Link>
        </div>
  )
}
