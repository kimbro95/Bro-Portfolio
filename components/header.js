import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap sm:px-50 lg:px-48 py-5 flex-col md:flex-row items-center">
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

          {/* 다크모드 버튼 작업 예정
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            다크모드버튼
          </button>
          */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
