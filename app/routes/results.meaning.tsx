import ResultsPage from '~/components/comics/results-page'
import ModeMeaningBar from '~/components/comics/mode-meaning-bar'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { json } from "@remix-run/node";
import { getLatestAndSavedResults, getPotentialResults, commitSession } from "~/utils/session-tools.server"

interface Metadata {
    filename: string;
    title: string;
    publishedAt: string;
}

interface ComicData {
    id: string;
    score: number;
    values: any[];
    metadata: Metadata;
}

interface LoaderData {
    query: string;
    dateQuery: string;
    results: ComicData[];
}


export async function loader({ request }) {
    const potentialResults = await getPotentialResults(request);

    const { latestResults, session } = await getLatestAndSavedResults(request, potentialResults);

    return json(
        { results: latestResults },
        { headers: { "Set-Cookie": await commitSession(session) } }
    );
}


export default function ResultsMeaningRoute() {
    const { results } = useLoaderData<LoaderData>()
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search;
    const mode = "meaning";
    const query = ""

    return (
        <ResultsPage {...{ mode, results, isSearching, query }}>
            <ModeMeaningBar {...{ isSearching, query }} />
        </ResultsPage>
    )
}