import { format } from "date-fns";

import type { ResultsProp } from "../types";
import ScrollToTopButton from "./scroll-to-top-button";

export default function RenderResults({ results }: ResultsProp) {
  return (
    <div className="mx-auto flex w-full max-w-7xl">
      <div className="shrink- dmd:mt- [13.5rem] mx-auto -mt-2 flex max-w-4xl flex-col px-4">
        {results &&
          results.map((comic) => {
            const publishedDate = new Date(comic.metadata.published);
            const formattedDate = format(publishedDate, "eeee, dd-MM-yyyy");

            return (
              <div key={comic.metadata.filename} className="mt-14">
                <div className="text-purple-00 mb-1 flex italic">
                  <p className="text-sm">{formattedDate}</p>

                  <h2 className="font-bol ml-2 text-sm italic">
                    {comic.metadata.title}
                  </h2>
                </div>
                <img
                  src={`/comics/${comic.metadata.filename}`}
                  alt={comic.metadata.title}
                />
              </div>
            );
          })}
        <ScrollToTopButton />
      </div>
    </div>
  );
}
