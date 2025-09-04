# Deploying a Client and Sever on Render & Environment Variables

- We had to do the work within a different repo; otherwise, it wouldn't work properly

[Repo](https://github.com/IndieMasco/monorepo)

## Client and server set-up within the terminal (Ubuntu)

- Step 1 - Make a parent folder for the client and server

  - `mkdir (name of parent folder)`
  - `cd (name of parent folder)`

- Step 2 - Once you're within the parent folder.

  - `npm create vite@(what version you are using)` or `npm create vite@latest`
  - You can use `node -v` to check what version you are using

- Step 3 - Follow the steps in the terminal

  - Project name: client
  - Select a framework: Vanilla
  - Select a variant: JavaScript

- Step 4 - Follow the steps in the terminal

  - `cd client`
  - `npm install` - Wait for it to be done
  - `npm run dev`
  - It will then give you a localhost URL so you can check if it worked
  - Once you've checked it's working, go back into the terminal and use **CTRL+C** to stop the localhost.

- Step 5 - `cd ..` back into the parent folder so you're in (name of parent folder).

- Step 6 - Now you'll make a new folder for your server

  - `mkdir server`
  - `cd server`

- Step 7 - Now that your in your server folder

  - `npm init -y` - This creates your package.json
  - `npm i express cors dotenv pg` - This will install all four packages you'll need within your server folder
  - `touch server.js dbConnection.js .env .gitignore` - This will create the extra files you'll need

- Step 8 - Now you'll want to `cd ..` back into the parent folder and open it within VSCode `code .`

  - Once you're in VSCode, all you should see are your client and server folders.
  - Make a READme.md file in the parent folder

## Server set-up within VSCode

- Step 1 - Within the package.json file, you'll want to add...

  - `"dev": "node --watch server"` within `"scripts"`
  - `"type": "module"` at the bottom between the last two `}`

- Step 2 - Within the server.js file, you'll want to add

```javascript
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});
```

- Step 3 - Within the .gitignore file, you'll want to add

  - node_modules
  - .env

## Pushing to GitHub

- Step 1 - Go to [GitHub](https://github.com/) and make an empty repo **DO NOT ADD A READme FILE**

  - Name the repo the same as your parent folder

- Step 2 - Go to your terminal (Ubuntu) and `cd` into the parent folder for your client and server.

- Step 3 - Now that you're within your parent folder, we are going to push to our empty repo.

  - `git init`
  - `git remote add origin git@github.com:(YourUserName)/(NameOfRepo).git` - You can get this within the empty repo
  - `git add .`
  - `git commit -m "set up client and server"`
  - `git push`
  - `git push --set-upstream origin main` - This will show up in the terminal after you have run `git push`, so you can just copy and paste it

- Step 4 - Everything should now be pushed into your empty repo

## Render

- Create a render.com account

  - Go to [Render](https://render.com/) and sign up for a new account. It might be easiest to log in with your Github account.

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

## SupaBase

- Step 1 - Go to [SupaBase](https://supabase.com/) and sign up for a new account. It might be easiest to log in with your Github account.

- Step 2 - You'll want to create a new project

  - Click the **New Project** button
  - Project name: Use the same name as your parent folder, or choose a new one
  - Database password: Let it generate a password for you
  - Region: The closest one to you
  - Click Create New Project
  - You'll only need to do this part (Step 2) once to create a project (database), then you can store all your tables in it

- Step 3 - Open your parent folder in VSCode

  - We're going to edit some of the files within the server folder to connect to Supabase

- Step 4 - Within the dbConnection.js file, you'll want to add

```javascript
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
```

- Step 5 - Within the .env file, you'll want to add

  - DATABASE_URL= (**LOOK AT STEP 6**)
  - DATABASE_PASSWORD= (This will be the password you let Supabase generate for you)

- Step 6 - To get the URL you'll need, go to the project you made on Supabase

  - Once you're in your project, click the button at the top called **Connect**
  - Scroll down until you see Transaction Pooler
  - You'll want to copy the URL and paste it next to DATABASE_URL=
  - Within the URL, you'll have --> [YOUR-PASSWORD] <-- you'll want to replace that placeholder with the password you generated.
