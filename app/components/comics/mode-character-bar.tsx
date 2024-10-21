import characters from "app/data/characters.json";
import { Link, useLocation } from "@remix-run/react";
import { useRef, useEffect, useState } from "react";

export default function ModeCharacterBar({ isSearching, query: searchName }) {
  const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const searchName = searchParams.get("search");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (character) => {
    setSelectedCharacter(character);
    setIsOpen(false);
  };

  useEffect(() => {
    if (searchName) {
      const characterBySearchName = characters.find(
        (character) => character.name === searchName
      );

      if (characterBySearchName) {
        handleSelect(characterBySearchName);
      }
    }
  }, [searchName]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div className="max-w-4xl flex flex-col dmd:flex-row  w-full    px-4 mt-6 dmd:mt-8 mb-4 bg-teal- "
      ref={dropdownRef} >
      <Link
        to="/comics/meaning"
        className=" text-3xl dmd:text-[2.9rem]/9 text-center text-primary1 w-[303.5px] font-bold mb-4 dmd:mb-0 mx-auto -ml-1"
      >
        <div className=" aspect-[1404/245] h-9 mt-[1.5px]">
          <img src="/main/socrates-raw.png" alt="" className=" h-full w-full" />
        </div>
      </Link>
      <div id="sm md dropdown" className="relative max-w- xl dmd:ml-6 w-full dmd:hidde ">
        <button
          disabled={isSearching}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full p-3 focus:bg-purple-1000 focus:outline-none border-2  h-10  bg-transparent text-left border-primary1 ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
        >
          {selectedCharacter ? (
            <div className="flex items-center">
              <img
                src={`/characters/${selectedCharacter.image}`}
                alt={`An image of ${selectedCharacter.name}`}
                className="w-7 h-7 mr-3 object-cover"
              />
              <span>{selectedCharacter.name}</span>
            </div>
          ) : (
            <span className="">Select a character</span>
          )}
          <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""
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
          <ul className="absolute w-ful mt- 1 bg-purple-1000 border-x-2 border-b-2 -mt-0.5 border-primary1 rounded-b-lg z-10 overflow-y-scroll h-[40dvh] right-0 left-0 ">
            {characters.map((character) => (
              <li
                key={character.name}
                onClick={() => handleSelect(character)}
                className="p- hover:bg-primary1 cursor-pointer odd:bg-purple-950"
              ><Link
                prefetch="intent"
                to={`/results/character?search=${character.name}`}
                className="text-sm"
              >
                  <div className="flex items-center text-base  ">
                    <div className=" aspect-square h-14 m-2">
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

      </div >
    </div>
  );
}
