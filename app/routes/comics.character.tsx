import ComicsPage from '~/features/comics-pages/components/comics-page'
import ModeCharacter from '~/features/comics-pages/components/mode-character';
import { useNavigation } from '@remix-run/react';

export default function ComicsMeaningRoute() {
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search
    const mode = "character";

    return (
        <ComicsPage {...{ isSearching, mode }}>
            <ModeCharacter {...{ isSearching }} />
        </ComicsPage>
    )
}
