import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

/* components */
import DarkModeButton from "./dark-mode-button";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src="/logo.png" alt="Logo image" width={40} height={40} />
          <span className="ml-3 text-2xl font-bold">Bro-Portfolio</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className={`mr-5 text-md font-bold ${
              pathname === "/" ? "text-indigo-500" : null
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`mr-5 text-md font-bold ${
              pathname === "/projects" ? "text-indigo-500" : null
            }`}
          >
            Projects
          </Link>
          <DarkModeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
