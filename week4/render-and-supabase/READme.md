# Deploying a Client and Sever on Render & Environment Variables

- We had to do the work within a different repo; otherwise, it wouldn't work properly

[Repo](https://github.com/IndieMasco/monorepo)

## Client and server set-up within the terminal (Ubuntu)

- Step 1 - Make a parent folder for the client and server `mkdir (name of parent folder)` , `cd (name of parent folder)`

- Step 2 - Once your within the parent folder `npm create vite@(what version you are using)` or `npm create vite@latest`

  - You can use `node -v` to check what version you are using

- Step 3 - follow the steps in the terminal

  - Project name: client
  - Select a framework: Vinilla
  - Select a variant: JavaScript

- Step 4 - follow the steps in the terminal

  - `cd client`
  - `npm install` wait for it to be done
  - `npm run dev`
  - It will then give you a localhost URL so you can check if it worked
  - Once you've check its working go back into the terminal and use **ctrl+c** to stop the localhost

- Step 5 - `cd ..` back into the parent folder so your in (name of parent folder)

- Step 6 - Now you'll make a new folder for your server

  - `mkdir server`
  - `cd server`

- Step 7 - Now that your in your server folder

  - `npm init -y` this creates your package.JSON
  - `npm i express cors Dotenv PG` this will install all 4 packages you will need within your server folder
  - `touch server.js dbConnection.js .env .gitignore` this will create the extra files you will need

- Step 8 - now you will want to `cd ..` back into the parent folder and open it within VSCode `code .`
  - Once your in VSCode all you should see is your client and server folders you made
  - Make a READme.md file

## Server set-up within VSCode

- Step 1 - Within the package.json file you will want to add

  - `"dev: "node --watch server"` within `"scripts`
  - `"type": "module"` at the bottom between the last two `}`

- Step 2 - withing the server.js file you will want to add
  - On the line where it says --> Server is running in port ${PORT} <-- it should only have one ` each side of it, it shows two each side because of how the READme file works

````import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";```

`const app = express();`
`app.use(cors());`
`app.use(express.json());`

` const PORT = 8080;`
`app.listen(PORT, function () {`
`  console.info(`` Server is running in port ${PORT}``);`
`}); `

`app.get("/", function (req, res) {`
`  res.json({ message: "Welcome to the server. GET comfy" });`
`});`

- Step 3 - Withing the .gitignore file you will want to add
  - node_modules
  - .env

## Render

- Create a render.com account

  - Go to Render.com and sign up for a new account. It might be easiest to log in with your Github account.

- Deploy the server as a Node.js app

  - Create a new “Web service”, and connect your Github repo containing ‘client’ and ‘server’ directories.
  - Set the “Root directory” to be server, where you server code lives.
  - Set the “Build Command” to be npm install so it will install our NPM dependencies.
  - Set the “Start Command” to be node server.js so it will run the node server, the same as on our local machine.
  - Save the changes, and wait for the deployment and build to run. You can watch the logs to see what’s happening.
  - Once it finishes, note the URL you’re given. It will be something like https://<your-app-name>.onrender.com/.
  - Visit that URL in your browser, and you should be able to visit the routes defined in your server code.

- Deploy the client as a static site

  - Create a new “Static site”, and connect your Github repo containing ‘client’ and ‘server’ directories.
  - Set the “Root directory” to be client, where you client code lives.
  - Set the “Build Command” to be npm install; npm run build so it will install our NPM dependencies and build our app (assuming we have configured the build script in our package.json).
  - Set the “Publish Directory” to be dist.
  - Save the changes, and wait for the deployment and build to run. You can watch the logs to see what’s happening.
  - Once it finishes, note the URL you’re given. It will be something like https://`<your-app-name>`.onrender.com/.
  - Visit that URL in your browser, and you should be able to see your website.

- Confirm the client and server are connected
  - Visit the URL of your client app, and open the developer tools. You should see the client is making requests to the server, and getting responses.
````
