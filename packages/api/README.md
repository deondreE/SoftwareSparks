## Software Sparks API Documentation
---

This is the documentation for the Software Sparks API. It is a RESTful API that is used to interact with the Software Sparks database. The API is written in Node.js and uses Express.js as the web framework. The database is a MongoDB database.

### API Endpoints

#### GET /API

This endpoint returns a JSON object with the following properties:

* `name` - The name of the API
* `version` - The version of the API
* `description` - A description of the API
* `author` - The author of the API
* `license` - The license of the API


#### GET /API/PROJECTS

This endpoint returns a JSON array of all the projects in the database. Each project is a JSON object with the following properties:

* `name` - The name of the project
* `description` - A description of the project
* `tags` - An array of tags for the project
* `links` - An array of links for the project
* `date` - The date the project was added to the database
* `lastUpdated` - The date the project was last updated
* `id` - The id of the project


#### GET /API/USERS

This endpoint returns a JSON array of all the users in the database. Each user is a JSON object with the following properties:

* `name` - The name of the user
* `email` - The email of the user
* `password` - The password of the user
* `date` - The date the user was added to the database
* `lastUpdated` - The date the user was last updated
* `id` - The id of the user

## File structure
---

The file structure of the API is as follows:

* `index.ts` - The main file of the API
* `package.json` - The package.json file for the API

## Running the API
---

To run the API, you must have Node.js installed. You can download Node.js from [here](https://nodejs.org/en/). Once you have Node.js installed, you can run the API by running the following commands in the terminal:

```bash
git clone
cd packages/api
npm install
npm run build
npm run dev
```