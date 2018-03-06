# Building a Secure Node.js Apps

This repository contains a project that shows how to build a secure Node.js application.

## Running

To run this project, you will need to create an Auth0 Client. After that, you will have to issue the following commands:

```bash
# clone the repo
git clone https://github.com/OMENSAH/Build-and-Authenticate-a-Node-Js-App-with-JSON-Web-Tokens ./nodejs-app

# move working directory into it
cd nodejs-app

# set environment variables
export AUTH0_DOMAIN=bkrebs.auth0.com
export AUTH0_CLIENT_ID=c0aGnQ5vdklL2oSZsnSe5lG23p1xme2B
export AUTH0_CLIENT_SECRET=35pwZ5skOp9a_u7qJO0OmKFn2K3F1OxNvR4Tm0NImQHb9LBg8ueb3tjcDVkn_ju9
export AUTH0_CALLBACK_URL=http://localhost:3000/callback

# run the app
node app
```
