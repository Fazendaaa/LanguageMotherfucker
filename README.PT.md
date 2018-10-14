# Language Motherfucker
> "Do you speak it?"

<div align = "center">
<br>
<img src="./others/img/logo/logo.png" height=260>
<br>
<br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](./README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](./README.PT.md)

[![Build Status](https://img.shields.io/travis/Fazendaaa/LanguageMotherfucker.svg?style=flat-square)](https://travis-ci.org/Fazendaaa/LanguageMotherfucker)
[![codecov](https://img.shields.io/codecov/c/github/Fazendaaa/LanguageMotherfucker.svg?style=flat-square)](https://codecov.io/gh/Fazendaaa/LanguageMotherfucker)
[![Codacy Badge](https://img.shields.io/codacy/grade/6d64b00364bf413980280bd4e55d6115.svg?style=flat-square)](https://www.codacy.com/project/Fazendaaa/LanguageMotherfucker/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Fazendaaa/LanguageMotherfucker&amp;utm_campaign=Badge_Grade_Dashboard)
[![Dependencies](https://david-dm.org/Fazendaaa/LanguageMotherfucker.svg?style=flat-square)](https://codeclimate.com/github/Fazendaaa/LanguageMotherfucker/master/package.json)
[![Known Vulnerabilities](https://snyk.io/test/github/Fazendaaa/LanguageMotherfucker/badge.svg?style=flat-square&targetFile=package.json)](https://snyk.io/test/github/Fazendaaa/LanguageMotherfucker?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/a6a00d50601938edfdad/maintainability)](https://codeclimate.com/github/Fazendaaa/LanguageMotherfucker/maintainability)

</div>

## About
This bot was created with the intention of controlling groups that are only have a standard language to be used, telling users to have a talk only in the language and banishing them after three warnings. The advantage of using it is that administrators do not need to see the message all the time.

Besides that if a user who has been banned from another group for not speaking this language, when entering a new group will already receive a warning of bad behavior previously.

### Ban System
When the user sends a non-standard message, he will receive a notification that in two other messages like this he will be banning.

The group administrator can choose between the bot to automatically delete the user or to be notified about this misbehavior, leaving the decision to ban or not to the user or even restart the counter for that user - if he thinks that it will be necessary.

### Whitelist
In some cases, languages ​​like Portuguese have several branches, even though they are different between them, their speakers can understand each other. In this case, some users may get in a whitelist, preventing them from receiving warnings.

### Supported Languages
Most bot translations were done using [Google Translate](https://translate.google.com/), if you have any fluency in these languages, please consider correcting them if you see need or even adding a new one:

* [Dutch](./others/locales/nl.yaml)
* [English](./others/locales/en.yaml)
* [French](./others/locales/fr.yaml)
* [German](./others/locales/de.yaml)
* [Italian](./others/locales/it.yaml)
* [Portuguese - Brazil](./others/locales/pt.yaml)
* [Russian](./others/locales/ru.yaml)
* [Spanish](./others/locales/es.yaml)

## How to use it?

## Artwork
All the arts made for this bot were based on the [Pulp Fiction](https://www.imdb.com/title/tt0110912/) movie and the classic scene that can be checked [here](https://youtu.be/a0x6vIAtFcI).

## TODO
Since I will be keeping this README up to date with any major change and I don't use any versioning system to log all the fixed bugs or previous projects updates, you can still have a taste of what comes next and what is being under analysis right in the [Projects](https://github.com/Fazendaaa/LanguageMotherfucker/projects/) tab.

## Contributing
If you want to contribute to the bot, open a issue describing what you want to do, this is the best option since if such a change is necessary, you can implement it. Stay tuned just to follow [code](#code) and [tests](#tests) standards.

If the change you want to make is not of interest to the bot, do not be discouraged, fork this project and make your own version of it. The MIT license gives you such possibility.

If you are the project or even make a PR that is approved, please be sure to put your name in [CONTRIBUTORS.md](./CONTRIBUTORS.md) file.

## Built With
* [dotenv](https://github.com/motdotla/dotenv)
* [mongoose](https://github.com/Automattic/mongoose)
* [telegraf](https://github.com/telegraf/telegraf)
* [telegraf-i18n](https://github.com/telegraf/telegraf-i18n)
* [telegraf-session-redis](https://github.com/telegraf/telegraf-session-redis)

## Code
Plain and simple [Typescript](http://typescriptlang.org/) and the [Microsoft linter standards](https://github.com/Microsoft/tslint-microsoft-contrib) for it.

A important side note: _**"All functions that are assigned more than one parameter must have such parameters in an object."**_

### No Relative Paths
If you want to add another source file, be sure to also add its relative path in [tsconfig.json](./tsconfig.json), [jest.config.json](./jest.config.json) and [webpack.config.ts](./webpack.config.ts) also.

## Tests
Since there's a [Travis CI](http://travis-ci.org/) integration and [Codecov](https://codecov.io/), please be mindful when writing new features to not break any of those that are already implemented. Only English tests are required.

All of the tests were written with [Jest](https://facebook.github.io/jest/) with the help of [ts-jest](https://github.com/kulshekhar/ts-jest).

To run all tests just:

```bash
npm test
```

If you ran into some errors related to package dependencies and want to know how to handle it, read the [Security](##security) info.

## Security
A integration with [Snyk](https://snyk.io/) is present to ensure the Continuos Development (CD).

### Errors/Bugs in Dependencies
When Snyk report some errors or bugs that can be fixed, just follow the CLI command to fix them before running -- more info at their [docs](https://github.com/snyk/snyk#cli).

## Deploy
This bot is up and running at [Heroku](http://heroku.com/) in a [Docker](https://www.docker.com/) container. You can also deploy yourself this bot into Heroku through:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fazendaaa/LanguageMotherfucker)

But if you use [Azure](https://azure.microsoft.com/):

[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/?repository=https://github.com/Fazendaaa/LanguageMotherfucker/tree/master)

Or even deploy it in [Docker Cloud](https://cloud.docker.com/):

[![Deploy to Docker Cloud](https://files.cloud.docker.com/images/deploy-to-dockercloud.svg)](https://cloud.docker.com/stack/deploy/?repo=https://github.com/Fazendaaa/LanguageMotherfucker/tree/master)

## Authors
* Only [me](https://github.com/Fazendaaa) for now.

Consider buy me a coffee:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Fazenda)

Or even becoming a patron:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/Fazenda/overview)

## License
Like many Open-Source Software (OSS) the MIT license is used, more about it in [LICENSE](./LICENSE).
