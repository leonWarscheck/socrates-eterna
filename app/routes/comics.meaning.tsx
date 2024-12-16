import type { LoaderFunction } from "@remix-run/node";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigation } from "@remix-run/react";
import { redirect } from "@vercel/remix";

import ComicsPage from "~/features/comics-pages/components/comics-page";
import ModeMeaning from "~/features/comics-pages/components/mode-meaning";

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
