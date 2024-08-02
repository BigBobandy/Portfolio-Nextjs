import Image from "next/image";
import { projects } from "../constants";

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="card w-96 lg:w-full bg-base-100 shadow-xl image-full h-full"
        >
          <figure>
            <Image
              src={project.image}
              width={384}
              height={80}
              alt={project.name}
              className="w-auto h-auto"
            />
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title text-lg">{project.name}</h2>
            <p className="text-orange-100 text-sm md:text-md">
              {project.description}
            </p>

            <div className="card-actions justify-end">
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm bg-orange-100 hover:bg-secondary"
              >
                Source Code
              </a>

              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm  bg-orange-100 hover:bg-secondary"
              >
                Live Project
              </a>
              <div className="mt-2 flex flex-row gap-2 justify-center  ">
                {project.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="badge select-none">
                    {tag.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
