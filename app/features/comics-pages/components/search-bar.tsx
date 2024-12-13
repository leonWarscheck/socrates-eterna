import ModeSelectorBar from "./mode-selector-bar";
import { SearchComponentParentProps } from "../types";

export default function SearchBar({ mode, children, isSearching }: SearchComponentParentProps) {
  return (
    <div className={`fixe mt-16 w-full bg-purple- 1000 min-h-30  ${isSearching && "animate-pulse"} `}>
      <div className="relative flex max-w-7xl w-full mx-auto min-h-30">
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          {children}
          <ModeSelectorBar mode={mode} />
        </div>
      </div>
    </div>
  );
}
