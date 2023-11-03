import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  return (
    <div>
      <h3 className="text-2xl mb-2 font-medium text-orange-100">My Links</h3>

      <a
        href="https://www.linkedin.com/in/jackson-dykes-275746240/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-3xl text-secondary hover:text-tertiary"
        />
      </a>

      <a
        href="https://github.com/BigBobandy"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FontAwesomeIcon
          icon={faSquareGithub}
          className="text-3xl  text-secondary hover:text-tertiary"
        />
      </a>

      <a
        href="mailto:jdykesdev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
      >
        <FontAwesomeIcon
          icon={faSquareEnvelope}
          className="text-3xl  text-secondary hover:text-tertiary"
        />
      </a>
    </div>
  );
};
export default Links;
