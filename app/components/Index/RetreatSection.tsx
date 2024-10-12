import React from 'react'

export default function RetreatSection() {
  return (
    <div className="mx- 32 bg-gradient-to-b from-purple-1000 to-purple-950 ">
      <div id="retreat" className="flex flex-col py-24 max-w-7xl mx-auto w-full px-4">
        <h3 className="text-4xl text-center font-bold">Exclusive: Access to 2025 Pantheon Retreat Tickets</h3>
        <p className="text-center pt-2 text-lg">The high level mastermind journey for longer-than-6-months members.</p>

        <div className="flex justify-between gap-x-12 text-center text-2xl font-bold w-full pt-20">
          <div className="flex flex-col w-96">
            <div className='aspect-square max-h-56   mx-auto mb-8'>
              <img className="w-full h-full rounded-2xl object-cover" src="/landing/mount.jpg" alt="" />
            </div>
            <h4>Powerful Locations</h4>
            <p className="text-base font-normal pt-4">The most powerful transformations happen in the most magical locations and professional settings.</p>
          </div>
          <div className="flex flex-col w-96">
            <div className='aspect-square max-h-56   mx-auto mb-8'>
            <img className=" h-full w-full object-cover rounded-2xl " src="/landing/erik.jpg" alt="" />
            </div>
            <h4>Breakthrough Mentoring</h4>
            <p className="text-base font-normal pt-4">Get personal mentoring from Erik Holm to take your life to the next level and awaken the peaceful warrior within yourself. </p>
          </div>
          <div className="flex flex-col w-96">
            <div className='aspect-square max-h-56   mx-auto mb-8'>
            <img className="h-full w-full object-cover rounded-2xl" src="/landing/group.jpg" alt="" />
            </div>
            <h4>Fellowship for Life</h4>
            <p className="text-base font-normal pt-4">Deepen your relationships in the Pantheon Network. Minimum one friendship for life, guaranteed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
