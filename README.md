# Clyde Code Challenge

## Intro

Thank you for taking the time to go through Clyde's application process. In this code challenge you'll be putting together automated tests for the provided app based on the provided test flow. You should feel free to use whatever frameworks and tools you are most comfortable with and you should be prepared to explain your work and the choices you make.

Be sure to work independently but feel free to use any online resources available to you or reach out to us with questions.

This project consists of two codebases: a simple JSON API written in Node.js using the Koa framework, and a React / Redux front-end GUI. The front-end project UI contains two actions, each supported by an API route on the backend.

## Running the project

You will be running the project via Docker. You can find installation instructions for Docker [here](https://docs.docker.com/install)

Once you have Docker installed and running you can start the project via docker-compose with `docker-compose build && docker-compose up`. If you need to run the project on different ports other than `4000` / `4001` make sure you update all of the appropriate values in `docker-compose.yaml` and `package.json`

Once both the `api` and `frontend` docker containers are running you can find the front end GUI at [localhost:4001](http://localhost:4001).

Alternatively, you can open each project in separate windows, run npm install and npm start to run them separately without Docker.

## Task

Our new, patented Rhino API™©® & Dashboard has been built and is ready to be shipped! Or... so we thought. After a disastrous demo in front of our CEO we realized that there are some problems in the code that we need to figure out. That's where you come in! We'd like you to add a testing framework of your choice to the project, and write tests to cover the following flow:

1. Get all rhinos with no filter values to retrieve the full set of rhinos in the system.
2. Create a new rhino with the name "Clyde5000" and the species "javan_rhinoceros".
3. Verify that when filtering by "javan_rhinoceros" in the GET action, the newly created rhino is present in the search result.
4. Verify that when filtering by "indian_rhinoceros" in the GET action, the newly created rhino is NOT present in the search result.

## Additional notes

- This is an open-ended challenge. We encourage you to use whatever tools you prefer. Please document your process in some presentable form, and be prepared to explain your design decisions and choices of technology.

- Please spend no more than 4 hours on this task. We'll have time to discuss any extra features, tests, or further implementation you wanted to add but didn't have time for!

- Your solution should either be run through the existing Docker framework, or you should provide step-by-step instructions (ideally a sequence of commands) to enable someone to run your test suite easily.

- You are both welcome and encouraged to use any resources available to you, but any work you submit should be your own.
