# code-gov-site-map-generator
Generates Sitemap.xml for Code.gov

## Introduction

[Code.gov](https://code.gov) is a website promoting good practices in code development, collaboration, and reuse across the U.S.  Government. Code.gov provides tools and guidance to help agencies implement the [Federal Source Code Policy](https://sourcecode.cio.gov). It also includes an inventory of government custom code to promote reuse between agencies and provides tools to help government and the public collaborate on open source projects.

To learn more about the project, check out this [blog post](https://www.whitehouse.gov/blog/2016/08/08/peoples-code).

Code.gov is an open source project, so we invite your contributions, be it in the form of code, design, or ideas.

## Setup instructions
To run this app locally you'll need a Code.gov API key. If you don't have one, go to the [https://developers.code.gov/key.html](https://developers.code.gov/key.html) to obtain one.

Once you have an API key, clone the repo and run the `npm install` command in the project's root directory to install all of the project’s dependencies.

Run `cp env.example .env` to create a template .env file in the root directory of the project 

Replace “[your api key goes here]” in the .env file with your API key

## Generating a new sitemap.xml

Follow the instructions in the [Component Release Management](https://github.com/GSA/code-gov-front-end/wiki/Component-release-management) wiki page of [`code-gov-front-end`](https://github.com/GSA/code-gov-front-end) to follow the steps to release an update to this component.

Run the `npm run generate` terminal command to run the sitemap generation script. Once generated, verify that the repository count matches the project on the `Browse Projects` page on [production](https://code.gov/browse-projects?page=1&size=10&sort=data_quality). Commit and push the new sitemap to a new branch. Submit a PR to merge this branch into master. After the PR is merged, run `git checkout master` and `git pull origin master` to update your local repository.

Publish the new sitemap to npm following the instructions in the [Component Release Management](https://github.com/GSA/code-gov-front-end/wiki/Component-release-management). This step is required to ensure that code-gov-front-end consumes the latest version of this component.


## Questions?

Twitter: [@CodeDotGov](https://twitter.com/CodeDotGov) <br />
Email: [code@gsa.gov](mailto:code@gsa.gov) <br />
LinkedIn: [code-gov](https://www.linkedin.com/company/code-gov)<br />
Join our #opensource-public Slack channel: https://chat.18f.gov/<br />

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
