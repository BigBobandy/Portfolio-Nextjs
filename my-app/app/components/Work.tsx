import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col max-w-md lg:w-1/4 bg-opacity-50 rounded-lg">
      <h2 className="text-2xl mb-2 font-medium text-orange-100">
        Work Experience
      </h2>
      <div className="flex flex-col justify-between gap-8">
        <p className="text-md font-light text-white ">
          I am a Freelance Web Developer with experience in designing and
          developing responsive, user-friendly websites for various clients. My
          recent work includes the Nail Envy website, where I created a modern
          and visually appealing site to showcase the salon's services, customer
          reviews, and more.
        </p>
        <p className="text-md font-light text-white ">
          I specialize in both front-end and back-end development, using
          technologies like React.js, Tailwind CSS, and Node.js to deliver
          tailored solutions that meet client needs.
        </p>
        <p className="text-md font-light text-white ">
          While I am actively seeking new clients, I am also pursuing a
          long-term role as a Full Stack Developer. My ambition is to continue
          expanding my expertise and contribute to innovative projects.
        </p>
      </div>
    </div>
  );
};

export default Work;
