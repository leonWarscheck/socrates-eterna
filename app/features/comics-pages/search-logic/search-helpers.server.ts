import { createCookieSessionStorage } from "@remix-run/node";

import {
  ComicCleaned,
  ComicLocal,
  ComicMatch,
  GetCleanMeaningQueryParams,
  QueryProp,
} from "~/features/comics-pages/types";

import { dateSearch } from "./date-search-logic";
import { semanticSearch } from "./semantic-search-logic";

// helpers for cleaning up results and query
export function getCleanResults(
  matches: ComicMatch[] | ComicLocal[],
): ComicCleaned[] {
  const cleanResults = matches.map((comic) => ({
    id: comic.id,
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

export async function getPotentialResultsAndQuery(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("search") || "";

  const results = query ? await semanticSearch(query) : "";

  return { results, query };
}

export async function getPotentialDateResults(request: Request) {
  const url = new URL(request.url);

  const dateType = url.searchParams.get("dateType") || "";
  const month = url.searchParams.get("month") || "";
  const day = url.searchParams.get("day") || "";
  const query = dateType === "month" ? month : dateType === "day" ? day : "";
  const results = query ? await dateSearch(query) : "";

  return { results, query };
}

export async function getLatestAndSavedResultsAndQuery(
  request: Request,
  potentialResults: ComicCleaned[] | "",
  potentialQuery: QueryProp["query"],
) {
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
