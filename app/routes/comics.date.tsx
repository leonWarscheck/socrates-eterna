import { LoaderFunctionArgs } from '@remix-run/node'
import ComicsPage from '~/components/comics/comics-page'
import ModeMeaning from '~/components/comics/mode-meaning'
import { json, redirect } from '@vercel/remix';
import { Form, Link, useLoaderData, useSearchParams, useNavigation } from '@remix-run/react';
import ModeDate from '~/components/comics/mode-date';





export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);

    if (url.searchParams.toString()) { // ! make consistent across comics routes
        const newUrl = url.pathname.replace("/comics/", "/results/") + url.search;

        return redirect(newUrl);
    }

    return null;
};



export default function ComicsMeaningRoute() {
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search
    const mode = "date";

    return (
        <ComicsPage {...{ isSearching, mode }}>
            <ModeDate {...{ isSearching }} />
        </ComicsPage>
    )
}
