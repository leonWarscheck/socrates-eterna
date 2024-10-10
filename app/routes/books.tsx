import { Link, useSearchParams, MetaFunction } from "@remix-run/react";
import { useEffect } from "react";
import { showHeader } from "~/utils/scrollHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Books | Socrates Eterna" },
    // { name: "Uncensored and Spiciere Than Ever!", content: "Find Out What Happened to Dilbert!", 'og:image': "/favicon.ico",  },
  ];
};

export default function Books() {
  // useEffect(() => showHeader());


  return (
    <>
      





      <main id="md-lg" className=" hidden w-full dmd:flex flex-col grow mt-16   bg-gradient-to-b from-purple-1000 to-purple-900">





        {/* <div className="bg-purple-800 max-w- 7xl mx-auto w-full mb-16">
          <div id="calendar" className=" relative flex bg-purple- 900 w-full h- 80  rounded-xl max-w-4xl mx-auto py-8">
            <img
              className=" h-44 ml-12 mr-8 p- mx- 6 my- auto object-cover bg- white"
              src="/books/calendar03.png"
              alt=""
            />
            <p className="absolute bg-purple-950 text-purple-100 rounded-lg py-1 border-purple-100 font-bold text-sm top-16 left-4 border-2  px-2">Available Now!</p>


            <div className="flex flex-col mr-4 pr-6 ml-6 my-auto">
              <div className="flex py-4 text-lg">
                <h2 className="font-bold text-2xl">
                  2025 Page-A-Day Calendar
                </h2>

              </div>
              <p className="overflow-hidden text-lg  text- justify hyphens-auto mb-3">
                <span className="font-bold">Available Now! </span>

                Back by popular demand, now featuring both <span className="font-semibol italic">Socrates Eterna and </span> <span className="font-semibol italic">Socrates Pantheon!</span>  2 comics each day, printed in Athens!
                <br />
              </p>
              <Link
                to="https://www.amazon.com"
                className="font-normal text-sm  hover:underline bg-purple-950  h-8 px-4 pt-1  mr-auto 4 borde border-white rounded-lg "
                target="_blank"
                rel="noopener norefferrer"
              >
                click to shop
              </Link>
            </div>
          </div>
        </div> */}
        {/* <div className="h-8 bg-purple-900 w-full"><div className="bg-purple-950 w-1/2 h-8"></div> <div></div></div> */}

        {/*ROW 1111111111111111111111111*/}

        <div className="flex max-w-7xl mx-auto my-8 gap-x-8 mt-16 ">

          <div id="eterna" className=" relative flex bg-purple-900 rounded-xl w-1/2  shrink- 0 ">

            <img
              className=" h-[300px] mx-6 mt-8 border-2 border-purple-100 "
              src="/books/eterna.jpg"
              alt=""
            />
            <p className="absolute bg-dilred rounded-lg font-bold text-base top-4 left-4 border-2  px-1">
              NEW
            </p>


            <div className="flex flex-col m-4 pr-2">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  Eterna: A Journey Beyond Time
                  <span className="font-normal text-purple-400 "> (2024)</span>
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-dilred rounded-lg pt-px h-8 px-4 ml-auto  "
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>



              <p className="flex h- 96 text-pretty  mb-5 ">
                Follow Socrates on a journey through history like never before. In Eterna: A Journey Beyond Time, the father of philosophy travels across centuries, confronting the great thinkers and ideologies that shaped each era.
                <br />
                From the rise of empires to the age of technology, Socrates questions the beliefs, values, and visions of the future, challenging humanity to reflect on its progress and pitfalls. Through his timeless lens, explore the evolution of thought and the eternal quest for truth.
              </p>


            </div>
          </div>



          <div id="modern-tools" className="flex bg-purple- 950 w-1/2  shrink- rounded-xl ">

            <img
              className=" h-[300px] ml-6 mr-6 mt-8 border-2 "
              src="/books/tools.jpg"
              alt=""
            />





            <div className="flex flex-col m-4 pr-2 ">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  The Socratic Method: Tools for the Modern Age
                  <span className="font-normal text-purple-400 "> (2019)</span>
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-dilred  h-8 pt-px px-4 ml-auto rounded-lg"
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>




              <p className="overflow- text-pretty justify mb-5 ">
                Unlock timeless wisdom for today's complex world. In The Socratic Method: Tools for the Modern Age, discover how the ancient art of questioning can sharpen your critical thinking, solve problems, and foster meaningful conversations.
                <br />
                This guide adapts Socrates' techniques to address modern challenges, empowering you to approach life's toughest questions with clarity and insight. It will equip you with powerful tools for deeper understanding and decision-making.
              </p>



            </div>
          </div>
        </div>




        <div className="flex max-w-7xl mx-auto my-8 gap-x-8">




          <div id="reason" className="flex bg-purple- 950 w-1/2 h- 96 shrink- rounded-xl max-w-4xl mx-auto">
            <img
              className="h-[300px] p- mx-6 mt-8 border-2 border-purple-100"
              src="/books/reason.jpg"
              alt=""
            />
            <div className="flex flex-col m-4 pr-2">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  Socrates and the Age of Reason{" "}
                  <span className="font-normal text-purple-400 ">(2016)</span>
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-dilred  h-8 pt-px px-4 ml-auto rounded-lg"
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>
              <p className="overflow-hidde text- justify mb-5 ">
                Journey back to the roots of Western philosophy in Socrates and the Age of Reason. This compelling exploration brings to life the wisdom of Socrates, the father of critical thinking, and his enduring influence on the modern age.
                <br />From his profound dialogues in ancient Athens to his timeless methods of inquiry, Socrates laid the foundation for rational thought and the pursuit of truth. In this book, discover how his teachings shaped the Age of Reason and continue to inspire thinkers, revolutionaries, and visionaries today.
                <br />{" "}

              </p>
            </div>
          </div>
          <div id="plato" className="flex bg-purple- 950 w-1/2   rounded-xl">


            <img
              className="h-[300px] mt-8 mx-6  border-2 border-purple-100"
              src="/books/secret.jpg"
              alt=""
            />


            <div className="flex flex-col m-4 pr-2">
              <div className="flex py-4 text-xl">
                <h2 className="font-bold ">
                  Plato’s Secret Notes {" "}
                  <span className="font-normal text-purple-400 ">(2012)</span>
                </h2>
                <Link
                  to="https://www.amazon.com"
                  className="font-light  hover:underline bg-dilred  h-8 pt-px px-4 ml-auto rounded-lg"
                  target="_blank"
                  rel="noopener norefferrer"
                >
                  buy
                </Link>
              </div>


              <p className="overflow-hidde  text-pretty justify mb-5 ">
                Journey back to the roots of Western philosophy in Socrates and the Age of Reason. This compelling exploration brings to life the wisdom of Socrates, the father of critical thinking, and his enduring influence on the modern age.

                <br />
                From his profound dialogues in ancient Athens to his timeless methods of inquiry, Socrates laid the foundation for rational thought and the pursuit of truth. In this book, discover how his teachings shaped the Age of Reason and continue to inspire thinkers, revolutionaries, and visionaries today.

                {" "}

              </p>


            </div>
          </div>
        </div>




      </main>
    </>
  );
}
