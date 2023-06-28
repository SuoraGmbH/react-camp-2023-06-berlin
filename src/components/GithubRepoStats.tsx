import React, { useEffect, useState } from "react";

const GithubRepoStats: React.FunctionComponent = () => {
  const [stargazersCount, setStargazersCount] = useState<number>();

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((response) => response.json())
      .then((body) => setStargazersCount(body.stargazers_count));
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
