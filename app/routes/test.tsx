import { Link, useSearchParams } from "@remix-run/react";

export default function TestPage() {
  return (
    <main className="bg-black grow">
    <section className="bg-dilred min-h-dvh flex items-center relative dlg:pt-[22vw] pt-[40vw]">
        <div
          className="
            bg-top
            bg-no-repeat
            bg-[length:100%]
            landscape-narrow:bg-[center_top_-5rem]
          
            bg-dilred
            bg-[url('/main/lp2-sm-cmyk.jpg')]
            dmd:bg-[url('/main/lp2-md-cmyk.jpg')]
            dlg:bg-[url('/main/lp2-lg-cmyk.jpg')]
            absolute 
            top-0
            right-0
            bottom-0
            left-0
            z-0
          "
        ></div>
        <div
          id="text"
          className="
          flex z-10 flex-col px-4 mx-auto max-w-5xl text-white grow"
        >
          <h2 className="text-4xl font-bold text-center text-dilre small:text-8xl">
            Dilbert REBORN
          </h2>
          <h3 className="text-center text-6xl mt-0.5 font-bold">
            Uncensored and Spicier than Ever!
          </h3>
          <Link
            to="#get-reborn"
            className="px-3 pt-3 pb-1 mx-auto mt-6 text-2xl text-white border-2 bg-dilred hover:bg-red-600"
          >
            Get REBORN
          </Link>
          <Link
            className="mt-2 text-center text-black underline"
            to="classic-search"
          >
            or explore the Dilbert Classic comics
          </Link>
        </div>

        <div className="absolute bottom-[4vw] w-full ">
          <img src="/main/down-arrow.png" alt="" className="mx-auto size-4  animate-pulse invert opacity-80" />
        </div>
      </section>
    </main>
  );
}
