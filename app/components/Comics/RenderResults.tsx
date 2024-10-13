import { format } from "date-fns";
import SideAd from "./SideAd";

export default function RenderResults({ loaderResults }) {
  return (
    <div className="flex max-w-7xl mx-auto w-full">
    <div className="flex flex-col mx-auto shrink-0 max-w-4xl px-4 mt-12 dmd:mt- [13.5rem] ">
      {loaderResults &&
        loaderResults.map((comic) => {
          // Convert published date to a Date object
          const publishedDate = new Date(comic.metadata.published);

          // Format the date using date-fns with dash separators
          const formattedDate = format(publishedDate, "eeee, dd-MM-yyyy");
          return (
            <div key={comic.metadata.filename} className="mb-14">
              <div className="flex text-purple-00 italic mb-1">
                <p className="text-sm">{formattedDate}</p>

                <h2 className="font-bol italic text-sm ml-2">
                  {comic.metadata.title}
                </h2>
              </div>
              <img
                src={`comics/${comic.metadata.filename}`}
                alt={comic.metadata.title}
              />
            </div>
          );
        })}
    </div>
    {/* <SideAd/> */}
</div>
  );
}
