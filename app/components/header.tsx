import { Link, useRouteLoaderData, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";


export default function Header() {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get("search") || "";
  const [canHover, setCanHover] = useState(false)
  const [scrollShow, setScrollShow] = useState(false)

  useEffect(() => {
    setTimeout(() => { setCanHover(true) }, 2800)
    return setCanHover(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 210) {
        setScrollShow(false)
       
      } else {
        setScrollShow(true)
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return ()=> window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <>
      <header
        onClick={() => setCanHover(true)}
        id="header-home"
        className={` h-16 bg-purple-950 items-center flex fixed w-full  grow z-20
      ${!scrollShow && "opacity- 0"}
      ${location.pathname === "/" || "hidden"}

      transition-opacity  ${canHover && "hover:opacity-100"} duration-1000  `}
      >
        <nav className="max-w-7xl  mx-auto  flex  flex-grow items-center px-4">
          <Link to="/" className="">
            <img
              className="h-12    hover:opacity-70"
              src="/main/omega-logo.png"
              alt=""
            />
          </Link>

          <ul className="text-base text-purple-200  space-x-4 flex ml-auto ">
            <li className="hover:text-purple-400">
              <Link prefetch="render" to="/about">About</Link>
            </li>
            <li className="hover:text-purple-400">
              <Link prefetch="render" to="/books">Books</Link>
            </li>
            <li className="hover:text-purple-400 target:text-neutral-500 ">
              <Link to="/comics/meaning">Comics</Link>
            </li>
          </ul>
        </nav>
      </header>

      <header
        id="header"
        className={` h-16 bg-purple-950 items-center flex fixed w-full  grow z-20
      
      ${location.pathname === "/comics" && "landscape-super-narrow:bg-opacity- 0"}
      ${location.pathname === "/" && "hidden"}
      ${location.pathname === "/test" && "hidden"}
      ${query ? "hidde" : ""}
      `}
      >
        <nav className="max-w-7xl   mx-auto flex  flex-grow items-center px-4">
          <Link to="/" className="">
            <img
              className="h-12 hover:opacity-60 border-dilre border-"
              src="/main/omega-logo.png"
              alt=""
            />
          </Link>

          <ul className="text-base text-purple-200  space-x-4 flex ml-auto ">
            <li className="hover:text-purple-400">
              <Link prefetch="render" to="/about">About</Link>
            </li>
            <li className="hover:text-purple-400">
              <Link prefetch="render" to="/books">Books</Link>
            </li>
            <li className="hover:text-purple-400 target:text-neutral-500 ">
              <Link to="/comics/meaning">Comics</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
