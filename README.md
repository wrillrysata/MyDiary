![Travis CI Build Status](https://travis-ci.org/Ijebusoma/My-Diary.svg?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/db63bb94d982007aba99/maintainability)](https://codeclimate.com/github/Ijebusoma/My-Diary/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/Ijebusoma/My-Diary/badge.svg?branch=develop)](https://coveralls.io/github/Ijebusoma/My-Diary?branch=develop)

# My-Diary
My Diary is an online journal where users can pen down their thoughts and feelings.

# Features

* Users can sign in or sign up
* Users can get all entries
* Users can get one entry
* Users can add an entry
* Users can update an entry

# To Run :
* Clone this repo : 
`git clone https://github.com/Ijebusoma/My-Diary.git`

* Navigate to the directory and type the commands: `npm install && npm run start`

### Navigate to the browser and access the following URLs:

* GET http://localhost:3000/api/v1/allentries - to view all entries

* POST http://localhost:3000/api/v1/new/:id/:note - to add an entry

* PUT http://localhost:3000/api/v1/edit/1/:note to update an entry with ID of 1




