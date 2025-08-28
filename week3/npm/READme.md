# NPM Set-up

## Step 1

- Initialise NPM in your project

```bash
npm init -y
```

This command will create a file called package.json

## Step 2

```bash
npm insall packageName
```

You can addreviate install to i

```bash
npm i packageName
```

## Step 3

- Ignore your node modules and secret files
- Create a .gitignore file
- Add the name of the files and folders you dont want to push to your GitHub repo

## Step 4

- Add a JS file to start coding

## Step 5

- Turn your JS file into a module
- we are going to add `"type": "module"` into out package.json

## Extra step

- We can ass a script to our package.json to run our app.js
-

<!-- ==================================== -->

- If i want to use code from a different location in my project, I need to import it

###### commonJS

- const packageName = require("packageName")

###### ES6

- import packageName from "packageName"

- In this case, we are importing the packageName from the node_modules, so we can use it in the app.js file
