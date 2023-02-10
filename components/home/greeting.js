import Animation from "@/components/home/animation";
import Image from "next/image";

const Greeting = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Hello!
          <br className="hidden lg:inline-block" />
          Hello!
        </h1>
        <p className="mb-8 leading-relaxed">
          welcome welcomewelcomewelcomewelcome welcomewelcome welcome welcome
          welcome welcome welcome welcome welcome welcome welcome welcome
          welcome welcome welcome welcome welcome welcome welcome welcome
          welcome welcomewelcomewelcomewelcome welcomewelcome welcome welcome
          welcome welcome welcome welcome welcome welcome welcome welcome
          welcome welcome welcome welcome welcome welcome welcome welcome
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보기
          </button>
        </div>
      </div>
      <div className="xl:max-w-lg lg:w-full md:w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Greeting;
