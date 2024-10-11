import { Link, useSearchParams, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";


export default function Footer() {
  const location = useLocation() 

  const [isSnapEnabled, setIsSnapEnabled] = useState(false);

  useEffect(() => {
    
    if (location.pathname === "/about" || location.hash === "#about-top") {
      setIsSnapEnabled(true);
    } else {
      setIsSnapEnabled(false);
    }
  }, [location.pathname]);


  // console.log(location.hash)
  return (
    <footer className={` ${location.pathname === "/test" && "hidden"}  mt-aut bg-purple-950 items-center flex h-16 w-full ${isSnapEnabled && "snap-start snap-always"} `}>
      
      <nav className="max-w-7xl flex gap-x-4 flex-gro items-center px-4 text-neutral-100 text-xs tiny:text-sm mx-auto font-light w-full">
        <div className="flex gap-x-3 dmd:gap-x-4  mr-auto">
          <Link
            className="hover:underline"
            to="https://www.x.com"
                target="_blank"
                rel="noopener norefferrer"
          >
            X.com
          </Link>
          <Link
            className="hover:underline"
            to="https://www.instagram.com/"
                target="_blank"
                rel="noopener norefferrer"
          >
            Instagram
          </Link>
          <Link
            className="hover:underline"
            to="https://www.linkedin.com/"
                target="_blank"
                rel="noopener norefferrer"
          >
            LinkedIn
          </Link>
          <Link
            className="hover:underline"
            to="https://patreon.com"
                target="_blank"
                rel="noopener norefferrer"
          >
            Patreon
          </Link>
          <Link
            className="hover:underline"
            to="https://www.youtube.com/"
                target="_blank"
                rel="noopener norefferrer"
          >
            Youtube
          </Link>
        </div>
        <div className="flex gap-x-4 text-center  sm:flex-row flex-col items-center ml-auto  ">
          <Link
            className="decoration-dotted hover:underline "
            to="/licensing"
          >
            {" "}
            © 2024 Socrates-Eterna.com - All Rights Reserved.
          </Link>
          {/* <div className=""> </div> */}
        </div>
      </nav>
    </footer>
  );
}
