import characters from "app/data/characters.json";
import { Link, useLocation } from "@remix-run/react";
import { useRef, useEffect } from "react";

export default function ModeCharacterBar({ setMode }) {
  const scrollContainerRef = useRef(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchName = searchParams.get("search");

  // Scroll to the matching character when the searchName changes
  useEffect(() => {
    if (searchName && scrollContainerRef.current) {
      const characterLink = Array.from(
        scrollContainerRef.current.children,
      ).find((child) => child.querySelector("p").textContent === searchName);
      if (characterLink) {
        characterLink.scrollIntoView({
          behavior: "smooth",
          inline: "center", // This will center the item in the view
        });
      }
    }
  }, [searchName]);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -420, // Adjust this value to scroll by more or less
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 420, // Adjust this value to scroll by more or less
      behavior: "smooth",
    });
  };

  return (
  <div className="max-w-4xl px-4 mx-auto mt-6 dmd:mt-4 flex flex-col dmd:flex-row" id="container">
      <Link
        onClick={() => setMode("meaning")}
        to="/classic-search"
        className="text-3xl dmd:text-[2.9rem]/9 text-center  dmd:mr-6 text-dilred font-bold dmd:mt-4 mb-4"
      >
        Dilbert
      </Link>
      <div className="flex min-w-0 items-center mx- mb- 4" id="carousel">
        <button
          onClick={scrollLeft}
          className="text-neutral-500  mr-1 pb-4 hover:text-dilred text-2xl "
        >
          ←
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll snap-proximity snap-x scroll-pl-1 gap-x-6 dmd:gap-x-10 px-1 "
          id="characters"
        >
          {characters.map((character) => (
            <Link
              to={`/classic-search?search=${character.name}`}
              key={character.name}
              className="shrink-0 snap-start snap-normal group  max-w-10 dmd:min-w-14 dmd:max-w-14 h-20 mb-2 mt-1 flex flex-col items-center"
            >
              <img
                src={`characters/${character.image}`}
                alt={`An image of ${character.name}`}
                className={`object-fill ${
                  searchName === character.name
                    ? "outline outline-4 outline-neutral-400"
                    : "group-hover:outline outline-4 outline-neutral-300"
                }`}
              />
              <p
                className={`text-center text-xs mt-1.5 leading-3 ${searchName === character.name ? "" : ""}`}
              >
                {character.name}
              </p>
            </Link>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="text-neutral-500 ml-1 pb-4 hover:text-dilred text-2xl"
        >
          →
        </button>
      </div>
    </div>
  );
}
