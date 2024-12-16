import { LoaderFunctionArgs } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

import ComicsPage from "~/features/comics-pages/components/comics-page";
import ModeMeaning from "~/features/comics-pages/components/mode-meaning";
import { redirect } from "@vercel/remix";
import { useNavigation } from "@remix-run/react";

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
  const navigation = useNavigation();
  const isSearching: boolean = !!navigation.location?.search;
  const mode: string = "meaning";

  return (
    <ComicsPage {...{ isSearching, mode }}>
      <ModeMeaning {...{ isSearching }} />
    </ComicsPage>
  );
}
