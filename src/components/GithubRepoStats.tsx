// https://api.github.com/repos/facebook/react

import React, { useEffect, useState } from "react";

type Something = {
  a: undefined;
};

const GithubRepoStats: React.FunctionComponent = () => {
  const [stargazersCount, setStargazersCount] = useState<number>();

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((response) => response.json())
      .then((body) => body.stargazers_count)
      .then((stargazersCount) => setStargazersCount(stargazersCount));
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
