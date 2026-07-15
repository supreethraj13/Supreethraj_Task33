# Task-33 — Simple Node HTTP Server

This is a beginner Node.js project that shows how to build a small web server using the built-in `http` module.

## What the app does

- Starts a Node server on port `3000`
- Serves a simple home page at `/home`
- Serves an about page at `/about`
- Serves a contact page at `/contact`
- Shows a custom 404 page for any other route

## Files included

- `index.js` - main server file with route handling and simple comments
- `home.html` - HTML for the home page
- `about.html` - HTML for the about page
- `contact.html` - HTML for the contact page
- `404.html` - HTML for the page-not-found response

## How to run it

```bash
cd Node/task-33
npm install
npm start
```

Then open `http://localhost:3000/home` in your browser.

## Routes

- `/home` - Home page
- `/about` - About page
- `/contact` - Contact page
- any other path - 404 page

## Notes

- The server uses `fs.readFile` to load HTML pages from disk.
- The app is written for beginners with easy route logic and comments.
# Supreethraj_Task33
# Supreethraj_Task33
