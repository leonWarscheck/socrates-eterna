import { Link } from "@remix-run/react";
import characters from "../characters.json";
import { useState, useRef, useEffect } from "react";
import type { Character, IsSearchingProp } from "../types";


export default function ModeCharacter({ isSearching }: IsSearchingProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (character: Character) => {
    setSelectedCharacter(character);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      <div id="sm md dropdown" className="relative max-w-xl w-full mx-auto px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full p-3 focus:bg-purple-1000 focus:outline-none border-2 h-10 bg-transparent text-left border-primary1 ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
        >
          {selectedCharacter ? (
            <div className="flex items-center px-4">
              <img
                src={`/characters/${selectedCharacter.image}`}
                alt={`An image of ${selectedCharacter.name}`}
                className="w-7 h-7 mr-3 object-cover"
              />
              <span>{selectedCharacter.name}</span>
            </div>
          ) : (
            <span>Select a character</span>
          )}
          <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
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
          <ul className="absolute bg-purple-1000 border-x-2 border-b-2 -mt-0.5 border-primary1 rounded-b-lg z-10 overflow-y-scroll h-[40dvh] right-0 left-0 mx-4">
            {characters.map((character) => (
              <li
                key={character.name}
                onClick={() => handleSelect(character)}
                className="hover:bg-primary1 cursor-pointer odd:bg-purple-950"
              >
                <Link
                  to={`/results/character?search=${character.name}`}
                  className="text-sm"
                >
                  <div className="flex items-center text-base">
                    <div className="aspect-square h-14 m-2">
                      <img
                        src={`/characters/${character.image}`}
                        alt={`An image of ${character.name}`}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    {character.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="flex gap-4 mx-auto mt-6 w-full">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary1 text-sm hover:bg-purple-600 px-2 h-9 mx-auto rounded-md"
            disabled={isSearching}
          >
            Character Search
          </button>
        </div>
      </div>
    </>
  );
}
