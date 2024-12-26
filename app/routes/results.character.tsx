import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";

import ModeCharacterBar from "~/features/comics-pages/components/mode-character-bar";
import ResultsPage from "~/features/comics-pages/components/results-page";
import {
  commitSession,
  getSyncedResultsAndQuery,
  getNewResultsAndQuery,
} from "~/features/comics-pages/search-logic/search-helpers.server";
import useIsSearching from "~/features/comics-pages/use-is-searching";

// Recieves form data/ search params from mode-character and mode-character-bar.
export async function loader({ request }: LoaderFunctionArgs) {

  // Fetches (comic) results matching the character query. 
  const { results: newResults, query: newQuery } =
    await getNewResultsAndQuery(request);

  // Syncs results and query with session storage.
  const { syncedResults, syncedQuery, session } =
    await getSyncedResultsAndQuery(
      request,
      newResults,
      newQuery,
    );

  return json(
    { results: syncedResults, query: syncedQuery },

    // Sends the synced session header to the browser.
    { headers: { "Set-Cookie": await commitSession(session) } },
  );
}

export default function ResultsMeaningRoute() {
  const { results, query } = useLoaderData<typeof loader>();
  const isSearching = useIsSearching();
  const mode = "character";

  return (
    <ResultsPage {...{ mode, results, isSearching, query }}>
      <ModeCharacterBar {...{ isSearching, query }} />
    </ResultsPage>
  );
}
