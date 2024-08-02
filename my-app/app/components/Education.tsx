import Image from "next/image";

const Education = () => {
  return (
    <div className="lg:w-1/4">
      <ul className="gap-2 md:mb-4 w-full ">
        <li className="text-2xl mb-2 font-medium text-orange-100">Education</li>
        <li className="flex flex-col justify-between lg:justify-start lg:items-start gap-2">
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
          <span className="text-lg mb-2">Degree: </span>
          <p className="text-orange-100 text-md">
            Associate of Applied Science
          </p>
          <span className="text-lg">Major: </span>
          <p className="text-orange-100 text-md">Website Design/Development</p>
          <span className="text-lg">Minor: </span>
          <p className="text-orange-100 text-md">IT Support Specialist</p>
        </li>
        <li className="mb-2 ">
          <span className="text-lg">Relevant Coursework: </span>
          <p className="text-orange-100 text-md ">
            Information Security Fundamentals, IT Analysis Design & Project
            Management, Hardware Installation & Maintenance
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
