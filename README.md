# USF_APP / HurricanHub

## Project Overview
USF_APP is a full-stack application that brings together multiple components:
- A **Spring Boot backend** using Java and Maven (with an RDS-compatible PostgreSQL database).
- A **Next.js frontend** for the web.
- A **React Native mobile app** built with Expo for Android, iOS, and web.

This project is structured to provide a clear separation between the frontend, backend, and mobile applications for easier development and maintenance.

---

## Technologies Used
- **Backend (Spring Boot):**
  - Java 17
  - Spring Boot 3.1.0
  - Maven
  - PostgreSQL (integrated with Amazon RDS or Docker)
- **Frontend:**
  - Next.js
  - React, TypeScript, CSS
- **Mobile:**
  - React Native with Expo
  - TypeScript
  - React Navigation

---

## Repository Structure

```
USF_APP
└── HurricanHub/
    ├── backend
    │   ├── springboot/         # Spring Boot backend (Maven project)
    │   │   ├── pom.xml
    │   │   └── src/
    │   │       ├── main/
    │   │       │   ├── java/
    │   │       │   │   └── com/example/hurricanhub/HurricanHubApplication.java
    │   │       │   └── resources/
    │   │       │       └── application.properties
    │   └── backend_Qu/         # Other backend related code (Node.js based)
    ├── frontend/               # Next.js frontend
    │   ├── src/
    │   │   ├── pages
    │   │   ├── components
    │   │   ├── styles
    │   │   └── utils
    │   ├── package.json
    │   └── tsconfig.json
    ├── mobile/                 # Mobile application projects
    │   └── HurricanApp/        # Expo-based React Native project
    │       ├── app/
    │       ├── app.json
    │       ├── package.json
    │       └── README.md        # Mobile app specific documentation
    ├── docker-compose.yml      # Docker configuration for services
    └── README.md               # Overall project documentation (this file)
```

---

## Environment Variables

Sensitive configuration details are managed through environment variables. Create a `.env` file at the repository root (do not commit this file):

```
# .env (example content)
DB_URL=jdbc:postgresql://<your-rds-endpoint>:5432/mydatabase
DB_USERNAME=<your_rds_username>
DB_PASSWORD=<your_rds_password>
```

Each component should be configured to load these variables:
- Spring Boot (via system environment or helper libraries)
- Node.js and Expo projects using [dotenv](https://www.npmjs.com/package/dotenv) or similar methods

---

## Getting Started

### Prerequisites
- Node.js
- Java 17, Maven
- PostgreSQL (or Amazon RDS)
- Docker (optional, for containerized services)
- Expo CLI (for Mobile app)
- Git

### Installation Steps

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd USF_APP
```

#### 2. Create a Branch
```bash
git checkout -b <your-branch-name>
```
Replace `<your-branch-name>` with a descriptive branch name.

#### 3. (Optional) Set Up a Python Virtual Environment
If needed for Python-based tools:
```bash
python -m venv .venv
# Activate on Windows:
.venv\Scripts\activate
# On macOS/Linux:
source .venv/bin/activate
```

#### 4. Install Dependencies with Makefile
From the root of `HurricanHub`, run:
```bash
make install-all
```
This command installs dependencies for:
- Backend (Node.js for backend_Qu, Spring Boot can be built via Maven)
- Frontend (Next.js)
- Mobile (React Native/Expo)

---

## Running the Application

### Backend (Spring Boot)
1. Update your backend configuration in `backend/springboot/src/main/resources/application.properties` to load environment variables:
   ```properties
   spring.datasource.url=${DB_URL}
   spring.datasource.username=${DB_USERNAME}
   spring.datasource.password=${DB_PASSWORD}
   spring.jpa.hibernate.ddl-auto=update
   ```
2. Open a terminal in `HurricanHub/backend/springboot` and start the backend:
   ```bash
   mvn spring-boot:run
   ```
   The backend runs on [http://localhost:8080](http://localhost:8080) by default.

### Frontend (Next.js)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend server will be available at [http://localhost:3000](http://localhost:3000).

### Mobile (Expo)
1. Navigate to the mobile app directory:
   ```bash
   cd mobile/HurricanApp
   npm install
   npx expo start
   ```
2. From Expo DevTools:
   - Run on an Android emulator/device using `npm run android`
   - For iOS (macOS only), use `npm run ios`
   - Or run on the web using `npm run web`

---

## Docker Setup

If you prefer containerization, use the provided `docker-compose.yml` to spin up the necessary services:
```bash
docker-compose up
```
Ensure that Docker settings (and any RDS configurations) align with your environment.

---

## Clean/Reinstall Dependencies

To clear and reinstall dependencies, use:
```bash
make clean
make reinstall
```

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with detailed changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy coding!