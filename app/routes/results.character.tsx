import ResultsPage from '~/features/comics-pages/components/results-page'
import { useNavigation, useLoaderData } from '@remix-run/react'
import ModeCharacterBar from '~/features/comics-pages/components/mode-character-bar'
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getLatestAndSavedResultsAndQuery, getPotentialResults, commitSession } from "~/features/comics-pages/search-logic/search-helpers.server"


export async function loader({ request }: LoaderFunctionArgs) {
    const { results: potentialResults, query: potentialQuery } = await getPotentialResults(request);
    const { latestResults, latestQuery, session } = await getLatestAndSavedResultsAndQuery(request, potentialResults, potentialQuery);

    return json(
        { results: latestResults, query: latestQuery },
        { headers: { "Set-Cookie": await commitSession(session) } }
    );
}


export default function ResultsMeaningRoute() {
    const { results, query } = useLoaderData<typeof loader>()
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search;
    const mode = "character";

    return (
        <ResultsPage {...{ mode, results, isSearching, query }}>
            <ModeCharacterBar {...{ isSearching, query }} />
        </ResultsPage>
    )
}
