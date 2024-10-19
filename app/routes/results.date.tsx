import ModeDateBar from '~/components/comics/mode-date-bar'
import ResultsPage from '~/components/comics/results-page'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { json } from "@remix-run/node";
import { getPotentialDateResults, getLatestAndSavedResults, commitSession  } from '~/utils/session-tools.server';

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
    const { results: potentialResults, query} = await getPotentialDateResults(request);

    const { latestResults, session } = await getLatestAndSavedResults(request, potentialResults);

    return json(
        { results: latestResults, query },
        { headers: { "Set-Cookie": await commitSession(session) } }
    );
}



export default function ResultsMeaningRoute() {
    const {results, query}= useLoaderData<LoaderData>()
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search;
    const mode = "date";

    return (
        <ResultsPage {...{ mode, results, isSearching, query }}>
            <ModeDateBar {...{ isSearching, query }} />
        </ResultsPage>
    )
}
