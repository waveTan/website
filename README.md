# NULS

## Introduction
We use [VueJS](https://github.com/vuejs/vue) as the frontend framework, with [ExpressJS](https://github.com/expressjs/express)
running the backend server. [Strapi](https://github.com/strapi/strapi) is used for handling the Admin Panel, creating and 
updating entries in a [MySQL database](https://www.mysql.com/) but it does not serve the content, we handle this manually ourselves
in our backend server as we can create custom routes for faster requests.

## Contributing
### Code Style
We use [ESLint](https://github.com/eslint/eslint) to force code styling throughout the project. We import rules from third parties
as well as having custom ones, please review `.eslint` files for each top directory folder. The main imported rules are:
- [ESLint](https://eslint.org/docs/rules/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Vue](https://github.com/vuejs/eslint-plugin-vue)

### Testing
[Jest](https://github.com/facebook/jest) is used for testing both frontend and backend.
######TODO - Write tests


## Getting Started
#### Requirements
- NPM v6.1.0
- Node v9.5.0
- MySQL Server

#### Environment Configurations
To run each script you will first need to set up the environment variables for each script project. For the backend and frontend areas
there are files named `.env.example` to demonstrate what your `.env` file should contain.

##### Backend
- `/server/.env`

##### Frontend
- `/client/.env`

##### Admin Panel
- `/strapi/config/environments/development/database.json`
- `/strapi/config/environments/producation/database.json`
- `/strapi/config/environments/staging/database.json` 

#### Running
**Backend Server**
```$xslt
$ cd server
$ npm i
$ npm run dev
```
**Frontend Framework**
```$xslt
$ cd client
$ npm i
$ npm run dev
```
**Admin Panel**
```$xslt
$ cd strapi
$ npm i
$ npm run start
```
