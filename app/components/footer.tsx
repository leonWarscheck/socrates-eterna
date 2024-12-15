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


  return (
    <footer className={` ${location.pathname === "/test" && "hidden"}  bg-purple-950 items-center flex h-28 md2:h-16 w-full ${isSnapEnabled && "snap-start snap-always"} `}>
      
      <nav className="max-w-7xl flex flex-col md2:flex-row gap-y-3 md2:gap-y-0 gap-x-4 items-center px-4 text-neutral-100 text-xs tiny:text-sm mx-auto font-light w-full">
        <div className="flex gap-x-3 md2:gap-x-4  md2:mr-auto">
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
        <div className="flex  text-center  items-center md2:ml-auto  ">
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
