# Full Stack Ecommerce

This is a full-stack ecommerce application built with React, Express, and Mongoose.

## Project Structure

- `client/`: This directory contains all the client-side React code.
  - `partials/`: This directory contains reusable components like `Header`, `Footer`, and `ProductList`.
  - `HomePage.js`: This is the main page component that fetches and displays products.
  - `contexts/`: This directory contains the `CartContext` for managing cart state across the app.
- `server.js`: This is the main server file for the Express application.
- `jest.setup.js`: This file sets up `jest-fetch-mock` for testing fetch calls.
- `__tests__/`: This directory contains all the Jest test files.

## Available Scripts

In the project directory, you can run:

- `npm run client`: Runs the client-side React application.
- `npm run server`: Runs the server-side Express application.
- `npm run dev`: Runs both the client and server concurrently.
- `npm test`: Runs the Jest test suite.

## Dependencies

- `concurrently`: Allows running multiple npm scripts concurrently.
- `cors`: Middleware for enabling CORS.
- `dotenv`: Loads environment variables from a `.env` file.
- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `jest`: JavaScript testing framework.
- `jest-fetch-mock`: Mock fetch calls for Jest tests.
- `nodemon`: Automatically restarts the node application when file changes in the directory are detected.

## DevDependencies

- `jest`: JavaScript testing framework.
- `jest-fetch-mock`: Mock fetch calls for Jest tests.
- `nodemon`: Automatically restarts the node application when file changes in the directory are detected.

## Testing

This project uses Jest for testing. To run the tests, use the `npm test` command.

## License

This project is licensed under the ISC license.