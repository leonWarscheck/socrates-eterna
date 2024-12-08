import RenderResults from "~/components/comics/render-results";
import SearchBar from "~/components/comics/search-bar";
import type { Props } from "./types";



export default function ResultsPage( {children, results, mode, isSearching}: Props) {
  console.log("results/pagecomp:", !!results)

  return (
    <main className=" relative flex flex-col grow min-h-[calc(100dvh-7rem)] bg-gradient-to-b from-purple-1000 to-purple-900">
      <SearchBar {...{ mode, isSearching }}>{children}</SearchBar>
      <RenderResults loaderResults={results} />
    </main>
  )
}
