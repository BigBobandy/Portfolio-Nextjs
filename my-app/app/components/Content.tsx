import Image from "next/image";
import Education from "./Education";
import Links from "./Links";
import ProjectCards from "./ProjectCards";
import Tech from "./Tech";
import Work from "./Work";

const Content = () => {
  return (
    <div
      className="flex flex-col text-left px-7 ml-2 text-secondary bg-primary w-full lg:w-2/3  bg-opacity-[.85] 
         rounded-xl overflow-y-scroll lg:overflow-auto min-h-screen"
    >
      <div className="flex justify-between lg:justify-start flex-row ">
        <div className="block rounded-full  lg:hidden">
          <Image
            src="/headshot-mobile.png"
            width={80}
            height={80}
            alt="headshot picture"
            className="rounded-xl"
          />
        </div>
        <div className=" lg:flex lg:items-center mr-4 ">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="initials logo"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between items-end lg:justify-start lg:items-start">
          <h1 className="flex text-xl lg:text-3xl font-bold lg:mb-3">
            Jackson Dykes
          </h1>
          <h2 className="text-lg lg:text-xl font-bold">Full Stack Developer</h2>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <ul className="flex flex-col items-center justify-center lg:items-start">
          <li className="text-2xl mb-2 font-medium text-orange-100">
            Projects
          </li>
          <li>
            <ProjectCards />
          </li>
        </ul>
        <div className="divider"></div>
        <div className="flex flex-col lg:flex-row justify-between lg:w-full gap-1">
          <Work />
          <div className="divider md:hidden"></div>
          <Education />
          <div className="divider md:hidden"></div>
          <Tech />
          <div className="divider md:hidden"></div>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Content;
