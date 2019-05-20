const repos = require('../__mocks__/repos.json');
const { writeDataToFile } = require ('./fileUtils');

function paginateResults(data) {
  const size = 1000;
  const repoPageObj = {};
  const totalResults = data.length;
  const totalPages = Math.ceil(totalResults / size);

  for (let i = 1; i <= totalPages; i++) {
    const spliced = data.splice(0, size);
    repoPageObj[i] = spliced;
  }

  writeDataToFile('pagedRepos', repoPageObj);
}

paginateResults(repos);
