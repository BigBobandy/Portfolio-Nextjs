import Image from "next/image";
import React from "react";

const Tech = () => {
  const techStack = [
    {
      name: "React",
      description: "Front-end development for interactive UIs.",
    },
    {
      name: "Node.js & Express",
      description: "Server-side logic and API development.",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for storing application data.",
    },
    {
      name: "Prisma",
      description: "Next-generation ORM for Node.js and TypeScript.",
    },
    { name: "TypeScript", description: "Static typing for JavaScript code." },
    { name: "HTML & CSS", description: "Structuring and styling web pages." },
    {
      name: "JavaScript",
      description: "Dynamic scripting for web applications.",
    },
    { name: "Git", description: "Version control for source code management." },
  ];

  return (
    <div>
      <h2 className="text-2xl mb-2 font-medium text-orange-100">Tech Stack</h2>
      <div className="flex gap-3">
        <Image src="/react.svg" width={75} height={75} alt="React.js logo" />
        <Image src="/node-js.svg" width={75} height={75} alt="Node.js logo" />
        <Image src="/mongodb.svg" width={150} height={75} alt="MongoDB logo" />
      </div>
      <ul className="list-disc pl-5">
        {techStack.map((tech, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold ">{tech.name}:</span>{" "}
            <span className="text-orange-100 text-sm">{tech.description}</span>
          </li>
        ))}
      </ul>
      <div className="  max-w-xs flex justify-center text-left mt-4 lg:mb-4">
        <p className="text-orange-100 text-sm">
          This portfolio project was made using the Next-Js framework with
          TypeScript & Tailwindcss. You can find the source code{" "}
          <a
            href="https://github.com/BigBobandy/Portfolio-Nextjs"
            target="_blank"
            className="font-bold underline text-secondary"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Tech;
