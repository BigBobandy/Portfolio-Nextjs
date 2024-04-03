import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-4 font-medium text-orange-100">My Links</h2>
      <div className="flex flex-row lg:flex-col mb-10 lg:gap-1">
        <a
          href="https://www.linkedin.com/in/jackson-dykes-275746240/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="w-full"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-secondary hover:text-tertiary w-12 h-12 lg:w-20 lg:h-20"
          />
        </a>

        <a
          href="https://github.com/BigBobandy"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="w-full"
        >
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="text-secondary hover:text-tertiary w-12 h-12 lg:w-20 lg:h-20"
          />
        </a>

        <a
          href="mailto:jdykesdev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          className="w-full"
        >
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            className="text-secondary hover:text-tertiary w-12 h-12 lg:w-20 lg:h-20"
          />
        </a>
        <a
          href="/my-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
          className="w-full"
        >
          <FontAwesomeIcon
            icon={faFilePdf}
            className="text-secondary hover:text-tertiary w-12 h-12 lg:w-20 lg:h-20 lg:ml-2"
          />
        </a>
      </div>
    </div>
  );
};
export default Links;
