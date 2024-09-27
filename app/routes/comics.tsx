import { MetaFunction, useLoaderData, Form, useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useState, useEffect } from "react";
import { semanticSearch } from "~/utils/semanticSearchLogic";
import RenderResults from "~/components/renderResults";
import SearchLanding from "~/components/SearchLanding";
import SearchBar from "~/components/SearchBar";

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
  results: ComicData[];
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("search") || "";
  console.log(`query: ${query ? query : "no query"}`);
  const results = query ? await semanticSearch(query) : [];

  return json({ query, results });
}

export default function ClassicSearch() {
  const { query, results } = useLoaderData<LoaderData>();
  const [mode, setMode] = useState("meaning");

  const navigation = useNavigation();
  const isSearching = navigation.location?.search


  useEffect(() => setMode("meaning"), []);

  return (
    <main className=" min-h-dvh flex flex-col grow min-h-[calc(100dvh-1.5rem)">
      {!query && <SearchLanding query={query} setMode={setMode} mode={mode} isSearching={isSearching} />}
      {query && <SearchBar query={query} setMode={setMode} mode={mode} isSearching={isSearching}/> }
      {query && <RenderResults loaderResults={results} />}
    </main>
  );
}
