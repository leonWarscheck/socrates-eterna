import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";

import ModeDateBar from "~/features/comics-pages/components/mode-date-bar";
import ResultsPage from "~/features/comics-pages/components/results-page";
import {
  commitSession,
  getSyncedResultsAndQuery,
  getNewDateResults,
} from "~/features/comics-pages/search-logic/search-helpers.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { results: newResults, query: newQuery } =
    await getNewDateResults(request);
  const { syncedResults, syncedQuery, session } =
    await getSyncedResultsAndQuery(
      request,
      newResults,
      newQuery,
    );

  return json(
    { results: syncedResults, query: syncedQuery },
    { headers: { "Set-Cookie": await commitSession(session) } },
  );
}

export default function ResultsMeaningRoute() {
  const { results, query } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSearching = !!navigation.location?.search;
  const mode = "date";

  return (
    <ResultsPage {...{ mode, results, isSearching }}>
      <ModeDateBar {...{ isSearching, query }} />
    </ResultsPage>
  );
}
