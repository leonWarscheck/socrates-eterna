import ResultsPage from "~/features/comics-pages/components/results-page";
import ModeMeaningBar from "~/features/comics-pages/components/mode-meaning-bar";
import characters from "~/features/comics-pages/characters.json";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";
import {
  getLatestAndSavedResultsAndQuery,
  getPotentialResultsAndQuery,
  commitSession,
  getCleanMeaningQuery,
} from "~/features/comics-pages/search-logic/search-helpers.server";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const { results: potentialResults, query: potentialQuery } =
    await getPotentialResultsAndQuery(request);
  const { latestResults, latestQuery, session } =
    await getLatestAndSavedResultsAndQuery(
      request,
      potentialResults,
      potentialQuery,
    );
  const cleanQuery = getCleanMeaningQuery({ query: latestQuery, characters });
  return json(
    { results: latestResults, query: cleanQuery },
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
