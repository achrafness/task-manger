# Task Manager API

This project is a simple Task Manager API built using Node.js and Express.js. It allows you to perform CRUD operations on tasks, such as retrieving all tasks, creating new tasks, editing existing tasks, and deleting tasks.

## Getting Started

Follow the steps below to set up and run the project:

1. Create a `.env` file in the project root directory.

2. In the `.env` file, set the `MONGO_URI` variable to the MongoDB database connection string.

    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

3. Open your terminal and run the following commands:

    ```bash
    npm install
    npm start
    ```

This will install the required dependencies and start the server.

## Project Structure

The project is organized into the following directories:

- **controllers:** Contains the logic for handling HTTP requests.
- **db:** Manages the database connection .
- **errors:** Handles custom error classes.
- **middleware:** Includes middleware functions.
- **models:** Defines the data models for tasks.
- **public:** Stores static assets (if any).
- **routes:** Defines the API routes.
- **app.js:** The main entry point for the application.

## API Endpoints
- **GET /tasks:** Get all tasks.
- **GET /tasks:id:** Get task.
- **POST /tasks:** Create a new task.
- **PUT /tasks/:id:** Update a task by ID.
- **DELETE /tasks/:id:** Delete a task by ID.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Make sure to follow the existing code style and conventions.

## License

This project is from jhon smilga

