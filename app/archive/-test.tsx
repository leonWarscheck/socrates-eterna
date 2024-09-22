import { Link, useSearchParams } from "@remix-run/react";

export default function TestPage() {
  return (
    <main className="grow bg-black">
      <section className="bg-dilred min-h-dvh flex items-cente relative">
        <div
          className="
            flex flex-col grow
            bg-top min-h-0
bg-no-repeat
bg-[length:100%]     
landscape-narrow:bg-[center_top_-6rem]

            bg-dilred
            bg-[url('/main/lp2-sm-cmyk.jpg')]
            dmd:bg-[url('/main/lp2-md-cmyk.jpg')]
            dlg:bg-[url('/main/lp2-lg-cmyk.jpg')]
            
          "
        >
          {/* <div className="dlg:h-[60%] dmd:h-[50%] h-[40%] landscape-narrow:min-h-[85vh]"></div> */}
          {/* <div id="nested img"
          className="
            flex grow
            bg-top min-h-0
bg-no-repeat
bg-[length:100%]     
landscape-narrow:bg-[center_top_-6rem]

            bg-dilred
            bg-[url('/main/lp2-sm-cmyk.jpg')]
            dmd:bg-[url('/main/lp2-md-cmyk.jpg')]
            dlg:bg-[url('/main/lp2-lg-cmyk.jpg')]
          "
          ></div> */}
          {/* <img className="w-ful h-ful opacity- -mt-[6rem]" src="/main/lp2-md-cmyk.jpg"></img> */}
          <div
            id="text"
            className="max-w-5xl mx-auto mt-aut flex grow flex-col text-white px-4 pt-[40vw]"
          >
            <h2 className="text-center text-dilre text-4xl font-bold small:text-8xl">
              Dilbert REBORN
            </h2>
            <h3 className="text-center text-6xl mt-0.5 font-bold">
              Uncensored and Spicier than Ever!
            </h3>
            <Link
              to="#get-reborn"
              className="bg-dilred  hover:bg-red-600 border-2 mx-auto text-2xl text-white pt-3 px-3 pb-1 mt-6"
            >
              Get REBORN
            </Link>
            <Link
              className="text-center underline text-black mt-2"
              to="classic-search"
            >
              or explore the Dilbert Classic comics
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
