# code-gov-site-map-generator
Generates Sitemap.xml for Code.gov

## Introduction

[Code.gov](https://code.gov) is a website promoting good practices in code development, collaboration, and reuse across the U.S.  Government. Code.gov provides tools and guidance to help agencies implement the [Federal Source Code Policy](https://sourcecode.cio.gov). It also includes an inventory of government custom code to promote reuse between agencies and provides tools to help government and the public collaborate on open source projects.

To learn more about the project, check out this [blog post](https://www.whitehouse.gov/blog/2016/08/08/peoples-code).

Code.gov is an open source project, so we invite your contributions, be it in the form of code, design, or ideas.

## Quick Setup Instructions
To run this app locally you'll need a code.gov API key.  If you don't have one, go to the following url to obtain one: https://developers.code.gov/key.html

Once you have an API key, clone the repo and run the `npm install` command in the project's root directory to install all of the project’s dependencies.

Run this terminal command: `cp env.example .env`

Replace `[your api key goes here]` in the `.env` file with your API key

Run the `npm run generate` terminal command to run the sitemap generation script.

There are more than 6000 projects currently in the project database. The API keys you get from [developers.code.gov](https://developers.code.gov/key.html) have a default result limit of 1000 projects. You'll need to get your result limit raised in order to return all projects in the database.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
