import comicData from "../comic-data.json";
import { getCleanResults } from "./search-helpers.server";

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
