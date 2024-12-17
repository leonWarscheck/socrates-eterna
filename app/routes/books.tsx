import { Link, MetaFunction } from "@remix-run/react";

import books from "../features/books-page/books-data.json";

export const meta: MetaFunction = () => {
  return [{ title: "Books | Socrates Eterna" }];
};

export default function Books() {
  return (
    <main
      id="md-lg"
      className="hidde dmd: mt-16 flex w-full grow flex-col bg-gradient-to-b from-purple-1000 to-purple-900"
    >
      <ul className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 px-4 py-6 sxl:grid-cols-2">
        {books.map((book) => (
          <li
            key={book.id}
            className={`relative flex flex-col rounded-xl md2:flex-row ${book.new ? "bg-purple-900" : "bg-purple-1000 bg-opacity-40 md2:bg-transparent"}`}
          >
            <div className="mx-auto mb-2 mt-8 aspect-[840/1264] max-h-64 flex-shrink-0 border-2 md2:mx-6 md2:mb-8">
              <img
                className="h-full w-full object-cover"
                src={book.coverimage}
                alt={`book cover of ${book.title}`}
              />
            </div>
            <p
              className={`absolute ${book.new ? "" : "hidden"} left-4 top-4 rounded-lg border-2 bg-primary1 px-1 text-base font-bold`}
            >
              NEW
            </p>
            <div className="m-4 flex flex-col pr-2">
              <div className="flex gap-1 py-4 text-xl">
                <h2 className="font-bold">
                  {book.title}
                  <span className="font-normal text-purple-400">
                    {" "}
                    ({book.year})
                  </span>
                </h2>
                <Link
                  to={book.purchaseLink}
                  className={`ml-auto h-8 rounded-lg bg-primary1 px-4 pt-px font-light hover:bg-purple-600 ${book.new && "animate-bg-pulse-slow2 hover:underline"} `}
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>
              <p
                className="mb-4 flex text-pretty"
                dangerouslySetInnerHTML={{ __html: book.covertext }}
              ></p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
