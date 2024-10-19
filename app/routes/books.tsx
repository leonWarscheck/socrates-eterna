import { Link, MetaFunction } from "@remix-run/react";
import books from "../data/books-data.json"

export const meta: MetaFunction = () => {
  return [
    { title: "Books | Socrates Eterna" },
  ];
};

export default function Books() {

  return (
    <main id="md-lg" className=" hidde w-full dmd: flex flex-col grow mt-16   bg-gradient-to-b from-purple-1000 to-purple-900">

      <ul className="mx-auto max-w-7xl py-6 px-4 gap-8 mt-8 grid grid-cols-1 sxl:grid-cols-2">

        {books.map((book) => (
          <li key={book.id}
            className={`relative flex ${book.new && "bg-purple-900 rounded-xl "}`}>
            <div className="aspect-[840/1264] max-h-64 mx-6 mt-8 border-2 flex-shrink-0 mb-8">
              <img
                className=" h-full w-full object-cover"
                src={book.coverimage}
                alt=""
              />
            </div>
            <p className={`absolute ${book.new ? "": "hidden"} bg-primary1 rounded-lg font-bold text-base top-4 left-4 border-2  px-1`}>
              NEW
            </p>
            <div className="flex flex-col m-4 pr-2 ">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  {book.title}
                  <span className="font-normal text-purple-400 "> ({book.year})</span>
                </h2>
                <Link
                  to={book.purchaseLink}
                  className={`font-light  hover:bg-purple-600 bg-primary1 rounded-lg pt-px h-8 px-4 ml-auto ${book.new && "animate-bg-pulse-slow2 hover:underline"} `} 
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>
              <p className="flex text-pretty mb-4"
                dangerouslySetInnerHTML={{ __html: book.covertext }} >

                </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
