import type { MetaFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Dilbert.com" },
    { name: "description", content: "content" },
  ];
};

export default function Index() {
  return (
    <main className="">
      <section className="max-w-3xl w-full mx-auto flex flex-col grow pt-24 px-4 min-h-dvh">
        <img className="size-11/12 mx-auto" src="/main/posterSc.jpg" alt="" />
        <h2 className="text-center text-4xl font-bold mt-4 small:text-6xl">
          Dilbert REBORN
        </h2>
        <h3 className=" text-center text-3xl font-bold mb-4">
          Uncensored and Spicier than Ever!
        </h3>
        <Link
          to="/get-reborn"
          className="bg-dilred hover:bg-red-600 rounde mx-auto text-xl text-white pt-3 px-3 pb-1 mb-4 "
        >
          Get REBORN
        </Link>
        <Link
          className="text-center underline text-neutral-400 mb-6"
          to="legacy"
        >
          or explore the Dilbert Legacy comics
        </Link>
      </section>

      <section>
        <div className="bg-dilred flex text-center">
          <h2 className=" text-3xl text-white font-bold  flex mx-auto  my-8 ">
            What Happened to Dilbert?
          </h2>
        </div>
        <div className="max-w-3xl w-full mx-auto flex flex-col grow pt-8 px-4 ">
          <p className="text-2xl font-bold">
            Disgraced and canceled cartoonist Scott Adams has moved his work and
            upgraded it to a spicier version entitled Dilbert Reborn.
          </p>
          <br />
          <p>
            <span className="font-bold">Why did Dilbert get cancelled?</span>{" "}
            ...If you believe the news, it was because I am a big ol' racist.
          </p>
          <br />
          <p className="italic">
            Context: No news about public figures is ever true and in context.
            Never.
          </p>
          <br />
          <p>
            If you look into the context, the point that got me cancelled is
            that CRT, DEI and ESG all have in common the framing that White
            Americans are historically the oppressors and Black Americans have
            been oppressed, and it continues to this day. I recommended staying
            away from any group of Americans that identifies your group as the
            bad guys, because that puts a target on your back.
          </p>
          <br />
          <p>
            I was speaking hyperbolically, of course, because we Americans don't
            have an option of staying away from each other. But it did get a lot
            of attention, as I hoped. (More than I planned, actually.)
          </p>
          <br />

          <section className="mx-auto bg-dilred pt-14 px-4 py-4">
            <h2 className="text-center text-neutral-100 text-4xl font-bold">
              Get Dilbert REBORN
            </h2>
            <table className="table-fixed mt-6 bg-white">
              <thead>
                <tr className="border-2 h-24">
                  <th className="w-1/2">
                    <Link
                      className="bg-dilred text-base small:text-xl hover:bg-red-600 text-white pt-3 px-3 pb-1 mb- "
                      to="/"
                    >
                      on x.com
                    </Link>
                  </th>
                  <th className="w-1/2">
                    <Link
                      className="bg-dilred  text-base small:text-xl hover:bg-red-600 text-white pt-3 px-3 pb-1 mb- "
                      to="/"
                    >
                      on locals.com
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-2 ">
                  <td className="py-3">3$ / month</td>
                  <td>7$ / month</td>
                </tr>
                <tr className="border-2">
                  <td className="py-3">Dilbert REBORN daily</td>
                  <td>Dilbert REBORN daily</td>
                </tr>
                <tr className="border-2 ">
                  <td className="py-3">
                    Daily Dilbert Calendar (digital version)
                  </td>
                  <td>Daily Dilbert Calendar (digital version)</td>
                </tr>
                <tr className="border-2 ">
                  <td>x</td>
                  <td className="py-3">
                    "Robots Read News" comic (usually daily) - about the
                    headlines
                  </td>
                </tr>
                <tr className="border-2 ">
                  <td>x</td>
                  <td className="py-3">
                    My morning livestreams without commercials
                  </td>
                </tr>
                <tr className="border-2 ">
                  <td>x</td>
                  <td className="py-3">
                    My evening "Man Cave" livestreams without commercials
                  </td>
                </tr>
                <tr className="border-2 ">
                  <td>x</td>
                  <td className="py-3">My behind-the-scenes content</td>
                </tr>
                <tr className="border-2 ">
                  <td>x</td>
                  <td className="py-3">My political content </td>
                </tr>
                <tr className="border-2 ">
                  <td>x</td>
                  <td className="py-3">
                    Over 200 of my Micro Lessons (2-4 minutes) on improving your
                    life!
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="text-xs text-justify text-neutral-500">
            <h2 className="text-base font-bold  pt-10">Other Formats</h2>
            <br />
            <h3 className="font-bold">Licensing Dilbert Comics</h3>
            <br />
            <p>
              I don't have a system for licensing Dilbert comics for now. If you
              are a subscriber on Locals to the new Dilbert Reborn comics, or
              you subscribe to on the X platform, you have automatic permission
              to use (a few) older Dilbert comics for your internal business
              meetings. But don't turn them into marketing materials and don't
              <br />
              <br />
              start republishing them regularly, please. And be careful about
              using the Dilbert Reborn comics. Those are too spicy for the
              general public.
            </p>
            <br />
            <p>
              I don't recommend trying to use Dilbert for any marketing or book
              illustration purposes. It is currently too controversial for that.
            </p>
            <br />
            <h3 className="font-bold">Emailed Dilbert Comics</h3>
            <br />
            <p>This feature will not be reintroduced.</p>
            <br />
            <h3 className="font-bold">Dilbert Page-a-Day Calendar</h3>
            <br />
            <p>
              There is no paper version of the 2024 Dilbert calendar but a 2025
              edition will be available later in 2024. Subscribers to Dilbert
              Reborn on X and on Locals see a digital version of the 2024
              calendar for no extra cost.
            </p>
            <br />
            <h3 className="font-bold">New Book - Reframe Your Brain</h3>
            <br />
            <p>
              Most of my backlist books were cancelled, but my new book, Reframe
              Your Brain and the 2nd Edition of How to Fail at Almost Everything
              and Still Win Big are for sale at Amazon - Reframe Your Brain
            </p>
            <br />
          </section>
        </div>
      </section>
    </main>
  );
}
