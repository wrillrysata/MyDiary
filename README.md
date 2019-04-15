[![Build Status](https://travis-ci.org/Ijebusoma/MyDiary.svg?branch=master)](https://travis-ci.org/Ijebusoma/MyDiary)
[![Maintainability](https://api.codeclimate.com/v1/badges/db63bb94d982007aba99/maintainability)](https://codeclimate.com/github/Ijebusoma/My-Diary/maintainability)
[![codecov](https://codecov.io/gh/Ijebusoma/MyDiary/branch/master/graph/badge.svg)](https://codecov.io/gh/Ijebusoma/MyDiary)


## My-Diary
My Diary is an online journal where users can safely pen down their thoughts and feelings.

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
GET /entries/`<entryId>`| Fetch the details of an entry
PUT /entries/`<entryId>` | Modify a diary entry
DELETE /entries/`<entryId>` | Delete a diary entry




