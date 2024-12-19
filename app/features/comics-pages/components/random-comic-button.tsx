import { Form, Link } from "@remix-run/react";
import { useEffect, useState } from "react";

import { keywords } from "~/features/comics-pages/keywords";

export default function RandomComicButton() {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const randomIndex = Math.trunc(Math.random() * 42);
    const randomKeyword = keywords[randomIndex];
    setKeyword(randomKeyword);
  }, []);

  return (
    <Link
      // prefetch="intent"
      to={`/results/meaning?search=${keyword}`}
      className="rounded-md bg-primary1 px-4 pt-2 text-sm hover:bg-purple-600 sm1:text-sm"
    >
      Random Comics
    </Link>
  );
}
