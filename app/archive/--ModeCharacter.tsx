import { Link } from "@remix-run/react";
import characters from "app/data/characters.json";

export default function ModeCharacter() {
  return (
    <div className="grid dmd:grid-cols-7 grid-cols-7 gap-x- mx-4 dmd:gap-x-6 gap-y-3 mt-2 -mb-2.5  max-w-2xl dmd:mx-auto overflow-x-scroll">
      {characters.map((character) => {
        return (
          <Link
            to={`/classic-search?search=${character.name}`}
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
    </div>
  );
}
