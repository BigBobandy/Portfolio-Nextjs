import Image from "next/image";

const Education = () => {
  return (
    <ul className="md:mb-4 ">
      <li className="text-2xl mb-2 font-medium text-orange-100">Education</li>
      <li className="flex flex-col justify-between md:items-center lg:justify-start lg:items-start">
        <h3 className="text-xl mb-2 font-semibold md:mb-0 md:mr-4">
          Georgia Northwestern <br /> Technical College
        </h3>
        <span>
          <Image
            src="/gntc.png"
            width={150}
            height={150}
            alt="GNTC"
            className="rounded-lg md:w-[75px] md:h-[75px] lg:my-4"
          />
        </span>
      </li>
      <li className="mb-2">
        <span className="text-lg"> Expected Graduation: </span>
        <p className="text-orange-100 text-md">Summer 2024</p>
      </li>
      <li className="mb-2">
        <span className="text-lg mb-2">Degree: </span>
        <p className="text-orange-100 text-md"> Associate of Applied Science</p>
        <span className="text-lg">Major: </span>
        <p className="text-orange-100 text-md">Web Site Design/Development</p>
      </li>
    </ul>
  );
};

export default Education;
