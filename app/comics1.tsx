import { MetaFunction, useLoaderData, Form, useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useState, useEffect } from "react";
import { semanticSearch } from "~/utils/semanticSearchLogic";
import { dateSearch } from "~/utils/dateSearchLogic";
import RenderResults from "~/components/Comics/RenderResults";
import SearchLanding from "~/components/Comics/SearchLanding";
import SearchBar from "~/components/Comics/SearchBar";

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

export async function loader({ request }) {
  const url = new URL(request.url);

  const query = url.searchParams.get("search") || "";
  console.log(`query: ${query ? query : "no query"}`);

  const dateQuery = url.searchParams.get("date") || "";
  console.log(`dateQuery: ${dateQuery ? dateQuery : "no dateQuery"}`);

  const results = query ? await semanticSearch(query) : dateQuery ? await dateSearch(dateQuery) : [];

  return json({ query, dateQuery, results });
}



export default function comicSearch() {
  const { query, results } = useLoaderData<LoaderData>();
  const [mode, setMode] = useState("meaning");
  const [dateQuery, setDateQuery] = useState("");

  const navigation = useNavigation();
  const isSearching = navigation.location?.search
  console.log("mode: ", mode)

  // useEffect(() => setMode("date"), []);

  return (
    <main className=" min-h- flex flex-col grow min-h-[calc(100dvh-7rem)] bg-gradient-to-b from-purple-1000 to-purple-900">
      {!query && !dateQuery && <SearchLanding {...{ query, setMode, mode, isSearching, dateQuery, setDateQuery }} />}
      {(query || dateQuery) && <SearchBar {...{ query, setMode, mode, isSearching, dateQuery, setDateQuery }} />}
      {(query || dateQuery) && <RenderResults loaderResults={results} />}
    </main>
  );
}
