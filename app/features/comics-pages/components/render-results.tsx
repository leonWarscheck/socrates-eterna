import { format } from "date-fns";
import ScrollToTopButton from "./scroll-to-top-button";
import type { ResultsProp } from "../types";


export default function RenderResults({ results }: ResultsProp) {

  return (
    <div className="flex max-w-7xl mx-auto w-full">
      <div className="flex flex-col mx-auto shrink- max-w-4xl px-4 -mt-2 dmd:mt- [13.5rem] ">
        {results &&
          results.map((comic) => {
            const publishedDate = new Date(comic.metadata.published);
            const formattedDate = format(publishedDate, "eeee, dd-MM-yyyy");

            return (
              <div key={comic.metadata.filename} className="mt-14">
                <div className="flex text-purple-00 italic mb-1">
                  <p className="text-sm">{formattedDate}</p>

                  <h2 className="font-bol italic text-sm ml-2">
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
