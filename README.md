# Hangman-LD

Deployed at: http://this-is-hangman.herokuapp.com/

### Developer Documentation

#### Tools Used:

* [Javascript](https://www.javascript.com/)
* [HTML5](https://www.w3.org/TR/html5/)
* [CSS3](https://www.w3schools.com/css/css3_intro.asp/)
* [Materialize](http://www.materializecss.com/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Knex](http://knexjs.org/)

##### These tools were also used but aren't really needed for the app
* [Heroku](https://www.heroku.com/)
* [Chrome Dev Tools](https://developer.chrome.com/devtools/)
* [SQL Designer](https://ondras.zarovi.cz/sql/demo/)
* [Sketch](https://sketch.io/)

#### Want to contribute or just play around with Hangman-LD?

1. Fork the repo
2. Clone down to your local machine
3. cd into the repo 
4. Run npm install
5. Run ```nodemon server/server.js```
6. Open your browser and navigate to localhost:9000
7. Code! Play around! Be free!
8. Commit changes and make a pull request

#### Features

1. Difficulty: Allows user to choose their difficulty
2. Login: Allows users to create a login to store their score
3. Hints: Gives users two hints. 1: total vowel count, 2: random unrevealed letter
4. Guess: Allows users to try and guess the whole word
5. Diagram: An animated diagram for winning and losing. Hangman style
6. Choice List: A list of letters that tracks wrong and correct guesses
7. Dashes/Word Display: A display of dashes that will gradually reveal the word on correct guesses
8. Responsive: Tested on a variety of screen sizes and devices. Works and looks good doing it

#### Playing the Game

Playing the game is as simple as the classic. Once you start running the game on your local machine simply navigate to localhost:9000, watch those power levels, and follow the onscreen instructions. 

#### Feature Wish List

1. Challenge Mode: Players can challenge another player to a round
2. Multi-Language: I wanna add the support for Tagalog and Spanish. At least to start off
3. Rewards for High Scores: Things like badges and special colors or icons 
4. Fill in the blank _______, then submit a pull request

#### Client-Side Application Structure

    client
    ├── public
    │   ├── media
    │   └── modules
    │       ├── button.controller.js
    │       ├── choices.controller.js
    │       ├── difficulty.controller.js
    │       ├── guesses.controller.js
    │       ├── hangman.controller.js
    │       ├── init.controller.js
    │       └── user.controller.js
    ├──styles.css
    └──index.html

#### Back-End Application Structure

    server
    ├── controllers
    │   ├── gameController.js
    │   ├── mainController.js
    │   └── userController.js
    ├── db
    │   └── db.js
    ├── helpers
    ├── models
    │   └── userModel.js 
    ├── routes
    │   └── routes.js
    └── server.js

#### Client-Side Design & Tools

I used Javascript/HTML5/CSS with the jQuery framework heavily for this project. I chose to use these tools because they are critical tools for web development and that is the type of project I worked on. jQuery was essential for the interactivity of the app to function as well as it did without verbose Javascript code. For api calls, I used two types of frameworks, AJAX (jQuery) and Axios. I switched to axios to try and alleviate issues I was having with Heroku. But I was not able to do so.

For UI design I wanted a playful app that would invoke nostaglia of the tradition hand drawn game of Hangman. To do that I used Sketch to draw out the animations frame by frame and then programmatically flipped the images. The color pallete was chosen so that the user would focus on the areas that they needed to i.e.: the animations, the choices, and the buttons. 

I followed the MVC pattern and Revealing Module Patterns. I felt that these patterns suited functionality of the app because of how compartmentalized I made it. UI design is not my strongest suit so I used some Materialize to help with responsiveness and had to use a lot of 'id' attributes to override what I needed to. 

#### Server-Side Design & Tools

For the server, I also focused on a modular design. I have big plans for Hangman so I wanted to make sure that the backend was ready to be built up fast and easy. With that in mind, I setup a modular route system and have everything set for full CRUD operations. I used Node/Express/MySQL/knex for my primary backend tools with a variety of other frameworks. One issue I had here that ate up alot of my time was trying to get knex to work with Heroku. I had the app deployed up until I added the login feature for scoring. After that, even after I reverted my code, Heroku wouldn't launch. 

#### The Developer

* Ryan Morris
  * [LinkedIn](https://www.linkedin.com/in/spcryanmorris/)
  * [Facebook](https://www.facebook.com/lasthurray/)
