{/_Search Boxes_/}

<div className="grid grid-cols-1 sm:grid-cols-3 sm:space-y-0 px-4 mt-20 space-y-4 sm:space-x-4 text-center">
<div className="bg-neutral-100 flex flex-col space-y-4 py-4">
  <h2>Date Search</h2>
  <form className="space-x-2">
    <label htmlFor="year-input">Year:</label>
    <input
      type="number"
      id="year-input"
      name="year-input"
      min="1992"
      max="2022"
      step="1"
    />
    <button>search</button>
  </form>
  <form className="space-x-2">
    <label htmlFor="month-input">Month:</label>
    <input type="month" id="month-input" name="month-input" />
    <button>search</button>
  </form>
  <form className="space-x-2">
    <label htmlFor="date-input">Date:</label>
    <input
      type="date"
      id="date-input"
      name="date-input"
      min="1992-01-01"
      max="2020-12-31"
    />
    <button>search</button>
  </form>
</div>
<div className="bg-neutral-100 py-4">Character Search</div>
<div className="bg-neutral-100 py-4">Buzzword Search</div>
</div>

{/_ Feed _/}
export let loader = async () => {
const transcriptsPath = path.resolve("app/data/comicData.json");
const transcriptsData: Transcript[] = JSON.parse(
fs.readFileSync(transcriptsPath, "utf-8")
);
const sortedTranscripts = transcriptsData.sort(
(a, b) =>
new Date(a.metadata.publishedAt).getTime() - new Date(b.metadata.publishedAt).getTime()
);

    return json(sortedTranscripts);

};
const transcripts = useLoaderData<Transcript[]>();
// transcripts.map((transcript)=> console.log(transcript.metadata))

<div className="max-w-3xl mx-auto px-4">
{transcripts.map((transcript) => (
<div key={transcript.metadata.filename} className="mb-8">
  <h2>{transcript.metadata.title}</h2>
  <p>{transcript.metadata.publishedAt}</p>
  <img src={`comics/${transcript.metadata.filename}`} alt={transcript.metadata.title} />
  {/* {transcript.panels.map((panel, index) => (
  <div key={index} className="panel">
    <p>{panel.settingAndProps}</p>
    {panel.panelCharacters.map((character, charIndex) => (
      <div key={charIndex} className="character">
        <p>{character.characterId}: {character.text} ({character.action})</p>
      </div>
    ))}
  </div>
))} */}
</div>
))}
</div>

export default function About() {
const { contentHtml, title } = useLoaderData<mdLoaderData>();

useEffect(()=> showHeader())

return (
<main className=" max-w-3xl w-full mx-auto flex flex-col grow pt-28 mb-8 px-4">
<div className="prose prose-sm">
<h1 className="text-dilred">{title}</h1>
<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
</div>
{/_ <h1 className="text-dilred text-center text-4xl">About Scott Adams</h1> _/}
</main>
);
}

 <div className="  bg-neutral-300 w-1/2  h-screen overflow-hidden flex-none snap-start">
             <section className="flex flex-col w-full text-neutral-50 bg-neutral-400  h-full ">
             <div className=" flex flex-col items-center my-auto">
             <h1 className="text-center text-4xl w-full text-dilred bg-neutral-50 font-bold py-10">
                Follow Scott Adams
              </h1>
              <div className="flex gap-3 items-center  text-2xl pt-7 pb-3  ">
                <Link
                  className="hover:underline"
                  to="https://www.twitter.com/@ScottAdams.com"
                >
                  Twitter
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.instagram.com/ScottAdams925"
                >
                  Instagram
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.linkedin.com/in/scott-adams-52b1595a/"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="flex gap-3 text-2xl pt- pb-7">
                {" "}
                <Link
                  className="hover:underline"
                  to="https://www.scottadams.locals.com"
                >
                  Locals.com
                </Link>
                <Link
                  className="hover:underline"
                  to="https://www.youtube.com/RealCoffeeWithScottAdams"
                >
                  Youtube
                </Link>
              </div></div>
              {/* <img
                className=" w-full mx-auto my-"
                src="/portraits/scottPortrait.webp"
                alt=""
              /> */}
            </section>
           
          </div>

{/_ 0 _/}
{/\* <div className="  bg-purple-500 w-1/2  h-screen overflow-hidden flex-non shrink-0 snap-start">

            <div className="flex flex-col w-full text-neutral-50 bg-neutral-200 h-screen">
              <section className=" flex flex-col  bg-dilred items-center my-auto">
                <h1 className="text-center text-4xl w-full text-dilred bg-neutral-200 font-bold pb-10 pt-">
                  Follow
                </h1>
                <div className="flex gap-3 items-center  text-2xl pt-16 pb-3  ">
                  <Link
                    className="hover:underline"
                    to="https://www.twitter.com/@ScottAdams.com"
                  >
                    Twitter
                  </Link>
                  <Link
                    className="hover:underline"
                    to="https://www.instagram.com/ScottAdams925"
                  >
                    Instagram
                  </Link>
                  <Link
                    className="hover:underline"
                    to="https://www.linkedin.com/in/scott-adams-52b1595a/"
                  >
                    LinkedIn
                  </Link>
                </div>
                <div className="flex gap-3 text-2xl pt- pb-16">
                  <Link
                    className="hover:underline"
                    to="https://www.scottadams.locals.com"
                  >
                    Locals.com
                  </Link>
                  <Link
                    className="hover:underline"
                    to="https://www.youtube.com/RealCoffeeWithScottAdams"
                  >
                    Youtube
                  </Link>
                </div>
                <div className="bg-neutral-200 text-neutral-500">
                  <h2 className="text-center w-full pb-6 l-14 font-bold pt-10">
                    Contact
                  </h2>
                  <p className="text-justify px-14 ">
                    Do you need more information or help on something on Dilbert
                    – a broken link, copyright concern or more? Please contact
                    our support team’s digital help desk via:
                    service@dilbert.com
                  </p>
                  <br />
                  <p className="text-justify px-14 pb-7">
                    Do you think that your brand is a fit for our readers via
                    advertising? Would you like to license Dilbert comics in
                    your presentation, blog, newsletter, book or more?
                    Interested in our content for your newspaper? Contact our
                    staff via: advertising@dilbert.com
                  </p>
                </div>
              </section>

              <img
                className=" w-full mx-auto my-"
                src="/portraits/scottPortrait.webp"
                alt=""
              />
            </div>
          </div> */}



             {/* <div className="flex mx-auto space-x-4  mt-6">
          <button
            type="submit"
            className="bg-dilred   text-sm small:text-sm hover:bg-red-600 text-white pt-3 px-2 pb-1 "
          >
            Dilbert Classic Search
          </button>
          <RandomDilbertButton/>
        </div> */}



        <h3 className="small:pr-4 small:py-0 mr-aut py-4 ">Search by:</h3>
            {/* <ul className=" flex space-x-4 mr-aut">
              <li className="underline text-dilred"> <button onClick={()=>setMode("meaning")} className="hover:text-black" > Meaning</button> </li>
              <li>Date</li>
              <li>Character</li>
              <li>Buzzword</li>
            </ul> */}






 {/* <div id="ad2 md" className=" hidden relative dmd:flex bg-purple-1000 text-whit w-full h- -mt-3  shrink-0 mb-12 border-8 border-purple-950 rounded-2xl">
            <img
              className=" h-40  p- mx- 6 mt-6 object-cover bg-pink- -mb-6 ml-4 bg-pink- 500"
              src="/main/omega-logo.png"
              alt=""
            />
            <p className="rounded-md absolute text-purple- font-bold text-base -top-3 -left-3 border-2 bg-dilred border-purple-500 px-1">Available Now!</p>


            <div className="flex flex-col mr-4 mt-4 pr-6 ml-">
              {" "}
              <div className="flex py-4 text-center mx-auto text-3xl">
                <h2 className="font-bold ">
                  2025 Page-A-Day Calendar
                </h2>

              </div>
              <p className="overflow-hidden text-whit  text-center text- justify hyphens-auto text- pretty mb- bg- white">
              <span className="font-semibold uppercas">Double Socrates!</span>  Back by popular demand, now featuring both <span className="font-semibol italic">Socrates Eterna and </span> <span className="font-semibol italic">Socrates Pantheon!</span>  2 comics each day, printed in Athens!
              </p>
              <Link
                to="/books"
                className="rounded-lg font-light text- hover:underline bg-dilred text-white mt-4 pt-1 h-8 px-4 mx-auto mb-6 "
                target="_blank"
                rel="noopener noreferrer"
              >
                click to shop<span id="get-reborn1"></span>
              </Link>
            </div>
          </div> */}




          {/* <div id="ad2 sm" className="flex dmd:hidden flex-col bg-neutral-100 w-full shrink-0 mb-16 border-8 border-dilred -mt-2">
            <div className="relative  pt-12   mx-auto my-auto">
              <img
                className="h-72 w-full  object-cover -mb-4"
                src="/books/calender.webp"
                alt=""
              />
              <p className="absolute top-8 -left-1.5 text-dilre font-bold text-base border-2 bg-neutral-100 border-dilred px-1">
                Available Now!
              </p>
            </div>
            <div className="flex flex-col pb-4 px-6">
              <div className="flex pb-4 text-xl ">
                <h2 className="font-bold mx-auto text-center text-2xl  mr -2 ">
                  2025 Page-A-Day Calendar
                </h2>

              </div>

              <p className="overflow-hidden text-whit  text-center text- justify hyphens-auto text- pretty mb- bg- white">
                <span className="font-semibold uppercas">Double Socrates!</span>  Back by popular demand, now featuring both <span className="font-semibol italic">Socrates Eterna and </span> <span className="font-semibol italic">Socrates Pantheon!</span>  2 comics each day, printed in Athens!
              </p> <Link
                to="/books"
                className="font-light text- hover:underline bg-dilred text-white mt-5 pt-1 h-8 px-4 mx-auto mb-4 "
                target="_blank"
                rel="noopener noreferrer"
              >
                click to shop
              </Link>
              <span id="get-reborn"></span>
            </div>
          </div> */}