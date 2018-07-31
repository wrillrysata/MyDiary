![Travis CI Build Status](https://travis-ci.org/Ijebusoma/My-Diary.svg?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/db63bb94d982007aba99/maintainability)](https://codeclimate.com/github/Ijebusoma/My-Diary/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/db63bb94d982007aba99/test_coverage)](https://codeclimate.com/github/Ijebusoma/My-Diary/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/Ijebusoma/My-Diary/badge.svg?branch=develop)](https://coveralls.io/github/Ijebusoma/My-Diary?branch=develop)

## My-Diary
My Diary is an online journal where users can pen down their thoughts and feelings.

## Required Features

* Users can create account and sign in 
* Users can get all their diary entries
* Users can get details of a  particular entry
* Users can add a new entry
* Users can update their entry

## Optional Features
* Users can set and get notifications to create entries

## Technologies 
* Nodejs
* Express
* Mocha, Chai, Babel, eslint
* Postgres
* JWT authentication

## API Endpoints
Endpoints | Functionality
------------ | -------------
POST /auth/signup | Register a new user
POST /auth/login | Sign in a user
GET /entries | Fetch all user entries
GET /entries/<entryId>| Fetch the details of an entry
PUT /entries/<entryId> | Modify a diary entry

## How to set up:
> Clone repo and cd into directory: 
git clone https://github.com/Ijebusoma/My-Diary.git

# install dependencies
>  npm install
 #serve app
> npm start

# build for production
> npm run build

## Testing
# Run test cases
 > npm test

UI Template : madeofco.de/My-Diary/template/dashboard.html,
madeofco.de/My-Diary/template/index.html

API Endpoint: ije-my-diary.herokuapp.com/api/v1/


## ACKNOWLEDGEMENTS
 * [Andela Git Naming guide](https://github.com/andela/bestpractices/wiki/Git-naming-conventions-and-best-practices)
 
 * [w3schools](w3schools.com)
 * [Scotch IO](scotch.io)
 * [mherman.org](mherman.org)



