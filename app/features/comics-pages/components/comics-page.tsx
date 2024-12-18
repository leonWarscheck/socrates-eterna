import ModeSelector from "~/features/comics-pages/components/mode-selector";

import { SearchComponentParentProps } from "../types";

export default function ComicsPage({
  children,
  isSearching,
  mode,
}: SearchComponentParentProps) {
  return (
    <main className="min-h- flex min-h-dvh grow flex-col bg-gradient-to-b from-purple-1000 to-purple-900 md2:min-h-[calc(100dvh-7rem)]">
      <div
        className={`landscape-narrow:pt- [5dvh] my-auto flex flex-col pt-16 ${isSearching && "animate-pulse"} `}
      >
        <h2 className="mt- tracking- wider mb-4 text-center font-socrates text-7xl font-bold text-purple-300 dmd:text-8xl">
          <img
            src="/main/eterna-raw.png"
            className="mx-auto mb-2 w-[300px]"
            alt="socrates eterna as text logo"
          />
        </h2>
        {children}
        <ModeSelector mode={mode} />
      </div>
    </main>
  );
}
