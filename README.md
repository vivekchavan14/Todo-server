# Todo API

This is a basic Express.js-based Todo API that enables the management of tasks. Users can create, retrieve, update, and delete todo items.

## Description

The Todo API is a simple RESTful web service built with Node.js and Express.js. It provides the following functionality:

- **Create a Todo**: Users can create a new todo by sending a POST request to `/todos` with a JSON payload containing a title and description.

- **Retrieve Todos**: Todos can be retrieved in two ways:
  - Send a GET request to `/todos` to retrieve all todos.
  - Send a GET request to `/todos/:id` to retrieve a specific todo by its ID.

- **Update a Todo**: To update a todo, send a PUT request to `/todos/:id` with a JSON payload containing the updated title and description.

- **Delete a Todo**: To delete a todo by its ID, send a DELETE request to `/todos/:id`.
