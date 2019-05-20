function getPromiseArray(paramsObj) {
  const { totalApiCalls, size, client } = paramsObj;
  const promiseArray = [];

  for (let i = 2; i <= totalApiCalls; i++) {
    promiseArray.push(client.repos({ size, page: i }));
  }

  return promiseArray;
}

function getAllRepoJson(client) {
  const size = 1000;

  return client.repos({ size, page: 1 }).then((data) => {
    const reposLeft = data.total - data.repos.length;
    let reposArray = data.repos;

    if (reposLeft === 0) {
      return reposArray;
    }

    const totalApiCalls = Math.ceil(data.total / size);

    return Promise.all(getPromiseArray({ totalApiCalls, size, client }))
      .then((results) => {
        results.forEach((result) => {
          reposArray = reposArray.concat(result.repos);
      });
      return Promise.resolve(reposArray);
    });
  })
  .catch((err) => {
    throw new Error(err);
  });
}

module.exports = Object.freeze({
  getAllRepoJson
});
