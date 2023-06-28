import { useQuery } from "@tanstack/react-query";

const useGithubRepoStatsWithReactQuery = (repoName: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["githubRepo", repoName],
    queryFn: () => {
      return fetch(`https://api.github.com/repos/${repoName}`)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Received http status " + response.status);
          }

          return response.json();
        })
        .then((body) => body.stargazers_count);
    },
  });

  return { stargazersCount: data, error, isLoading };
};

export default useGithubRepoStatsWithReactQuery;
