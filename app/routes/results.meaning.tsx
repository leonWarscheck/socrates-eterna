import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";

import characters from "~/features/comics-pages/characters.json";
import ModeMeaningBar from "~/features/comics-pages/components/mode-meaning-bar";
import ResultsPage from "~/features/comics-pages/components/results-page";
import {
  commitSession,
  getCleanMeaningQuery,
  getSyncedResultsAndQuery,
  getNewResultsAndQuery,
} from "~/features/comics-pages/search-logic/search-helpers.server";
import useIsSearching from "~/features/comics-pages/use-is-searching";

// Recieves form data/ search params from mode-meaning and mode-meaning-bar.
export async function loader({ request }: LoaderFunctionArgs) {

  // Fetches (comic) results matching the meaning query. 
  const { results: newResults, query: newQuery } =
    await getNewResultsAndQuery(request);

  // Syncs results and query with session storage.
  const { syncedResults, syncedQuery, session } =
    await getSyncedResultsAndQuery(
      request,
      newResults,
      newQuery,
    );

  // Stops date and character queries from being rendered in the meaning search input.
  const cleanQuery = getCleanMeaningQuery({ query: syncedQuery, characters });

  return json(
    { results: syncedResults, query: cleanQuery },

    // Sends the synced session header to the browser.
    { headers: { "Set-Cookie": await commitSession(session) } },
  );
}

export default function ResultsMeaningRoute() {
  const { results, query } = useLoaderData<typeof loader>();
  const isSearching = useIsSearching();
  const mode = "meaning";

  return (
    <ResultsPage {...{ mode, results, isSearching }}>
      <ModeMeaningBar {...{ isSearching, query }} />
    </ResultsPage>
  );
}
