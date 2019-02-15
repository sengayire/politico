[![Build Status](https://travis-ci.org/sengayire/politico.svg?branch=develop)](https://travis-ci.org/sengayire/politico)

[![Maintainability](https://api.codeclimate.com/v1/badges/b7f97318bdbc0480c4e2/maintainability)](https://codeclimate.com/github/sengayire/politico/maintainability)

[![Coverage Status](https://coveralls.io/repos/github/sengayire/politico/badge.svg)](https://coveralls.io/github/sengayire/politico)

# politico


The general elections are around the corner, hence it’s a political season. Get into the mood of the season and help build a platform which both the politicians and citizens can use.
Politico enables citizens give their mandate to politicians running for different government offices
while building trust in the process through transparency.

i have added this app on Github pages for someone who want to look how it work must foolow it via this link: https://sengayire.github.io/politico/UI/index.html

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Here are the environment prerequisites for the web app

```
- NodeJS
```

## setup

- in order to start this app localy you have to Clone the repository in local directory
- switch to that diroctory 
- add a .env file to configure the envarnment variable then correct change the corresponding variables
- Run `npm install` to install node packages
- Run `npm run dev` to start the web app running localy


with an example of getting some data out of the system or using it for a little demo
before use any of thise andpoint you have to start **api/v1/** then the endpoint
these are  API Endpoints that will be used in the app:
* **POST /parties/** Create to create a political party
* **GET /parties** fetch all available political parties
* **GET /parties/:id** get specific ppolitical party
* **PATCH /parties/:id/name** Edit the name of a specific ​ political party​ .
* **DELETE /parties/:id** Delete a specific ​ political party.
* **POST /offices** Create a ​ political office​ .
* **GET /offices** Fetch all ​ political offices​ records
* **GET /offices/<office-id>** Fetch a specific ​ political office​ record

# Technology Tools used
* programing language: **javascript ES6** with **Babel** transpiler
* Server-side Framework: **Node/Express JS**
* Linting Library: **ESlint**
* Style Guide: **Airbnb**
* Testing Framework: **Mocha** with **Chai**

# Additional Tools
* TravisCI for Continous Integration
* nyc for test coverage
* CodeClimate and Coveralls for badges
* Heroku for app Deployment 

This is the  url link of the app on heroku: https://dashboard.heroku.com/apps/politico-andela 


## Authors

* **SENGAYIRE Prince** 
## Acknowledgments

* Alex Mochu

