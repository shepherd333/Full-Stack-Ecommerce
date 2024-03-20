# Full Stack Ecommerce

This is a full-stack ecommerce application built with React, Express, and Mongoose.

## Project Structure

- `client/`: This directory contains all the client-side React code.
  - `src/`
    - `components/`
      - `pages/`
        - `CheckOut.js`: provides a checkout form for the user, capturing user information, payment method, and handling the checkout process
        - `HomePage.js`: This is the main page component that fetches and displays products.
        - `ProductPage.js`: This is the main page component that fetches and displays products.
      - `partials/`: This directory contains reusable components like `Header`, `Footer`, and `ProductList`.
        - `Cart.js`: displays the user's shopping cart, listing the items with their details and providing an option to remove items from the cart.
        - `Footer.js`: This is the footer component that is seen on the home page
        - `Header.js`: This is the header  component that is seen on the home page.
        - `ProductCard.js`: displays individual product details and provides an option to add the product to the cart.
        - `ProductFetch.js`: fetches product data from a server and renders
        - `ProductList.js`: A React component that displays a list of ProductCard components, representing the available products.
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
