import { format } from "date-fns";

import type { ResultsProp } from "../types";
import ScrollToTopButton from "./scroll-to-top-button";

/**
 * Renders a list of comics, including their publication date and title.
 *
 * Results comic data comes from Pinecone DB (see `search-logic` folder).
 * Results does not include the image files themselfes, but file paths, which we
 * use to load the corresponding images from the public folder (see `<img
 * src={}/>`). This way, as the dataset is not too big, we can minimize the
 * payload from external storage.
 *
 * @param results - An array of comic objects fetched from Pinecone DB.
 * @returns A rendered list of comic results with their images, titles, and
 * publication dates.
 */
export default function RenderResults({ results }: ResultsProp) {
  return (
    <div className="mx-auto flex w-full max-w-7xl">
      <div className="mx-auto -mt-2 flex max-w-4xl flex-col px-4">
        {results &&
          results.map((comic) => {
            const publishedDate = new Date(comic.metadata.published);
            const formattedDate = format(publishedDate, "eeee, dd-MM-yyyy");

            return (
              <div key={comic.metadata.filename} className="mt-14">
                <div className="mb-1 flex italic">
                  <p className="text-sm">{formattedDate}</p>

                  <h2 className="ml-2 text-sm italic">
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
