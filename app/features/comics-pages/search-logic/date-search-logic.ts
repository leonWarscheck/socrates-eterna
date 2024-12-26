import comicData from "./setup-scripts-and-data/comic-data.json";
import { getCleanResults } from "./search-helpers.server";

// Sorts a copy of local mirror or comic dataset by time distance to the query date and
// returns the closest comics objects (trimmed of anything unneeded for
// rendering the render-results component). Date search is independent of
// embeddings and Pinecone DB. 
export async function dateSearch(query: string, limit = 3) {
  const targetDate = new Date(query).getTime();
  const closestToDateComics = [...comicData]
    .sort((a, b) => {
      const aDifference = Math.abs(
        new Date(a.metadata.published).getTime() - targetDate,
      );
      const bDifference = Math.abs(
        new Date(b.metadata.published).getTime() - targetDate,
      );
      return aDifference - bDifference;
    })
    .slice(0, limit);

  const cleanResults = getCleanResults(closestToDateComics);

  return cleanResults;
}
