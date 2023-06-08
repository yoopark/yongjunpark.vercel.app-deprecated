import { GithubSvg } from './GithubSvg';

export const GithubLink = ({ to }: { to: string }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer noopener">
      <GithubSvg width={18} height={18} fill="#4d4d4d" />
    </a>
  );
};
