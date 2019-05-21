const CodeGovAPIClient = require('@code.gov/api-client/src/index.js').CodeGovAPIClient;
const builder = require('xmlbuilder');
const fs = require('fs');
const dotenv = require('dotenv');

const { getAllRepoJson } = require('./utils/repoJSON');

dotenv.config(); // needed to make node look for env vars in the .env file

const createUrl = (urlset, loc, changefreq, priority) => {
  const url = urlset.ele('url');
  url.ele('loc', {}, loc);
  url.ele('changefreq', {}, changefreq);
  url.ele('priority', {}, priority);
  return url;
}

// initialize API client
const client = new CodeGovAPIClient({
  api_key: process.env.CODE_GOV_API_KEY,
  debug: true
});

const urlset = builder.create('urlset', { encoding: 'UTF-8' });

urlset.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
urlset.att('xmlns:news', 'http://www.google.com/schemas/sitemap-news/0.9');
urlset.att('xmlns:xhtml', 'http://www.w3.org/1999/xhtml');
urlset.att('xmlns:mobile', 'http://www.google.com/schemas/sitemap-mobile/1.0');
urlset.att('xmlns:image', 'http://www.google.com/schemas/sitemap-image/1.1');
urlset.att('xmlns:video', 'http://www.google.com/schemas/sitemap-video/1.1');

createUrl(urlset, 'https://code.gov', 'daily', 1);
createUrl(urlset, 'https://code.gov/about/overview/introduction', 'monthly', .95);
createUrl(urlset, 'https://code.gov/browse-projects', 'daily', .9);
createUrl(urlset, 'https://code.gov/open-tasks', 'daily', .8);
createUrl(urlset, 'https://code.gov/about/overview/tracking-progress', 'monthly', .7);
createUrl(urlset, 'https://code.gov/about/compliance/dashboard', 'monthly', .8);
createUrl(urlset, 'https://code.gov/about/compliance/procurement', 'monthly', .7);
createUrl(urlset, 'https://code.gov/about/compliance/inventory-code', 'monthly', .7);
createUrl(urlset, 'https://code.gov/about/compliance/inventory-code/validate-schema', 'monthly', .7);
createUrl(urlset, 'https://code.gov/about/open-source/introduction', 'monthly', .7);
createUrl(urlset, 'https://code.gov/about/open-source/resources', 'monthly', .7);
createUrl(urlset, 'https://code.gov/about/open-source/measuring-code', 'monthly', .7);
createUrl(urlset, 'https://code.gov/about/open-source/licensing', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/introduction', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/objectives', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/scope', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/solutions-analysis', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/code-reuse', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/open-source', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/exceptions', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/implementation', 'monthly', .7);
createUrl(urlset, 'https://code.gov/policy-guide/appendix', 'monthly', .7);

getAllRepoJson(client).then((data) => {
  console.log("repos:", data);
  console.log("repo count:", data.length);
  console.log(`${data.length} projects were added.`);

  data.forEach(repo => {
    const projurl = `https://code.gov/projects/${repo.repoID}`;
    createUrl(urlset, projurl, 'monthly', .5);
  });

  const xml = urlset.end({ pretty: true });

  fs.writeFileSync('sitemap.xml', xml, 'utf-8');

  console.log('Wrote sitemap.xml');
})
.catch((err) => {
  throw new Error(err);
});
