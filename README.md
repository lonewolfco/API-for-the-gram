# 📱 API-for-the-gram

[![License: MIT](https://img.shields.io/badge/License-MIT-lightblue.svg)](https://opensource.org/licenses/MIT)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://api-for-the-gram.herokuapp.com/api/users/) 


An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.  The app uses express.js for routing,  a MongoDB database, and the Mongoose ODM. 

## Table of Contents
- [Description](#description)
- [User Story](#userstory)
- [Acceptance Criteria](#ac)
- [Mock-up](#mockup)
- [How to Use](#howtouse)
- [Languages Used](#languages)
- [License](#license)

---

## [Description](#description)

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. 

API-for-the-gram is an API for a social network web application where users can share their thoughts, react to followers’ thoughts, and create a follower list. 

No seed data is provided, so you’ll need to create your own data using Insomnia after you’ve created your API.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## [User Story](#userstory)

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## [Acceptance Criteria](#ac)

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## [Mock-up](#mockup)

The following video shows examples of the application's API routes being tested in Insomnia.
<a href="https://www.loom.com/share/2f5d1f50b212484fb39f76ecbbc45031">
    <p>Insomnia - API-for-the-gram</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/2f5d1f50b212484fb39f76ecbbc45031-with-play.gif">
  </a>

## [How to Use](#howtouse)

Simply paste the following link into insomnia https://api-for-the-gram.herokuapp.com/ and be sure to add in the appropiate path to test a specific route. 

## [Languages Used](#languages)
- Express.js for routing
- MongoDB database, and the Mongoose ODM. 
- JavaScript `Date` object to format timestamps.
- Deployed via Heroku


---
© 2022 lonewolfco

Copyright (c) 2022 lonewolfco (Lo Selby)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
