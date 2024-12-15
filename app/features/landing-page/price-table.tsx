import React from 'react'
import { Link } from '@remix-run/react'

export default function PriceTable() {
  return (
    <div className="w-full pt-28 pb-16 bg-gradient-to-b from-purple-950 via-purple-1000 to-purple-1000 ">
      <div className='flex flex-col w-full mx-auto max-w-7xl px-4'>
      <h2 className="text-4xl pb-5 font-bold text-center text-purple-200">Join the PANTHEON</h2>
        
        <table className="mt-8  table-auto   w-full">
          <thead className="sticky top-[62px] border-t-2 border-purple-900  z-10 bg-purple-1000">
            <tr className="w-full border-b-2 border-primary1">
              <th className="w-1/2 text-sm md2:text-xl text-left pl-4 ">Including</th>
              <th className="w-1/4   ">
                <div className="flex flex-col pt-4 ">
                  <Link
                    className="px-3.5 md2:px-6 py-2 font-medium  max-w-36 mx-2 md2:mx-auto rounded-lg  bg-primary1 text-base md2:text-xl hover:bg-purple-600 "
                    to="https://www.x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    on X.com
                  </Link>
                  <p className="mt-6 text-xs md2:text-sm mb-3">3$ / month</p>
                </div>
              </th>
              <th className="w-1/4  bg-purple-950">
                <div className="flex flex-col pt-4 ">
                  <Link
                    className="px-2 md2:px-6 py-2 max-w-40 mx-2 font-medium md2:mx-auto rounded-lg text-base md2:text-xl animate-bg-pulse-slow2  bg-primary1 hover:bg-purple-600 "
                    to="https://www.patreon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    on Patreon
                  </Link>
                  <p className="mt-6 text-xs md2:text-sm mb-3">18$ / month</p>
                </div>

              </th>

            </tr>
          </thead>
          <tbody className="text-sm md2:text-base">
            <tr className="border-purple-900 border-y-2">
              <td className="py-6 bg-purple-1000 w-1/2 pl-4">Socrates PANTHEON daily comic</td>
              <td className="bg-purple-1000"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
            </tr>
            <tr className="border-purple-900 border-y-2">
              <td className="py-6 pl-4 bg-purple-1000">
                Daily Socrates Calendar (digital version)
              </td>
              <td className="bg-purple-1000"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
            </tr>
            <tr className="border-purple-900 border-y-2">
              <td className="py-6 pl-4 bg-purple-1000">
                My morning livestreams without commercials
              </td>
              <td className="bg-purple-1000"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
              <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
            </tr>
            <tr className="border-purple-900 border-y-2">
              <td className="py-6 pl-4 ">
                "Philosophers Read News" comic (usually daily) - about the
                headlines
              </td>

              <td className=""> <img className="h-6 mx-auto" src="/main/dash.svg" alt="" /></td>
              <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
            </tr>


            <tr className="border-purple-900 border-y-2">
              <td className="py-6 pl-4 ">Access to the PANTHEON network of highly driven, likeminded people</td>
              <td className=""> <img className="h-6 mx-auto" src="/main/dash.svg" alt="" /></td>
              <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
            </tr>
            <tr className="border-purple-900 border-y-2">
              <td className="py-6 pl-4 ">
                Take part in the weekly "PANTHEON" group coaching calls!
              </td>
              <td className=""> <img className="h-6 mx-auto" src="/main/dash.svg" alt="" /></td>
              <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
            </tr>
            <tr className="border-purple-900 border-b-2">
              <td className="py-6 pl-4 ">
                Over 200 of my Psychology Lessons (2-4 minutes) on improving your
                life!
              </td>
              <td className=""> <img className="h-6 mx-auto" src="/main/dash.svg" alt="" /></td>
              <td className="bg-purple-950"> <img className="size-4 mx-auto" src="/main/checkmark-rounded.svg" alt="" /></td>
            </tr>
          </tbody>
        </table>
        <div className="  12 bg-purple- 950  rounded-2xl max-w-7xl w-full mx-auto">
          <p className="text-purple-200 text-xs mt-6 pl-4 text-pretty max-w-lg">
            If you are a company or individual who wants to use a Socrates Eterna
            comic in a legal manner, or wants to advertise on the Eterna comics page,{" "}
            <Link className="underline text-purple-400" to="/licensing">
              click here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
