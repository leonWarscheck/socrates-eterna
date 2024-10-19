import React from 'react'
import SearchBar from '~/components/comics/search-bar'
import ResultsPage from '~/components/comics/results-page'
import ModeMeaningBar from '~/components/comics/mode-meaning-bar'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { semanticSearch } from '~/utils/semantic-search-logic'
import { json, createCookieSessionStorage } from "@remix-run/node";

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

// ! NOT stable
{/* 
export async function getPotentialResults(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("search") || "";
    console.log(`query: ${query ? query : "no query"}`);

    const results = query ? await semanticSearch(query) : [];
    console.log("results:", results)

    return results
}

const { getSession, commitSession } = createCookieSessionStorage({
         cookie: {
      name: "__session",
      secrets: ["r33m11xr0ck55"],
      sameSite: "lax",
    },
});

export async function getLatestAndSavedResults(potentialResults) {
    

    const session = await getSession()

    const savedResults = await session.get("savedResults")
    const latestResults = potentialResults ?? savedResults

    async function saveLatestResults(latestResults) {
        session.set("savedResults", latestResults)
        
        // await commitSession(session)

    }
    await saveLatestResults(latestResults);

    return latestResults

}

export async function loader({ request }) {
    const potentialResults = await getPotentialResults(request)
    const results = await getLatestAndSavedResults(potentialResults)

    const session = await getSession();  // To commit the session
    return json({ results }, { headers: { "Set-Cookie": await commitSession(session) } });

}

*/}





// ! stable
export async function loader({ request }) {
    const url = new URL(request.url);

    const query = url.searchParams.get("search") || "";
    console.log(`query: ${query ? query : "no query"}`);

    const results = query ? await semanticSearch(query) : [];
    console.log("results:", results)

    return json({ query, results });
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