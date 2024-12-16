import { SearchComponentParentProps } from "../types";
import ModeSelectorBar from "./mode-selector-bar";

export default function SearchBar({
  mode,
  children,
  isSearching,
}: SearchComponentParentProps) {
  return (
    <div
      className={`fixe bg-purple- 1000 min-h-30 mt-16 w-full ${isSearching && "animate-pulse"} `}
    >
      <div className="min-h-30 relative mx-auto flex w-full max-w-7xl">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          {children}
          <ModeSelectorBar mode={mode} />
        </div>
      </div>
    </div>
  );
}
