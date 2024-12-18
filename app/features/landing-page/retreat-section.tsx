export default function RetreatSection() {
  return (
    <div className="bg-gradient-to-b from-purple-1000 to-purple-950">
      <div
        id="retreat"
        className="mx-auto flex w-full max-w-7xl flex-col px-8 pb-24 pt-16 md2:pt-24"
      >
        <h3 className="text-center text-3xl font-bold md2:text-4xl">
          Exclusive: Access to 2025 Pantheon Retreat Tickets
        </h3>
        <p className="pt-2 text-center text-lg">
          The high level mastermind journey for longer-than-6-months members.
        </p>

        <div className="flex w-full flex-col justify-between gap-16 pt-14 text-center text-2xl font-bold md2:flex-row md2:gap-x-12 md2:pt-20">
          <div className="mx-auto flex max-w-96 flex-col">
            <div className="mx-auto mb-6 aspect-square max-h-56 md2:mb-8">
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/landing/mount.jpg"
                alt="mount olymp at night with stars in the sky"
              />
            </div>
            <h4>Powerful Locations</h4>
            <p className="pt-3 text-base font-normal">
              The most powerful transformations happen in magical locations with
              professional guidance.
            </p>
          </div>

          <div className="mx-auto flex max-w-96 flex-col">
            <div className="mx-auto mb-6 aspect-square max-h-56 md2:mb-8">
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/landing/r1.jpg"
                alt="portrait of author Erik Holm"
              />
            </div>
            <h4>Breakthrough Mentoring</h4>
            <p className="pt-3 text-base font-normal">
              Get personal mentoring from Erik Holm to take your life to the
              next level and awaken the peaceful warrior within yourself.{" "}
            </p>
          </div>

          <div className="mx-auto flex max-w-96 flex-col">
            <div className="mx-auto mb-6 aspect-square max-h-56 md2:mb-8">
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/landing/group.jpg"
                alt="a group of mentees at dinner in a greek temple open air"
              />
            </div>
            <h4>Guaranteed Fellowship</h4>
            <p className="pt-3 text-base font-normal">
              Deepen your relationships in the Pantheon Network. Minimum one
              friendship for life, guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
