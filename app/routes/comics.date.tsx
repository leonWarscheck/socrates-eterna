import { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigation } from "@remix-run/react";
import { redirect } from "@vercel/remix";

import ComicsPage from "~/features/comics-pages/components/comics-page";
import ModeDate from "~/features/comics-pages/components/mode-date";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  if (url.search) {
    return redirect(`/results/date${url.search}`);
  }

  return false;
};

export default function ComicsMeaningRoute() {
  const navigation = useNavigation();
  const isSearching = !!navigation.location?.search;
  const mode = "date";

  return (
    <ComicsPage {...{ isSearching, mode }}>
      <ModeDate {...{ isSearching }} />
    </ComicsPage>
  );
}
