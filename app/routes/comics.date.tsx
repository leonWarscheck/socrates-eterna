import { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigation } from "@remix-run/react";
import { redirect } from "@vercel/remix";

import ComicsPage from "~/features/comics-pages/components/comics-page";
import ModeDate from "~/features/comics-pages/components/mode-date";
import useIsSearching from "~/features/comics-pages/use-is-searching";

// Recieves the form data from mode-date via url search params and redirects to
// results.date, where the loader processes the query. 
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  if (url.search) {
    return redirect(`/results/date${url.search}`);
  }
  return false;
};

export default function ComicsMeaningRoute() {
  const isSearching = useIsSearching();
  const mode = "date";

  return (
    <ComicsPage {...{ isSearching, mode }}>
      <ModeDate {...{ isSearching }} />
    </ComicsPage>
  );
}
