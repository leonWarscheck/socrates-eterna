import { Link } from "@remix-run/react";
import characters from "app/data/characters.json";
import { useState, useRef, useEffect } from "react";


export default function ModeCharacter({ isSearching }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (character) => {
    setSelectedCharacter(character);
    setIsOpen(false);
  };

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
    <>

      <div id="sm md dropdown" className="relative max-w-xl w-full dmd:hidde  mx-auto px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full   p-3 focus:bg-purple-1000 focus:outline-none border-2  h-10  bg-transparent text-left border-primary1 ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
        >
          {selectedCharacter ? (
            <div className="flex items-center px-4">
              <img
                src={`characters/${selectedCharacter.image}`}
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
          <ul className="absolute w-ful mt- 1 bg-purple-1000 border-x-2 border-b-2 -mt-0.5 border-primary1 rounded-b-lg z-10 overflow-y-scroll h-[40dvh] right-0 left-0 mx-4">
            {characters.map((character) => (
              <li
                key={character.name}
                onClick={() => handleSelect(character)}
                className="p-2 hover:bg-primary1 cursor-pointer odd:bg-purple-950"
              ><Link
                to={`/results?mode=character&search=${character.name}`}
                className="text-sm"
              >
                  <div className="flex items-center text-base">

                    <img
                      src={`characters/${character.image}`}
                      alt={`An image of ${character.name}`}
                      className="w-14 h-14 mr-3 object-cover"
                    />

                    {character.name}

                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="flex gap-4 mx-auto mt-6 w-full bg-amber-">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary1 text-sm small:text-sm hover:bg-purple-600  px-2 h-9 mx-auto rounded-md"
            disabled={isSearching}
          >
            Character Search
          </button>
        </div>
      </div >

      {/* <div id="sm md dropdown" className="relative max-w-xl mx-auto px-4 w-full dmd:hidde landscape-narrow-2:block bg-pink-"
        ref={dropdownRef} >
        <button
          disabled={isSearching}
          onClick={() => setIsOpen(!isOpen)}
          className=" flex items-center justify-between w-full p-3  border-2 border-neutral-200  h-10  bg-white text-left  "
        >
          {selectedCharacter ? (
            <div className="flex items-center">
              <img
                loading="lazy"
                src={`characters/${selectedCharacter.image}`}
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
          <ul className="absolute w-ful mt- 1 bg-white border-x-2 border-b-2 border-neutral-200 z-10 overflow-y-scroll h-[30dvh] right-4 left-4 ">
            {characters.map((character) => (
              <li
                key={character.name}
                onClick={() => handleSelect(character)}
                className="p-2 hover:bg-gray-100 cursor-pointer odd:bg-neutral-50"
              ><Link
                prefetch="intent"
                to={`/comics?search=${character.name}`}
                className="text-sm"
              >
                  <div className="flex items-center">

                    <img
                      src={`characters/${character.image}`}
                      alt={`An image of ${character.name}`}
                      className="w-12 h-12 mr-3 object-cover"
                    />

                    {character.name}

                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}


        <div className="flex gap-4 mx-auto mt-6 w-full bg-amber-">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary1 text-sm small:text-sm hover:bg-purple-600  px-2 h-9 mx-auto rounded-md"
          >
           Character Search
          </button>
        </div>
      </div > */}





      {/* <div id="lg grid" className="dmd:grid dmd:grid-cols-7 grid-cols-7 gap-x- hidden mx-4 dmd:gap-x-6 gap-y-3 mt-2 -mb-2.5  max-w-2xl dmd:mx-auto overflow-x-scroll landscape-narrow-2:hidden">
        {characters.map((character) => {
          return (
            <Link
            prefetch="intent"
              to={`/comics?search=${character.name}`}
              key={character.name}
              className=" shrink-0 group  min-w-14 max-w-14  h-20 mx-2 mb-2 mt-1  flex flex-col items-center"
            // onClick={}
            >
              <img
                src={`characters/${character.image}`}
                alt={`An image of ${character.name}`}
                className=" group-hover:outline outline-4  roup-hover:max-w-16 outline-neutral-300  object-fill  "
              />
              <p className="text-center text-xs text- mt-1.5 leading-3 ">
                {character.name}
              </p>
            </Link>
          );
        })}
      </div> */}
    </>
  );
}
