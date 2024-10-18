import { LoaderFunctionArgs } from '@remix-run/node'
import ComicsPage from '~/components/comics/comics-page'
import ModeMeaning from '~/components/comics/mode-meaning'
import { json, redirect } from '@vercel/remix';
import { Form, Link, useLoaderData, useSearchParams, useNavigation } from '@remix-run/react';
import ModeCharacter from '~/components/comics/mode-character';




export function getSearchParams(request: Request) {
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';

    return { search };
}

export async function loader({ request }: LoaderFunctionArgs) {

    const { search } = getSearchParams(request);
    // console.log("queryChar:", search);
    if (search) {
        const params = new URLSearchParams(
            Object.fromEntries(
                Object.entries({ search }).filter(
                    ([_, value]) => value,
                ),
            ),
        );
        return redirect(`/results/character?${params.toString()}`);
    }

    return false; 
}

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
