# Project Title
React Single Page Application demo that uses Github Gist API to show all public gists for an user.

## Description
ReactJS Single Page App demo which has the following features:
* Search: When a user enters a username, it should be able to get a full list of public gists by that user.


## Libraries/Components used
* create-react-app: Starter kit to create a reactjs app.
* bulma: For styling and basic layout.
* react-router-dom: For routing between the search results screen and the detail screen.
* moment.js: For date format.
* For api calls I am using the fetch() method, which returns a Promise.

## Getting Started and Installing
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

* First Git clone the repo into your computer
```
git clone https://github.com/jaimeduque17/github-test-react.git
```
* Open your terminal
```
$ cd github-test-react
$ npm install
```
* This should install all the dependencies. Once done
* Run 
``` 
$ yarn start
or
$ npm start
```
* to start the server.
* open (http://localhost:3000) in your browser. 
* This should open up the Demo App


#### Generating a Production build
```
$ cd github-test-react
$ npm run build
or
$ yarn build
```

## Live Demo
I have deployed the demo application into Netlify server. 
* Live Demo URL: [https://github-test-react.netlify.app/](https://github-test-react.netlify.app/)

## Possible Improvements
* Pagination for large result set.[https://github.com/seatgeek/react-infinite](react-infinite) or [https://github.com/bvaughn/react-virtualized](react-virtualized).
* Better Styling.
* Redux Implementation.
* Unit Tests - JEST & Enzyme.

## Author
* **Jaime Duque** - (https://github.com/jaimeduque17)

## License
This project is licensed under the MIT License