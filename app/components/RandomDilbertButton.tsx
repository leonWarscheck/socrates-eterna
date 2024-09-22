import { Form, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { keywords } from "~/data/keywords";

export default function RandomDilbertButton({isSearching}) {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const randomIndex = Math.trunc(Math.random() * 509);
    const randomKeyword = keywords[randomIndex];
    // console.log(randomIndex + " = " + randomKeyword)
    setKeyword(randomKeyword);
  }, []);
  // console.log("keyword: ",keyword)

  return (
    <Link
      prefetch="intent"
      to={`/classic-search?search=${keyword}`}
      className="bg-dilred   text-sm small:text-sm hover:bg-red-600 text-white pt-3 px-2 pb-1 m"
    >
      Random Dilbert
    </Link>
  );
}
