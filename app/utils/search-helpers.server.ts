import { createCookieSessionStorage, json } from "@remix-run/node";
import { semanticSearch } from "./semantic-search-logic";
import { dateSearch } from "./date-search-logic";
import {
  GetCleanMeaningQueryParams,
  Comic,
  QueryProp,
} from "~/components/comics/types";

// helpers for cleaning up results and query
export function getCleanResults(matches: any) {
  const cleanResults = matches.map((comic: Comic) => ({
    //! type here or in functions that take in cleanresults?
    id: comic?.id ?? "", //! do I have to catch undefined here aswell?
    metadata: {
      filename: comic.metadata?.filename ?? "",
      published: comic.metadata?.published ?? "",
      title: comic.metadata?.title ?? "",
    },
  }));
  return cleanResults;
}

export function getCleanMeaningQuery({
  query,
  characters,
}: GetCleanMeaningQueryParams) {
  const characterBySearchName = characters.find(
    (character) => character.name === query,
  );
  const noCharacterQuery = characterBySearchName ? "" : query;

  const datePattern = /^(?:\d{4}-\d{2}-\d{2}|\d{4}-\d{2})$/;
  const alsoNoDateQuery = datePattern.test(noCharacterQuery)
    ? ""
    : noCharacterQuery;

  return alsoNoDateQuery;
}

// helpers for managing session storage of results and query
export const { getSession, commitSession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: ["r33m11xr0ck55"],
    sameSite: "lax",
  },
});

export async function getPotentialResults(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("search") || "";

  const results = query ? await semanticSearch(query) : undefined; //! can I make not return anything if query does not exist?

  return { results, query };
}

export async function getPotentialDateResults(request: Request) {
  const url = new URL(request.url);

  const dateType = url.searchParams.get("dateType") || ""; //! correct place for these catches?
  const month = url.searchParams.get("month") || "";
  const day = url.searchParams.get("day") || "";
  const query = dateType === "month" ? month : dateType === "day" ? day : "";

  const results = query ? await dateSearch(query) : null; // ! seems wrong

  return { results, query };
}

export async function getLatestAndSavedResults(
  request: Request,
  potentialResults: Comic[], //! why no beef, that content is not included?
  potentialQuery: QueryProp["query"], //! or just string directly?
) {
  console.log("potentialResults: ", potentialResults[1].metadata.content);
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
