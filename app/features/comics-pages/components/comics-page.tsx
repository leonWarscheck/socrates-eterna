import ModeSelector from "~/features/comics-pages/components/mode-selector";
import { SearchComponentParentProps } from "../types";

export default function ComicsPage({
  children,
  isSearching,
  mode,
}: SearchComponentParentProps) {
  return (
    <main className="min-h- flex min-h-[calc(100dvh-7rem)] grow flex-col bg-gradient-to-b from-purple-1000 to-purple-900">
      <div
        className={`my-auto flex flex-col landscape-narrow:pt-[5dvh] ${isSearching && "animate-pulse"} `}
      >
        <h2 className="mt- tracking- wider mb-4 text-center font-socrates text-7xl font-bold text-purple-300 dmd:text-8xl">
          <img
            src="/main/eterna-raw.png"
            className="mx-auto mb-2 w-[300px]"
          ></img>
        </h2>
        {children}
        <ModeSelector mode={mode} />
      </div>
    </main>
  );
}
