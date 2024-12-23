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

export async function loader({ request }: LoaderFunctionArgs) {
  const { results: newResults, query: newQuery } =
    await getNewResultsAndQuery(request);
  const { syncedResults, syncedQuery, session } =
    await getSyncedResultsAndQuery(
      request,
      newResults,
      newQuery,
    );
  const cleanQuery = getCleanMeaningQuery({ query: syncedQuery, characters });
  return json(
    { results: syncedResults, query: cleanQuery },
    { headers: { "Set-Cookie": await commitSession(session) } },
  );
}

export default function ResultsMeaningRoute() {
  const { results, query } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSearching = !!navigation.location?.search;
  const mode = "meaning";

  return (
    <ResultsPage {...{ mode, results, isSearching }}>
      <ModeMeaningBar {...{ isSearching, query }} />
    </ResultsPage>
  );
}
