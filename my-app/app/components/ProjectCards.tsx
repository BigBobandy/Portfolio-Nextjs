import Image from "next/image";
import { projects } from "../constants";

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <Image
              src={project.image}
              width={384}
              height={80}
              alt={project.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.name}</h2>
            <p>{project.description}</p>

            <div className="card-actions justify-end">
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary bg-orange-100 hover:bg-secondary"
              >
                Source Code
              </a>

              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary bg-orange-100 hover:bg-secondary"
              >
                Live Project
              </a>
              <div className="mt-4 flex flex-row gap-2 justify-center py-2 ">
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
