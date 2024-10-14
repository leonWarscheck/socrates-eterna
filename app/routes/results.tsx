import { MetaFunction, useLoaderData, useNavigation } from "@remix-run/react";
import ModeSelectorBar from "~/components/comics/mode-selector-bar";
import ModeMeaningBar from "~/components/comics/mode-meaning-bar";
import ModeDateBar from "~/components/comics/mode-date-bar";
import ModeCharacterBar from "~/components/comics/mode-character-bar";
import { getSearchParams } from './comics';
import { json} from '@vercel/remix';
import type { LoaderFunctionArgs } from '@remix-run/node';
import RenderResults from "~/components/comics/render-results";
import { semanticSearch } from "~/utils/semanticSearchLogic";
import { dateSearch } from "~/utils/dateSearchLogic";
import SearchBar from "~/components/comics/search-bar";
import { useState, useEffect } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "Comics | Socrates Eterna" },
    { name: "Explore the Classics", content: "AI Powered Search by Meaning, Date and Characters!" },
  ];
};

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



export async function loader({ request }: LoaderFunctionArgs) {
  const { mode, query } = getSearchParams(request);
  const dateQuery = mode === "date" ? query : "";
  // console.log("dateQuery:", dateQuery);

  const semanticQuery = mode === "meaning" || mode === "character" ? query : "";
  // console.log("semanticQuery:", semanticQuery);
  console.log("mode:", mode, "query:", query);
  const results = semanticQuery ? await semanticSearch(semanticQuery) : dateQuery ? await dateSearch(dateQuery) : "";
  // console.log("results", results)
  return json({ mode, results, query });
}


export default function Results() {
  const { mode, query, results: latestResults } = useLoaderData<typeof loader>();
  const [results, setResults] = useState(latestResults)
  const navigation = useNavigation();
  const isSearching = navigation.location?.search

  useEffect(() => {
    if (latestResults.length) {
      setResults(latestResults);
    }
  }, [latestResults]);

  return (
    <main className=" relative flex flex-col grow min-h-[calc(100dvh-7rem)] bg-gradient-to-b from-purple-1000 to-purple-900">
      <SearchBar {...{ mode, query, isSearching }} />
      <RenderResults loaderResults={results} />
    </main>
  )
}
