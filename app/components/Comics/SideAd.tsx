import { Link } from "@remix-run/react"

export default function SideAd() {
  return (
    <div className="mt-16 [15rem] max-h- 96 bg-purple-1000 border- 2 border-primary1 rounded-xl self-start mr-4 hidden sxl:flex flex-col ">
          <div className="mx-auto aspect-[660/876] max-h-32 mt-8 ">
            <img
              className=" h-full w-full  object-cover"
              src="/books/calendar03.png"
              alt=""
            />

          </div>
          <div className=" mr-4 pr-6 ml-6 text-center mb-8">
            <h2 className="font-bold py-3 text-xl">
              2025 Page-A-Day Calendar
            </h2>

            <p className=" text-base mb-6">
              <span className="font-bold">Available Now! </span>

              Back by popular demand, now featuring both <span className="font-semibol italic">Socrates Eterna and </span> <span className="font-semibol italic">Socrates Pantheon!</span>  2 comics each day, printed in Athens!
              <br />
            </p>
            <Link
              to="https://www.amazon.com"
              className="font-normal text-sm  hover:underline bg-purple-950  h-8 px-4 py-1  mx-auto 4 border-2 border- rounded-lg "
              target="_blank"
              rel="noopener norefferrer"
            >
              click to shop
            </Link>
          </div>
        </div>
  )
}
