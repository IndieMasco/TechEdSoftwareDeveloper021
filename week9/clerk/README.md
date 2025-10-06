# clerk set-up

## Step 1: Install clerk

```bash
npm install @clerk/nextjs
```

## Step 2: Connect out clerk application with out app

- We will use are evvironment variables
- Go to your application > configure > API keys
- Create .env.local file
- Paste your keys

## Step 3: Set up your middleware.js file

- The middleware.js file goes in the **SRC FOLDER**
- There is a template in the [Clerk documentation](https://clerk.com/docs/reference/nextjs/clerk-middleware)

## Step 4: Set up the clerk provider

- In the root layout.js, import and nest your root element within the `<ClerkProvider>`

## Step 5: configure public and protected routes in the middleware.js

- Decide which routes are public and protected
- add the protectted routes to your middleware.js
- Write middleware logic to protect your routes

## Step 6: Set up custom sign-in and sign-up rputes

- Create two routes: sign_in and Sign-up
- Add an optional [Catch-all segmrnt]()
- Add a page in the catch-all segmrnts folder
- Import the `<SignUp>` and `<SignIn>` components from clerk in their own respective pages
- Configure clerk to the
