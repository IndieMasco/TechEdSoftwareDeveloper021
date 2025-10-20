# How to install TailwindCSS for Vite.

- First, install the tailwindcss and @tailwindcss/vite dependencies. In your terminal, run the following command:

  - `npm install tailwindcss @tailwindcss/vite`

- We now have to configure the Vite plugin in our vite.config.js file. It should look like this:

```javascript
// This should already be within the file
import { defineConfig } from "vite";

// We import the tailwindcss package here
import tailwindcss from "@tailwindcss/vite";

// We add the plugin tailwindcss(), so Tailwind CSS is available to our whole React app
export default defineConfig({
  plugins: [tailwindcss()],
});
```

- Finally, we add the tailwindcss import at the top of our globals stylesheet – in this case, we are using App.css.

```javascript
@import "tailwindcss";
```
