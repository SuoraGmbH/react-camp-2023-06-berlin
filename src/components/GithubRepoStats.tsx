import React, { useEffect, useState } from "react";
import useGithubRepoStats from "../hooks/useGithubRepoStats";
import useGithubRepoStatsWithReactQuery from "../hooks/useGithubRepoStatsWithReactQuery";

interface Props {
  repoName: string;
}

const GithubRepoStats: React.FunctionComponent<Props> = ({ repoName }) => {
  const { stargazersCount, error } = useGithubRepoStatsWithReactQuery(repoName);

  // if (!error) {
  //   return (
  //     <div style={{ border: "2px solid pink", padding: 4, margin: 4 }}>
  //       {/*// @ts-ignore*/}
  //       <b>{error.name}</b>: {error.message}
  //       <br />
  //       Error occured for repo {repoName}.
  //     </div>
  //   );
  // }

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
