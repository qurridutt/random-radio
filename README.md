# Random Radio

Random Radio is a project created at [Malmö University](https://mau.se/) as part of the course [Cross-platform Applications with Web Technologies](https://edu.mah.se/en/Course/DA355A) by [Adam Hermansson](https://github.com/qurridutt/), [John Iversen](https://github.com/johniversen) and [Victor Dahl](https://github.com/victordahl).

The project uses [Swedish Radio Open API](https://sverigesradio.se/oppetapi) to fetch random groups of radio episodes for your liking and listening pleasure.

Enjoy.

### Installation

1. Make sure you have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed on your machine.
2. `$ git clone https://github.com/qurridutt/random-radio.git`
3. `$ cd random-radio`
4. `$ npm install`
5. `$ npm start`
6. and voila! your Random Radio will now run on [localhost:3000](http://localhost:3000)

### Choice of technology

The project is build with [React.js](https://reactjs.org/) with the reasoning that it is the current market leader for front-end technologies, specifically compared to [Angular.js](https://angular.io/) and [Vue.js](https://vuejs.org/) [1]. Also according to Tech Magic, who did a page scrape on Indeed.com (a website for searching jobs), React.js represents 78.1% of all front-end jobs available at the site, specifically compared to Angular and Vue [2].

React supports the virual DOM, which is great for single-page applications such as this one. It means we can make an API-call and present the results dynamically, without having to reload the page.

#### Sources

[1] https://www.similartech.com/compare/angular-js-vs-react-js

[2] https://medium.com/@TechMagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d