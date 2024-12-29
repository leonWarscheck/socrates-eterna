import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import ModeMeaningBar from "~/features/comics-pages/components/mode-meaning-bar";
import ResultsPage from "~/features/comics-pages/components/results-page";
import {
  commitSession,
  getCleanMeaningQuery,
  getNewResultsAndQuery,
  getSyncedResultsAndQuery,
} from "~/features/comics-pages/search-logic/search-helpers.server";
import characters from "~/features/comics-pages/search-logic/setup-scripts-and-data/characters.json";
import useIsSearching from "~/features/comics-pages/use-is-searching";

//Receives URL request including form data as search params from `mode-meaning`
//and `mode-meaning-bar`.
export async function loader({ request }: LoaderFunctionArgs) {
  const { results: newResults, query: newQuery } =
    await getNewResultsAndQuery(request);

  const { syncedResults, syncedQuery, session } =
    await getSyncedResultsAndQuery(request, newResults, newQuery);

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
