# TODO application

The primary goal of this application is to demonstrate your skills in building a full-stack web application using modern technologies, including React Hooks, MongoDB, and Docker. You will be creating a web-based TODO list application where users can add new tasks, mark them as completed, and view their task list.

### Tech stacks
The technology stack used in this assignment includes:

- React: The front-end of the application is built using React, a popular JavaScript library for building user interfaces. React Hooks are used to manage state and handle component logic.

- Django: The back-end of the application is powered by Django, a high-level Python web framework. Django handles API requests, interacts with MongoDB, and provides data to the front-end.

- MongoDB: MongoDB is used as the database to store and retrieve TODO tasks. Django communicates with the MongoDB instance to perform CRUD operations.

- Docker: Docker is used for containerization, allowing the application to run consistently across different environments. The assignment provides a Docker Compose configuration for managing the containers.


### Features
The TODO list application built for this assignment includes the following features:

- Add New Task: Users can use a form to enter a description for a new task and submit it. The application sends a POST request to the Django backend to create the new task in MongoDB.

- View Task List: The application displays a list of TODOs fetched from the Django backend. Initially, it includes hardcoded TODOs, but it should be updated to reflect the actual TODOs stored in MongoDB.

- Mark Tasks as Completed: Users can mark tasks as completed by interacting with the UI. Completed tasks should be visually differentiated from active tasks.

- Refresh Task List: When a new task is added, the TODO list should refresh automatically to fetch the latest data from MongoDB.
