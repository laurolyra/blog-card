interface CreditsProps {
  author: string
  username: string
}

export default function Credits({author, username}: CreditsProps) {
  return (
    <div className="font-mono text-xs" data-gfe-screenshot-exclude="true">
      A challenge by{' '}
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
        rel="noopener noreferrer"
      >
        GreatFrontEnd Projects
      </a>
      . Built by{' '}
      <a
        href={`https://www.greatfrontend.com/projects/u/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {author}
      </a>
      .
    </div>
  );
}
