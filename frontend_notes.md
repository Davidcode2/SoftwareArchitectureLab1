--- title: Lab 1 Frontend date: 2023-03-14 12:47 ---

MERN and MEAN Stack Mongo DB Express Angular/React and Node.js

MongoDB provides an idiomatic javascript driver that allows developers to write
data to the database in way that is familiar to them.

# Angular

Angular is a web framework that allows developers to write reactive web apps.
Reactive means that the user gets instant feedback on input opposed to having
to fill in a form and clicking submit to wait for a response from the server.

Angular can run in the clients browser as well as on the server or as a desktop
app.
https://www.mongodb.com/blog/post/the-modern-application-stack-part-1-introducing-the-mean-stack 

Angular breaks the code up into components. These are folders containing a
typescript file which is responsible for handling any logic happening on that
page, a css file or similar style sheet file, a test file and a html file known
as the template.

Angular enhances standard html with it's on so called directives. These include
\*ngFor for creating loops and \*ngIf for creating conditionals.

# React

React is a javascript library. It is similar to Angular in that it breaks the
frontend application up into components. React doesn't use distinct files for
the logic and the view, but provides a tool to put the html directly into the
javascript code. It is called JSX. 

## Differences between Angular and React

Angular is more powerful, providing routing and other stuff. While React is
more focused on providing a tool to create components. It is possible to use
React only for a small part of an application or introduce it incrementally
into an existing project.

# Express

Express runs the backend application code. It runs as a module within the
node.js environment.

Express can handle routing requests to the right parts of the application.

Express can be used to run all the business logic and even generate html that
is to be rendered by the browser. It can on the other extreme also be used to
only provide a REST API.

# Node.js

Javascript runtime environment Node.js is an asynchronous event driven engine.
Includes useful functionality out of the box like HTTP. Can be extended using
npm.

# MongoDB

MongoDB does not store data in rows and columns but instead stores data in json
documents. What is a schema?

MongoDB places itself between Key-Value Stores (Redis) and Relational Databases

## MongoDB Atlas

Database as a Service

# Who does what?

There is overlap in the things that each technology can do. Both angular and
express are capable of performing rounting and angular is able to power the
business logic of your application. More traditionally however the business
logic is handled in the backend, thus express is used for this.

## Why do business logic on the backend? 

- The backend is closer to the database, therefore making data access quicker.
- Sensitive data is kept on the server and is not exposed to the client.
- Application code is hidden from the user.
- One is not reliant on the hardware of the enduser but can use powerful server
  hardware for cpu intensive tasks.

## What are reasons to put more business logic on the client side?

- One can use the clients hardware which is becoming more powerful over the
  years, thus saving money on servers.
- The response times can be better, if there aren't too many calls to the
  server since everything happens right there in the client.
- The app may be able to perform some useful tasks even when the client has no
  internet connection.

## Third option 

Performing some logic right in the database. MongoDB provides powerful tools to
perform analytics on the data that would otherwise have to be done on a server
or the frontend. see 'Aggregation Framework'.

# The role of REST APIs in the whole story

REST Apis enable developers to create apps that make use of many different
services thus greatly enhancing what any one application can do. It breaks down
the silos that applications once where.

# Micro Frontends

extends the concept of micro services to the frontend world. With micro
frontends each team is responsible for a feature and does not build just the
frontend for that feature and later tries to integrate it with the backend that
was built by another team, but is responsible for the entire vertical stack for
this feature. This means that the feature is a standalone that could be reused
in another app without much hassle.

It extends the idea of microservices where teams are responsible for a feature
with the backend and database included but the frontend still being a
'monolith'. [source](https://micro-frontends.org/)

# Single Page Web App

A webpage that dynamically rewrites the current page with content based on user
interaction or similar. This is opposed to the traditional way, where the page
loads in another page from the server on user interaction.

This results in smoother transitions where not the entire page has to be
rerendered on an interaction but only the parts that change. This means a
sidebar will remain in place and not be reloaded over the access time of a
user. This reduces loading times and annoying flickering.

All the necessary data is either retrieved with a single page load - e.g. a
bundle or multiple bundles that get loaded at the outset. Or data is
dynamically loaded in as needed, as stated above.

Take as an example the object-finder that I built.
[source](https://en.wikipedia.org/wiki/Single-page_application)

# Solution Stacks

Are the technologies often used to achieve a certain goal. E.g. XAMP, MERN,
MEAN, LAMP, etc.

# What I did

Create an Angular app using `ng new`. Started the app using `ng serve`. Could
also have used `npm run start` since this command was added to the package.json
file as an alias for `ng serve`.

Wanted to create an express app and created a backend folder wherein I
installed the express package. Then learned about the tool `express generator`
which I then used to scaffold an express app.
Then ran `npm install` to install the dependencies.
Started the backend with `npm start`.

## Express render and send

learned about how express can send a response via app.send() and render a page
with app.render()

### automatic reloading of express app

I got annoyed by manually restarting the express app after every change
So I installed `nodemon`.
While working on the express 

Added routes to express app.
Both jade rendered pages and REST endpoints.


Backlink: [Software Architecture](230314-1017-software_architecture) ---
