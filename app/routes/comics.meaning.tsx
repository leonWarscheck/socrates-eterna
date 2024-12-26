import type { LoaderFunction } from "@remix-run/node";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigation } from "@remix-run/react";
import { redirect } from "@vercel/remix";

import ComicsPage from "~/features/comics-pages/components/comics-page";
import ModeMeaning from "~/features/comics-pages/components/mode-meaning";
import useIsSearching from "~/features/comics-pages/use-is-searching";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  if (url.search) {
    return redirect(`/results/meaning${url.search}`);
  }

  return false;
};

export default function ComicsMeaningRoute() {
  const isSearching: boolean = useIsSearching();
  const mode: string = "meaning";

  return (
    <ComicsPage {...{ isSearching, mode }}>
      <ModeMeaning {...{ isSearching }} />
    </ComicsPage>
  );
}
