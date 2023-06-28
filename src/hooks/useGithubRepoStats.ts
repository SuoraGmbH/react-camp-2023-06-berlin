import { useEffect, useState } from "react";

const useGithubRepoStats = (repoName: string) => {
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

  return {
    error,
    stargazersCount,
  };
};

export default useGithubRepoStats;
