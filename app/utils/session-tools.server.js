import { createCookieSessionStorage, json } from "@remix-run/node";
import { semanticSearch } from "./semantic-search-logic";
import { dateSearch } from "./date-search-logic";

export const { getSession, commitSession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: ["r33m11xr0ck55"],
    sameSite: "lax",
  },
});

export function cleanMeaningQuery(query, characters){
  const characterBySearchName = characters.find(
    (character) => character.name === query
  );
  const noCharacterQuery = characterBySearchName ? "" : query;

  const datePattern = /^(?:\d{4}-\d{2}-\d{2}|\d{4}-\d{2})$/;
    const alsoNoDateQuery = datePattern.test(noCharacterQuery) ? "" : noCharacterQuery;

return alsoNoDateQuery

}

export async function getPotentialResults(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("search") || "";
  console.log("-----query/tools/potential", !!query);

  const results = query ? await semanticSearch(query) : undefined;
  console.log("results/potential:", !!results);

  return { results, query };
}

export async function getPotentialDateResults(request) {
  const url = new URL(request.url);

  const dateType = url.searchParams.get("dateType") || "";
  const month = url.searchParams.get("month") || "";
  const day = url.searchParams.get("day") || "";
  const query = dateType === "month" ? month : dateType === "day" ? day : "";

  console.log("query/date:", !!query);
  console.log("dateType:", !!dateType);

  const results = query ? await dateSearch(query) : null;

  console.log("results/date:", !!results);

  return { results, query };
}

export async function getLatestAndSavedResults(
  request,
  potentialResults,
  potentialQuery,
) {
  // console.log("savedResults/getLatestAndSaved:", !!savedResults);
  // console.log("savedQuery/getLatestAndSaved:", savedQuery);
  // console.log("potentialQ/getLatest:", potentialQuery)
  // console.log("latestQuery/getLatest:", !!latestQuery)

  const session = await getSession(request.headers.get("Cookie"));

  const savedResults = session.get("savedResults");
  const latestResults = potentialResults || savedResults;
  if (potentialResults) {
    session.set("savedResults", latestResults);
  }

  const savedQuery = session.get("savedQuery");
  const latestQuery = potentialQuery || savedQuery;
  if (potentialQuery) {
    session.set("savedQuery", latestQuery);
  }

  return { latestResults, latestQuery, session };
}
