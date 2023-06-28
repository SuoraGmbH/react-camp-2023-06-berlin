import React, { useState } from "react";
import GithubRepoStats from "./GithubRepoStats";

const DynamicGithubRepoStats: React.FunctionComponent = () => {
  const [repoName, setRepoName] = useState("facebook/react");

  return (
    <>
      <input
        value={repoName}
        onChange={(event) => setRepoName(event.target.value)}
      />
      {repoName}
      <GithubRepoStats repoName={repoName} />
    </>
  );
};

export default DynamicGithubRepoStats;
