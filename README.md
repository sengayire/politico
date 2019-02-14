[![Build Status](https://travis-ci.org/sengayire/politico.svg?branch=develop)](https://travis-ci.org/sengayire/politico)

[![Maintainability](https://api.codeclimate.com/v1/badges/b7f97318bdbc0480c4e2/maintainability)](https://codeclimate.com/github/sengayire/politico/maintainability)

[![Coverage Status](https://coveralls.io/repos/github/sengayire/politico/badge.svg?branch=develop)](https://coveralls.io/github/sengayire/politico?branch=develop)

# politico


The general elections are around the corner, hence it’s a political season. Get into the mood of the season and help build a platform which both the politicians and citizens can use.
Politico enables citizens give their mandate to politicians running for different government offices
while building trust in the process through transparency.

i have added this app on Github pages for someone who want to look how it work must foolow it via this link: https://sengayire.github.io/politico/UI/index.html

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
