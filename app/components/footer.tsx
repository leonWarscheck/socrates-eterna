import { Link, useLocation, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Footer() {
  const location = useLocation();

  const [isSnapEnabled, setIsSnapEnabled] = useState(false);

  useEffect(() => {
    if (location.pathname === "/about" || location.hash === "#about-top") {
      setIsSnapEnabled(true);
    } else {
      setIsSnapEnabled(false);
    }
  }, [location.pathname]);

  return (
    <footer
      className={` ${location.pathname === "/test" && "hidden"} flex h-28 w-full items-center bg-purple-950 md2:h-16 ${isSnapEnabled && "snap-start snap-always"} `}
    >
      <nav className="mx-auto flex w-full max-w-7xl flex-col items-center gap-x-4 gap-y-3 px-4 text-xs font-light text-neutral-100 xs1:text-sm md2:flex-row md2:gap-y-0">
        <div className="flex gap-x-3 md2:mr-auto md2:gap-x-4">
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
        <div className="flex items-center text-center md2:ml-auto">
          <Link className="decoration-dotted hover:underline" to="/licensing">
            {" "}
            © 2024 Socrates-Eterna.com - All Rights Reserved.
          </Link>
        </div>
      </nav>
    </footer>
  );
}
