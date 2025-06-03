# USF_APP Backend Documentation

## Overview

This is the backend for the USF_APP project, which is built using Node.js and TypeScript. The backend interacts with a PostgreSQL database to manage user data and provide API endpoints for the frontend application.

## Project Structure

The backend is organized as follows:

```
backend
├── src
│   ├── controllers       # Contains the logic for handling requests
│   │   └── userController.ts
│   ├── models            # Defines the data models and schemas
│   │   └── userModel.ts
│   ├── routes            # Sets up the API routes
│   │   └── userRoutes.ts
│   ├── db               # Database connection setup
│   │   └── connection.ts
│   └── app.ts           # Entry point for the backend application
├── package.json          # NPM dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Documentation for the backend
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd USF_APP/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up the PostgreSQL database:
   - Create a new database for the application.
   - Update the database connection details in `src/db/connection.ts`.

### Running the Application

To start the backend server, run the following command:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

### API Endpoints

The backend provides several API endpoints for user management. Refer to the `userRoutes.ts` file for the complete list of available routes and their functionalities.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.