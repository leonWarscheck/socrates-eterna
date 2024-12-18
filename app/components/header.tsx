import { Link, useLocation, useRouteLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search") || "";
  const [canHover, setCanHover] = useState(false);
  const [scrollShow, setScrollShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCanHover(true);
    }, 2800);
    return setCanHover(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 210) {
        setScrollShow(false);
      } else {
        setScrollShow(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        onClick={() => setCanHover(true)}
        id="header-home"
        className={`fixed z-20 flex h-16 w-full grow items-center bg-purple-950 ${!scrollShow && "opacity- 0"} ${location.pathname === "/" || "hidden"} transition-opacity ${canHover && "hover:opacity-100"} duration-1000`}
      >
        <nav className="mx-auto flex max-w-7xl flex-grow items-center px-4">
          <Link to="/" className="">
            <img
              className="h-12 hover:opacity-70"
              src="/main/omega-logo.png"
              alt="socrates eterna logo: greek symbol omega"
            />
          </Link>

          <ul className="ml-auto flex space-x-4 text-base text-purple-200">
            <li className="hover:text-purple-400">
              <Link prefetch="render" to="/about">
                About
              </Link>
            </li>
            <li className="hover:text-purple-400">
              <Link prefetch="render" to="/books">
                Books
              </Link>
            </li>
            <li className="target:text-neutral-500 hover:text-purple-400">
              <Link to="/comics/meaning">Comics</Link>
            </li>
          </ul>
        </nav>
      </header>

      <header
        id="header"
        className={`fixed z-20 flex h-16 w-full grow items-center bg-purple-950 ${location.pathname === "/" && "hidden"} ${location.pathname === "/test" && "hidden"} ${query ? "hidde" : ""} `}
      >
        <nav className="mx-auto flex max-w-7xl flex-grow items-center px-4">
          <Link to="/" className="">
            <img
              className="border-dilre border- h-12 hover:opacity-60"
              src="/main/omega-logo.png"
              alt="socrates eterna logo: greek symbol omega"
            />
          </Link>

          <ul className="ml-auto flex space-x-4 text-base text-purple-200">
            <li className="hover:text-purple-400">
              <Link prefetch="render" to="/about">
                About
              </Link>
            </li>
            <li className="hover:text-purple-400">
              <Link prefetch="render" to="/books">
                Books
              </Link>
            </li>
            <li className="target:text-neutral-500 hover:text-purple-400">
              <Link to="/comics/meaning">Comics</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
