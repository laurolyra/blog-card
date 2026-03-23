interface CreditsProps {
  author: string
}

export default function Credits({author}: CreditsProps) {
  return (
    <div className="font-mono text-xs" data-gfe-screenshot-exclude="true">
      A challenge by{' '}
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
      >
        GreatFrontEnd Projects
      </a>
      . Built by{' '}
      <a
        href="https://www.greatfrontend.com/projects/u/username"
        target="_blank"
      >
        {author}
      </a>
      .
    </div>
  );
}
