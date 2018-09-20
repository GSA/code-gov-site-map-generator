const CodeGovAPIClient = require('@code.gov/api-client/src/index.js').CodeGovAPIClient;
const builder = require('xmlbuilder');
const fs = require('fs');

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
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/overview/introduction', 'monthly', .95);
createUrl(urlset, 'https://code.gov/#!/browse-projects', 'daily', .9);
createUrl(urlset, 'https://code.gov/#!/help-wanted', 'daily', .8);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/overview/tracking-progress', 'monthly', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/compliance/dashboard', 'monthly', .8);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/compliance/procurement', 'monthly', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/compliance/inventory-code', 'monthly', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/compliance/inventory-code/tools/validate-schema', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/compliance/inventory-code/tools/upgrade-schema', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/open-source/introduction', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/open-source/resources', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/open-source/measuring-code', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/docs/open-source/licensing', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/introduction', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/objectives', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/scope', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/solutions-analysis', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/code-reuse', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/open-source', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/exceptions', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/implementation', .7);
createUrl(urlset, 'https://code.gov/#!/policy-guide/policy/appendix', .7);

client.repos({ size: 1e7 }).then(data => {

  console.log("repos:", data.repos);
  data.repos.forEach(repo => {
    const projurl = `https://code.gov/#!/explore-code/agencies/${repo.agency.acronym}/repos/${repo.repoID}`;
    createUrl(urlset, projurl, .5);
  });

  const xml = urlset.end({ pretty: true });

  fs.writeFileSync('Sitemap.xml', xml, 'utf-8');

  console.log('Wrote Sitemap.xml');

});
