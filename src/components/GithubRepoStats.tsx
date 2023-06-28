// https://api.github.com/repos/facebook/react

import React, { useEffect, useState } from "react";

type Something = {
  a: undefined;
};

const GithubRepoStats: React.FunctionComponent = () => {
  const [stargazersCount, setStargazersCount] = useState<number>();

  useEffect(() => {
    const data = fetch("https://api.github.com/repos/facebook/react");

    data.then((response) => {
      response.json().then((githubRepoInformation) => {
        console.log(githubRepoInformation);

        setStargazersCount(
          (stargazersCount) => githubRepoInformation.stargazers_count
        );
      });
    });
  }, []);

  if (stargazersCount === undefined) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      <b>facebook/react</b> hat {stargazersCount.toLocaleString()} Stars
    </div>
  );
};

export default GithubRepoStats;
