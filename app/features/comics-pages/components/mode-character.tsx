import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

import characters from "../search-logic/setup-scripts-and-data/characters.json";
import type { Character, IsSearchingProp } from "../types";

export default function ModeCharacter({ isSearching }: IsSearchingProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | "">(
    "",
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (character: Character) => {
    setSelectedCharacter(character);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        id="sm md dropdown"
        className="relative mx-auto w-full max-w-xl px-4"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-10 w-full items-center justify-between border-2 border-primary1 bg-transparent p-3 text-left focus:bg-purple-1000 focus:outline-none ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
        >
          {selectedCharacter ? (
            <div className="flex items-center px-4">
              <img
                src={`/characters/${selectedCharacter.image}`}
                alt={`Character: ${selectedCharacter.name}`}
                className="mr-3 h-7 w-7 object-cover"
              />
              <span>{selectedCharacter.name}</span>
            </div>
          ) : (
            <span>Select a character</span>
          )}
          <svg
            className={`h-5 w-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute left-0 right-0 z-10 mx-4 -mt-0.5 h-[40dvh] overflow-y-scroll rounded-b-lg border-x-2 border-b-2 border-primary1 bg-purple-1000">
            {characters.map((character) => (
              <li
                key={character.name}
                className="cursor-pointer odd:bg-purple-950 hover:bg-primary1"
              >
                <Link
                  // The URL of this navigation is passed to the loader in results.character (as part of a request).
                  prefetch="intent"
                  to={`/results/character?search=${character.name}`}
                  className="text-sm"
                  onClick={() => handleSelect(character)}
                  role="button"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ")
                      handleSelect(character);
                  }}
                >
                  <div className="flex items-center text-base">
                    <div className="m-2 aspect-square h-14">
                      <img
                        src={`/characters/${character.image}`}
                        alt={`Character: ${character.name}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {character.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="mx-auto mt-6 flex w-full gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="mx-auto h-9 rounded-md bg-primary1 px-4 text-sm hover:bg-purple-600"
            disabled={isSearching}
          >
            Character Search
          </button>
        </div>
      </div>
    </>
  );
}
