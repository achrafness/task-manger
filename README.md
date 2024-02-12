# Task Manager API

This project is a simple Express.js API for managing tasks. It provides endpoints for creating, updating, and retrieving tasks.

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

- **controllers:** Contains the logic for handling HTTP requests related to tasks.
- **db:** Manages the database connection.
- **middleware:** Includes middleware functions for handling errors and 404 not found.
- **models:** Defines the data models for tasks.
- **routes:** Defines the API routes for tasks.
- **app.js:** The main entry point for the application.

## API Endpoints
- **GET /api/v1/tasks:** Get all tasks.
- **POST /api/v1/tasks:** Create a new task.
- **GET /api/v1/tasks/:id:** Get a specific task by ID.
- **PATCH /api/v1/tasks/:id:** Update a specific task by ID.
- **DELETE /api/v1/tasks/:id:** Delete a specific task by ID.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Make sure to follow the existing code style and conventions.

## License

This project is from jhon smilga

Happy coding!
