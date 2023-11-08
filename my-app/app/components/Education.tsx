import Image from "next/image";

const Education = () => {
  return (
    <ul className="mb-4 ">
      <li className="text-2xl mb-2 font-medium text-orange-100">Education</li>
      <li className="flex flex-col">
        <span>
          <Image
            src="/gntc.png"
            width={100}
            height={100}
            alt="GNTC"
            className="rounded-lg"
          />
        </span>
        <h3 className="text-2xl mb-2 font-semibold">
          Georgia Northwestern <br /> Technical College
        </h3>
      </li>
      <li className="mb-2">
        <span className="text-xl"> Expected Graduation: </span>
        <p className="text-orange-100 text-xl">Summer 2024</p>
      </li>
      <li className="mb-2">
        <span className="text-xl mb-2">Degree: </span>
        <p className="text-orange-100 text-xl"> Associate of Applied Science</p>
        <span className="text-xl">Major: </span>
        <p className="text-orange-100 text-xl">Web Site Design/Development</p>
      </li>
    </ul>
  );
};

export default Education;
