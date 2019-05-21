const CodeGovAPIClient = require('@code.gov/api-client/src/index.js').CodeGovAPIClient;
const dotenv = require('dotenv');
dotenv.config(); // needed to make node look for env vars in the .env file

const { getAllRepoJson } = require('../utils/repoJSON');
const { paginateResults } = require('../utils/testUtils');

// initialize API client
const client = new CodeGovAPIClient({
  api_key: process.env.CODE_GOV_API_KEY,
  debug: true
});

getAllRepoJson(client).then((data) => {
  paginateResults(data);
})
.catch((err) => {
  throw new Error(err);
});
