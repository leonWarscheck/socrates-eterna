import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

import { keywords } from "~/features/comics-pages/search-logic/setup-scripts-and-data/keywords";

export default function RandomComicButton() {
  const [keyword, setKeyword] = useState("");

  // Returns random keyword from a list of topics related to socrates. On
  // clicking the Link-(button), the keywords are then used as the query,
  // similar to the 'Lucky Search' feature in google search.
  useEffect(() => {
    const randomIndex = Math.trunc(Math.random() * 42);
    const randomKeyword = keywords[randomIndex];
    setKeyword(randomKeyword);
  }, []);

  return (
    <Link
      // Indirectly sends the keyword query to the loader in results.meaning.
      to={`/results/meaning?search=${keyword}`}
      className="rounded-md bg-primary1 px-4 pt-2 text-sm hover:bg-purple-600 sm1:text-sm"
    >
      Random Comics
    </Link>
  );
}
