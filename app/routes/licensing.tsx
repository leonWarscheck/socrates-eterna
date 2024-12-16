import { useEffect } from "react";
import { Link, MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Licencing & Advertisement | Dilbert.com" },
    // { name: "Uncensored and Spiciere Than Ever!", content: "Find Out What Happened to Dilbert!", 'og:image': "/favicon.ico",  },
  ];
};

export default function LicensingPage() {
  return (
    <main className="mt-20 pb-6 text-justify">
      <div className="mx-auto flex w-full max-w-4xl grow flex-col px-4 pt-8">
        <h2 className="underlin mb- mt-4 text-center text-3xl font-bold">
          How to license Socrates Eterna Comics
        </h2>{" "}
        <br />
        <br />
        <p>
          <span className="font-bold">
            If you are a company or individual who wants to use a S.E. comic in
            a legal manner, here are the ways you can do it.{" "}
          </span>
          Starting with what is never allowed, so you don’t need to ask…
        </p>
        <br />
        <h3 className="mb-0.5 font-bold">
          Never Allowed, so please don’t ask:
        </h3>
        1. Altering or adding to the text or art of an existing comic.
        <br />
        2. Adding a company or organization logo or identifier to the comic.
        <br />
        3. Asking Erik Holm to create custom comics for your use.
        <br />
        4. Creating the impression Socrates Eterna or Erik Holm endorses a
        product or person or company or service of any kind.
        <br />
        5. Reprinting Socrates Eterna comics intended for subscribers only.
        <br />
        <br />
        <h3 className="mb-0.5 font-bold">Personal use:</h3>
        Individuals may post to social media and/or forward in other ways their
        favorite S.E. comics to friends and followers if it is not done on a
        routine or regular basis. In other words, don’t become a distributor of
        the comic. Sharing some favorites now and then is perfectly acceptable.
        Please don’t create your own “collections” of S.E. comics along a theme
        if you plan to share them. Collecting for personal use is perfectly fine
        of course.
        <br />
        <br />
        <h3 className="mb-0.5 font-bold">Fair Use:</h3>
        People often misunderstand the concept of Fair Use. The simplest
        explanation is that you are free to use the S.E. comic as an example of
        something, but not simply as entertainment. Using it for entertainment
        only is reserved for the copyright holder.
        <br />
        <br />
        For example, a journalist might want to show that a bad habit in the
        workplace is so annoying it appears in a S.E. comic. That’s fair. Or a
        publication might run a features story about Erik Holm and include some
        S.E. comics as context. That’s fair. Or a student might want to show
        that a topic is easy to mock, as demonstrated by a S.E. comic, and
        include it in an essay. That’s fair. Another student might want to write
        an essay about how to gain wisdom and refer to a S.E. comic as an
        exhibit. That’s fair. Or perhaps a S.E. comic causes some controversy,
        and it is important to a news story to show it. That’s fair.
        <br />
        <br />
        If the ONLY reason for including a S.E. comic in your work or
        presentation is that you think the audience will find it funny, that is
        NOT fair use. And it does not matter if you are making money from it or
        not. If you think your use for a S.E. comic (or several) is Fair Use,
        and you have a good reason, you don’t need to worry about any lawyers
        coming after you. If you don’t abuse or stretch this understanding too
        far, no need to get approval, just go with it.
        <br />
        <br />
        <h3 className="mb-0.5 font-bold">Copyright Notice:</h3>
        Some of the older S.E. comics have outdated copyright lines that are no
        longer accurate. The correct copyright holder is Erik Holm Inc. It is
        considered good form to include a copyright attribution when the
        publication has room for it. If you include a Dilbert comic in a slide
        deck, some fine print at the bottom is all you need. But no one expects
        to see a copyright line on social media posts.
        <br />
        <br />
        <h3 className="mb-0.5 font-bold">Business Use:</h3>
        If you subscribe to the Pantheon community on Patreon, and you have an
        annual subscription, or have been a member for over six months, you are
        pre-authorized for the following S.E. comic reprint rights.
        <br />
        <br />
        1. Your own business presentations in-house or to select customer
        audiences.
        <br />
        2. Books you write, including up to 5 S.E. comics.
        <br />
        3. Other written works by you, including academic papers, also up to 5
        S.E. comics.
        <br />
        <br />
        Please do not use Socrates Eterna as part of a marketing or sales
        campaign. And please do not set up a distribution system. The annual
        subscription rate for the Pantheon Community on Patreon is 216$ as of
        May 2024.
        <br />
        <br />
      </div>
    </main>
  );
}
