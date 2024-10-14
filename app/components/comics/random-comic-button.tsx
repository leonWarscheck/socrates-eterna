import { Form, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { keywords } from "~/data/keywords";

export default function RandomComicButton({ isSearching }) {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const randomIndex = Math.trunc(Math.random() * 42);
    const randomKeyword = keywords[randomIndex];
    // console.log(randomIndex + " = " + randomKeyword)
    setKeyword(randomKeyword);
  }, []);
  // console.log("keyword: ",keyword)

  return (
    <Link
      prefetch="intent"
      to={`/results?mode=meaning&search=${keyword}`}
      className="bg-primary1   text-sm small:text-sm hover:bg-purple-600 rounded-md pt-2 px-4 "
    >
      Random Comics
    </Link>
  );
}
