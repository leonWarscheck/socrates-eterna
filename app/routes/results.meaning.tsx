import ResultsPage from '~/components/comics/results-page'
import ModeMeaningBar from '~/components/comics/mode-meaning-bar'
import characters from "app/data/characters.json"
import { useLoaderData, useNavigation } from '@remix-run/react'
import { json } from "@remix-run/node";
import { getLatestAndSavedResults, getPotentialResults, commitSession, getCleanMeaningQuery } from "~/utils/search-helpers.server"
import type { LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
    const { results: potentialResults, query: potentialQuery } = await getPotentialResults(request);
    const { latestResults, latestQuery, session } = await getLatestAndSavedResults(request, potentialResults, potentialQuery);
    const cleanQuery = getCleanMeaningQuery({ query: latestQuery, characters })
    return json(
        { results: latestResults, query: cleanQuery },
        { headers: { "Set-Cookie": await commitSession(session) } }
    );

}


export default function ResultsMeaningRoute() {
    const { results, query } = useLoaderData<typeof loader>()
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search;
    const mode = "meaning";

    return (
        <ResultsPage {...{ mode, results, isSearching }}>
            <ModeMeaningBar {...{ isSearching, query }} />
        </ResultsPage>
    )
}