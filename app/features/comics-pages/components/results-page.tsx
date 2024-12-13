import RenderResults from "~/features/comics-pages/components/render-results";
import SearchBar from "~/features/comics-pages/components/search-bar";
import { SearchComponentParentProps, ResultsProp } from "../types";



export default function ResultsPage({ children, results, mode, isSearching }: SearchComponentParentProps & ResultsProp) {

  return (
    <main className=" relative flex flex-col grow min-h-[calc(100dvh-7rem)] bg-gradient-to-b from-purple-1000 to-purple-900">
      <SearchBar {...{ mode, isSearching }}>{children}</SearchBar>
      <RenderResults results={results} />
    </main>
  )
}
