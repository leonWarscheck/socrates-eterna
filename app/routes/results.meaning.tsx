import ResultsPage from '~/components/comics/results-page'
import ModeMeaningBar from '~/components/comics/mode-meaning-bar'
import characters from "app/data/characters.json"
import { useLoaderData, useNavigation } from '@remix-run/react'
import { json } from "@remix-run/node";
import { getLatestAndSavedResults, getPotentialResults, commitSession, cleanMeaningQuery } from "~/utils/session-tools.server"

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
   console.log("")
    const { results: potentialResults, query: potentialQuery } = await getPotentialResults(request);
    const { latestResults, latestQuery, session } = await getLatestAndSavedResults(request, potentialResults, potentialQuery);
    const cleanQuery = cleanMeaningQuery(latestQuery, characters)
    

    return json(
        { results: latestResults, query: cleanQuery },
        { headers: { "Set-Cookie": await commitSession(session) } }
    );
}


export default function ResultsMeaningRoute() {
    const { results, query } = useLoaderData<LoaderData>()
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search;
    const mode = "meaning";
    console.log("query/reme:", query)

    return (
        <ResultsPage {...{ mode, results, isSearching }}>
            <ModeMeaningBar {...{ isSearching, query }} />
        </ResultsPage>
    )
}