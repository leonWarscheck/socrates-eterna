import ModeDateBar from '~/features/comics-pages/components/mode-date-bar'
import ResultsPage from '~/features/comics-pages/components/results-page'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getPotentialDateResults, getLatestAndSavedResultsAndQuery, commitSession } from '~/features/comics-pages/search-logic/search-helpers.server';



export async function loader({ request }: LoaderFunctionArgs) {
    const { results: potentialResults, query: potentialQuery } = await getPotentialDateResults(request);
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
    const mode = "date";

    return (
        <ResultsPage {...{ mode, results, isSearching }}>
            <ModeDateBar {...{ isSearching, query }} />
        </ResultsPage>
    )
}
