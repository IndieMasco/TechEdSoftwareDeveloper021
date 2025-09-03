# Deploying a Client and Sever on Render & Environment Variables

- We had to do the work within a different repo; otherwise, it wouldn't work properly

[Repo](https://github.com/IndieMasco/monorepo)

#### Packages to install

- Vite - Client
- Express - Server

#### Packages to install within the server folder

- Cors
- Dotenv
- PG

# Render

#### Create a render.com account

- Go to Render.com and sign up for a new account. It might be easiest to log in with your Github account.

#### Deploy the server as a Node.js app

- Create a new “Web service”, and connect your Github repo containing ‘client’ and ‘server’ directories.

- Set the “Root directory” to be server, where you server code lives.

- Set the “Build Command” to be npm install so it will install our NPM dependencies.

- Set the “Start Command” to be node server.js so it will run the node server, the same as on our local machine.

- Save the changes, and wait for the deployment and build to run. You can watch the logs to see what’s happening.

- Once it finishes, note the URL you’re given. It will be something like https://<your-app-name>.onrender.com/.

- Visit that URL in your browser, and you should be able to visit the routes defined in your server code.

#### Deploy the client as a static site

- Create a new “Static site”, and connect your Github repo containing ‘client’ and ‘server’ directories.

- Set the “Root directory” to be client, where you client code lives.

- Set the “Build Command” to be npm install; npm run build so it will install our NPM dependencies and build our app (assuming we have configured the build script in our package.json).

- Set the “Publish Directory” to be dist.

- Save the changes, and wait for the deployment and build to run. You can watch the logs to see what’s happening.

- Once it finishes, note the URL you’re given. It will be something like https://`<your-app-name>`.onrender.com/.

- Visit that URL in your browser, and you should be able to see your website.

#### Confirm the client and server are connected

- Visit the URL of your client app, and open the developer tools. You should see the client is making requests to the server, and getting responses.
