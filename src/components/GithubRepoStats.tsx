import React, { useEffect, useState } from "react";

interface Props {
  repoName: string;
}

const GithubRepoStats: React.FunctionComponent<Props> = ({ repoName }) => {
  const [stargazersCount, setStargazersCount] = useState<number>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repoName}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Received http status " + response.status);
        }

        return response.json();
      })
      .then((body) => body.stargazers_count)
      .then(setStargazersCount)
      .catch(setError);
  }, [repoName]);

  if (error !== undefined) {
    return (
      <div style={{ border: "2px solid pink", padding: 4, margin: 4 }}>
        <b>{error.name}</b>: {error.message}
        <br />
        Error occured for repo {repoName}.
      </div>
    );
  }

  if (stargazersCount === undefined) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      <b>{repoName}</b> hat {stargazersCount.toLocaleString()} Stars
    </div>
  );
};

export default GithubRepoStats;
