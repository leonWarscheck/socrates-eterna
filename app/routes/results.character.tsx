import React from 'react'
import SearchBar from '~/components/comics/search-bar'
import ResultsPage from '~/components/comics/results-page'
import ModeMeaningBar from '~/components/comics/mode-meaning-bar'
import { useNavigation, useLoaderData } from '@remix-run/react'
import ModeCharacterBar from '~/components/comics/mode-character-bar'
import { semanticSearch } from '~/utils/semanticSearchLogic'
import { json } from "@remix-run/node";

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
    const url = new URL(request.url);

    const query = url.searchParams.get("search") || "";
    console.log(`query: ${query ? query : "no query"}`);

    const results = query ? await semanticSearch(query) : [];
    // console.log("results:", results)

    return json({ query, results });
}


export default function ResultsMeaningRoute() {
    const { results, query } = useLoaderData<LoaderData>()
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search;
    const mode = "character";
    // const query =""

    return (
        <ResultsPage {...{ mode, results, isSearching, query }}>
            <ModeCharacterBar {...{ isSearching }} />
        </ResultsPage>
    )
}
