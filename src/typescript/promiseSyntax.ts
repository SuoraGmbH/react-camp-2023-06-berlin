fetch("url")
  .then(function (response) {
    return response.status;
  })
  .then(function (status) {
    return status * 2;
  })
  .then(function (status) {
    return status / 2;
  });

fetch("url")
  .then(function (response) {
    return response.json();
  })
  .then(function (body) {
    console.log(body);

    return body.stargazers_count;
  })
  .then(function (stargazersCount) {
    // @ts-ignore das gibt es hier nicht
    setStargazersCount(stargazersCount);
  });

fetch("url").then(function (response) {
  response.json().then(function (http) {});
});

export const foo = "bar";
