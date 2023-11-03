import Image from "next/image";
import Education from "./Education";
import Links from "./Links";
import ProjectCards from "./ProjectCards";

const Content = () => {
  return (
    <div className="flex flex-col text-left px-7 ml-2 text-secondary bg-primary h-fit bg-opacity-[.85] rounded-xl">
      <h1 className="flex text-6xl font-bold ">
        <span className="pr-3">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="initials logo"
            className="rounded-xl"
          />
        </span>
        Jackson Dykes
      </h1>
      <h2 className="text-2xl pl-[5.5rem] font-bold">
        Junior Full Stack Developer
      </h2>
      <div className="divider"></div>
      <div>
        <ul>
          <li className="text-2xl mb-2 font-medium text-orange-100">
            Projects
          </li>
          <li>
            <ProjectCards />
          </li>
        </ul>
        <div className="divider"></div>
        <div className="flex flex-row justify-between">
          <Education />
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Content;
