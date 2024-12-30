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

/*
helpers for cleaning up results and query
*/

/**
 * Trimms unneeded keys that get additionally returned in `dateSearch` or by
 * Pinecone DB like `values`, sparseValues` and `score`.
 */
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

/**
 * Filters out queries that could be coming from character search or date
 * search, to prevent them from being rendered in the meaning search input, when
 * switching between search modes in the search bar.
 */
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

/*
helpers for managing session storage of results and query
*/

export const { getSession, commitSession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: ["r33m11xr0ck55"],
    sameSite: "lax",
  },
});

/**
 * Gets query from request object and calls the core engine `semanticSearch` to
 * fetch (comic) results matching the query.
 *
 * @param request - Request object from loaders in `results.meaning` and
 * `results.character`.
 * @returns The comic results and the query.
 */
export async function getNewResultsAndQuery(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("search") || "";
  const results = query ? await semanticSearch(query) : ("" as const);
  return { results, query };
}

/**
 * Gets date query from request object and calls `dateSearch` to fetch (comic)
 * results matching the date query.
 *
 * @param request - Request object from loader in `result.date`.
 * @returns The comic results and the date query.
 */
export async function getNewDateResultsAndQuery(request: Request) {
  const url = new URL(request.url);
  const query =
    url.searchParams.get("month") || url.searchParams.get("day") || "";
  const results = query ? await dateSearch(query) : ("" as const);
  return { results, query };
}

/**
 * Syncronizes results and query with session storage. This enables persisting
 * rendered comics when switching between the different search mode routes.
 */
export async function getSyncedResultsAndQuery(
  request: Request,
  newResults: ComicCleaned[] | "",
  newQuery: QueryProp["query"],
) {
  // Recieves session from browser via the request object.
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
