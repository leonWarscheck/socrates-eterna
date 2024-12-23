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
  // Returns trimmed results objects without unneeded keys.
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
  // Filters out queries that could have come from character search to not get
  // rendered in the meaning search input, when switching between search modes
  // in the search bar.
  const characterBySearchName = characters.find(
    (character) => character.name === query,
  );
  const noCharacterQuery = characterBySearchName ? "" : query;

  // Does the same for date queries.
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

export async function getNewResultsAndQuery(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("search") || "";
  const results = query ? await semanticSearch(query) : ("" as const);
  return { results, query };
}

export async function getNewDateResults(request: Request) {
  const url = new URL(request.url);
  const query =
    url.searchParams.get("month") || url.searchParams.get("day") || "";
  const results = query ? await dateSearch(query) : ("" as const);
  return { results, query };
}

export async function getSyncedResultsAndQuery(
  request: Request,
  newResults: ComicCleaned[] | "",
  newQuery: QueryProp["query"],
) {
  // Recieves session from browser.
  const session = await getSession(request.headers.get("Cookie"));

  // If newResults are available, returns and saves them to session,
  // else returns backup results that got saved before.
  const savedResults = session.get("savedResults");
  const syncedResults = newResults || savedResults;
  if (newResults) {
    session.set("savedResults", syncedResults);
  }

  const savedQuery = session.get("savedQuery");
  const syncedQuery = newQuery || savedQuery;
  if (newQuery) {
    session.set("savedQuery", syncedQuery);
  }

  // Also returns the newly modified session, as we can only push it to the
  // browser from the loader return.
  return { syncedResults, syncedQuery, session };
}
