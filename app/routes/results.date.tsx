import ModeDateBar from '~/components/comics/mode-date-bar'
import ResultsPage from '~/components/comics/results-page'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { json } from "@remix-run/node";
import { dateSearch } from '~/utils/date-search-logic';

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
    const dateType = url.searchParams.get('dateType') || "";

    const month = url.searchParams.get("month") || "";
    const day = url.searchParams.get("day") || "";
    const query = dateType === "month"? month : dateType === "day"? day :"";


    console.log("query/date:", !!query);
    console.log("dateType:", !!dateType)

    const results = query ? await dateSearch(query) : "";

    console.log("results/date:", !!results)

    return json({ query, results });
}

export default function ResultsMeaningRoute() {
    const { query, results}= useLoaderData<LoaderData>()
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search;
    const mode = "date";

    return (
        <ResultsPage {...{ mode, results, isSearching, query }}>
            <ModeDateBar {...{ isSearching, query }} />
        </ResultsPage>
    )
}
