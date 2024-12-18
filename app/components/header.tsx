import { Link} from "@remix-run/react";

export default function Header() {


  return (
      <header
        className={`fixed z-20 flex h-16 w-full grow items-center bg-purple-950 `}
      >
        <nav className="mx-auto flex max-w-7xl flex-grow items-center px-4">
          <Link to="/">
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
            <li className="hover:text-purple-400">
              <Link to="/comics/meaning">Comics</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
