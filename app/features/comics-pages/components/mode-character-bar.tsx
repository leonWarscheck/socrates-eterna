import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

import characters from "../characters.json";
import type { Character, ModeBarProps } from "../types";

export default function ModeCharacterBar({
  isSearching,
  query: searchName,
}: ModeBarProps) {
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
    if (searchName) {
      const characterBySearchName = characters.find(
        (character) => character.name === searchName,
      );
      if (characterBySearchName) {
        handleSelect(characterBySearchName);
      }
    }
  }, [searchName]);

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
    <div
      className="mb-4 mt-6 flex w-full max-w-4xl flex-col px-4 md1:mt-8 md1:flex-row"
      ref={dropdownRef}
    >
      <Link
        to="/comics/meaning"
        className="mx-auto mb-4 text-center text-3xl font-bold text-primary1 md1:-ml-1 md1:mb-0 md1:text-[2.9rem]/9"
      >
        <div className="mx-auto mt-[1.5px] aspect-[1404/245] h-9 md1:mx-0">
          <img
            src="/main/socrates-raw.png"
            alt="socrates as text logo"
            className="h-full w-full"
          />
        </div>
      </Link>
      <div id="sm md dropdown" className="relative w-full grow md1:ml-6">
        <button
          disabled={isSearching}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-10 w-full items-center justify-between border-2 border-primary1 bg-transparent p-3 text-left focus:bg-purple-1000 focus:outline-none ${
            isOpen ? "rounded-t-lg" : "rounded-lg"
          }`}
        >
          {selectedCharacter ? (
            <div className="flex items-center">
              <img
                src={`/characters/${selectedCharacter.image}`}
                alt={`${selectedCharacter.name}`}
                className="mr-3 h-7 w-7 object-cover"
              />
              <span>{selectedCharacter.name}</span>
            </div>
          ) : (
            <span>Select a character</span>
          )}
          <svg
            className={`h-5 w-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
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
          <ul className="absolute left-0 right-0 z-10 -mt-0.5 h-[40dvh] overflow-y-scroll rounded-b-lg border-x-2 border-b-2 border-primary1 bg-purple-1000">
            {characters.map((character) => (
              <li
                key={character.name}
                className="cursor-pointer odd:bg-purple-950 hover:bg-primary1"
              >
                <Link
                  prefetch="intent"
                  to={`/results/character?search=${character.name}`}
                  className="w-full text-sm"
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
      </div>
    </div>
  );
}
