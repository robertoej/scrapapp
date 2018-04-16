# Scrapapp
A simple script for web scraping built on Nodejs. This project aims to present how scraping works on Nodejs for *newcomers*.

The very beginning:
mkdir scrapapp
cd scrapapp
npm init (creates a package.json for you)


Now we are ready to get all we need. It's time to install the modules.

## Modules (dev)
https://www.npmjs.com/package/expect
https://www.npmjs.com/package/mocha (global install)
https://www.npmjs.com/package/nodemon
https://www.npmjs.com/package/supertest

## Modules (prod)
https://www.npmjs.com/package/express

Great! Let's create our starting point.
touch index.js

Now that fast! How about doing it right? Let's start with testing!
mkdir tests
cd tests
touch index.test.js

Let's also prepare our test command...
"test": "mocha tests/*.test.js",
"test-watch": "nodemon --exec 'npm test'"

Our starting point will provide a service for returning the expected message. It will run on express, and will open a GET endpoint. It will also be exported for testing purposes.
