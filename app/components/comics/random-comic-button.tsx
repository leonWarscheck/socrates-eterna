import { Form, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { keywords } from "~/data/keywords";
import type { Props } from "./types";

export default function RandomComicButton({ isSearching }: Props) {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const randomIndex = Math.trunc(Math.random() * 42);
    const randomKeyword = keywords[randomIndex];
    setKeyword(randomKeyword);
  }, []);

  return (
    <Link
      prefetch="intent"
      to={`/results/meaning?search=${keyword}`}
      className="bg-primary1   text-sm small:text-sm hover:bg-purple-600 rounded-md pt-2 px-4 "
    >
      Random Comics
    </Link>
  );
}
