import githubLogo from "../assets/GitHub_Invertocat_Black.png";

interface CreditsProps {
  author: string;
  username: string;
  repoPath: string;
}

export default function Credits({ author, username, repoPath }: CreditsProps) {
  return (
    <div
      className="font-mono text-xs flex justify-between items-center"
      data-gfe-screenshot-exclude="true"
    >
      <p>
        A challenge by{" "}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{" "}
        <a
          href={`https://www.greatfrontend.com/projects/u/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </a>
        .
      </p>
      <a
        href={`https://github.com/${repoPath}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-8" src={githubLogo} alt="github logo" />
      </a>
    </div>
  );
}
