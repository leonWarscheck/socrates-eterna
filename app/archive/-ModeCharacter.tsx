import { Link } from "@remix-run/react";
import characters from "app/data/characters.json";

export default function ModeCharacter() {
  return (
    <div className=" flex items-center mx-auto -mb-4 max-w-xl">
      <p className="text-neutral-500 mr-2 hover:text-dilred text-2xl">←</p>
      <div className="flex  mx-aut  max-h-24  overflow-x-scroll   gap-2">
        {characters.map((character) => {
          return (
            <Link
              to={`/classic-search?search=${character.name}`}
              key={character.name}
              className=" shrink-0 group max-w-14 h-20 mx-2 mb-2 mt-1 hover:cursor-pointe  flex flex-col items-center"
            >
              <img
                src={`characters/${character.image}`}
                alt={`An image of ${character.name}`}
                className=" group-hover:outline outline-4 outline-neutral-200  object-fill m- "
              />
              <p className="text-center text-xs text- mt-1 leading-3 ">
                {character.name}
              </p>
            </Link>
          );
        })}
      </div>
      <p className="text-neutral-500 ml-2 hover:text-dilred text-2xl">→</p>
    </div>
  );
}
