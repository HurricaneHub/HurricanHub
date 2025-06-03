<<<<<<< HEAD
# HurricanHub
Savior of the people. Dana
=======
# USF_APP

## Project Overview
USF_APP is a full-stack application that utilizes Next.js for the frontend, Node.js with PostgreSQL for the backend, and React Native for the mobile application. This project is structured to provide a clear separation between the frontend, backend, and mobile components, allowing for easier development and maintenance.

---

## Technologies Used
- **Frontend**: 
  - Next.js
  - React
  - TypeScript
  - CSS

- **Backend**: 
  - Node.js
  - Express
  - TypeScript
  - PostgreSQL

- **Mobile**:
  - React Native
  - TypeScript
  - React Navigation

---

## Project Structure
```
USF_APP
├── frontend          # Frontend application using Next.js
│   ├── src
│   │   ├── pages     # Contains page components
│   │   ├── components # Contains reusable components
│   │   ├── styles    # Contains global styles
│   │   └── utils     # Contains utility functions
│   ├── package.json  # Frontend dependencies and scripts
│   ├── tsconfig.json # TypeScript configuration for frontend
│   └── README.md     # Frontend documentation
├── backend           # Backend application using Node.js
│   ├── src
│   │   ├── controllers # Contains request handlers
│   │   ├── models      # Contains database models
│   │   ├── routes      # Contains route definitions
│   │   ├── db         # Contains database connection logic
│   │   └── app.ts     # Entry point for the backend application
│   ├── package.json   # Backend dependencies and scripts
│   ├── tsconfig.json  # TypeScript configuration for backend
│   └── README.md      # Backend documentation
├── mobile            # Mobile application using React Native
│   ├── src
│   │   ├── screens    # Contains screen components
│   │   ├── components # Contains reusable components
│   │   ├── styles     # Contains global styles
│   │   └── utils      # Contains utility functions
│   ├── package.json   # Mobile dependencies and scripts
│   ├── tsconfig.json  # TypeScript configuration for mobile
│   └── README.md      # Mobile documentation
├── docker-compose.yml # Docker configuration for services
└── README.md          # Overall project documentation
```

---

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL
- Docker (optional, for containerized setup)
- Python (optional, for virtual environment setup)

---

### Installation

#### **Step 1: Clone the Repository**
1. Open your terminal and navigate to the directory where you want to clone the project.
2. Run the following command to clone the repository:
   ```bash
   git clone <repository-url>
   cd USF_APP
   ```

#### **Step 2: Create a New Branch**
To avoid pushing changes directly to the production branch, create a new branch for your work:
```bash
git checkout -b <your-branch-name>
```
Replace `<your-branch-name>` with a descriptive name for your branch (e.g., `feature-xyz`).

#### **Step 3: Set Up a Virtual Environment**
Although this project primarily uses Node.js, setting up a virtual environment can help isolate dependencies for Python-based tools or scripts (if needed). Follow these steps:

1. Create a virtual environment:
   ```bash
   python -m venv .venv
   ```

2. Activate the virtual environment:
   - On **Windows**:
     ```bash
     .venv\Scripts\activate
     ```
   - On **macOS/Linux**:
     ```bash
     source .venv/bin/activate
     ```

3. Once activated, you’ll see the virtual environment name in your terminal prompt.

#### **Step 4: Install Dependencies**
This project uses a `Makefile` to simplify dependency installation. Run the following command to install all dependencies for the backend, frontend, mobile app, and database:

```bash
make install-all
```

This will:
- Install backend dependencies (Node.js, Express, PostgreSQL client, etc.).
- Install frontend dependencies (React, Next.js, TypeScript, etc.).
- Install mobile app dependencies (React Native, navigation libraries, etc.).

---

### Running the Application

#### **Backend Server**
Start the backend server:
```bash
make start-backend
```
The backend server will run on `http://localhost:4000`.

#### **Frontend Server**
Start the frontend server:
```bash
make start-frontend
```
The frontend server will run on `http://localhost:3000`.

#### **Mobile Development Server**
Start the mobile development server:
```bash
make start-mobile
```
This will start the React Native development server. You can run the app on an emulator or a physical device.

---

### Docker Setup
If you prefer to use Docker, you can run the application using the provided `docker-compose.yml` file:
```bash
docker-compose up
```

---

### Clean and Reinstall Dependencies
If you encounter issues or need to reset the project, you can clean and reinstall all dependencies:

1. Clean all `node_modules` directories:
   ```bash
   make clean
   ```

2. Reinstall all dependencies:
   ```bash
   make reinstall
   ```

---

### Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

### License
This project is licensed under the MIT License. See the `LICENSE` file for details.
>>>>>>> origin/master
