import { LoaderFunctionArgs } from '@remix-run/node'
import type { LoaderFunction } from '@remix-run/node';

import ComicsPage from '~/components/comics/comics-page'
import ModeMeaning from '~/components/comics/mode-meaning'
import { json, redirect } from '@vercel/remix';
import {useNavigation } from '@remix-run/react';


export function getSearchParams(request: Request) : {search: string} {
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';

    return { search };
}



export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
    const { search } = getSearchParams(request);
    if (search) {
        const params = new URLSearchParams(
            Object.fromEntries(
                Object.entries({ search }).filter(([, value]) => value)
            )
        );
        return redirect(`/results/meaning?${params.toString()}`);
    }
    return json({ search });
};


export default function ComicsMeaningRoute() {
    const navigation = useNavigation();
    const isSearching: boolean = !!navigation.location?.search;
    const mode: string = "meaning";

    return (
        <ComicsPage {...{ isSearching, mode }}>
            <ModeMeaning {...{ isSearching }} />
        </ComicsPage>
    );
}

