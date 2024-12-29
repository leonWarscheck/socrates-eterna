import ComicsPage from "~/features/comics-pages/components/comics-page";
import ModeCharacter from "~/features/comics-pages/components/mode-character";
import useIsSearching from "~/features/comics-pages/use-is-searching";

// There is no need for a loader here, because ModeCharacter navigates the user
// to `/results/character?search=${character.name}`, when the user clicks on one
// of the characters from the custom select component. The loader in
//`results.character` then processes the character query.

export default function ComicsMeaningRoute() {
  const isSearching = useIsSearching();
  const mode = "character";

  return (
    <ComicsPage {...{ isSearching, mode }}>
      <ModeCharacter {...{ isSearching }} />
    </ComicsPage>
  );
}
