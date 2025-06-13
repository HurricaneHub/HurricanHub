# HurricanHub: Disaster Assistance Platform

## Project Overview
HurricanHub is a comprehensive disaster assistance platform designed to support elderly users during natural disasters like hurricanes. The application provides real-time emergency information, connects users with caregivers, and offers AI-powered support through an intelligent chatbot.

This full-stack application brings together multiple components:
- A **hybrid backend** combining Spring Boot (Java) and Node.js (Express)
- A **Next.js frontend** for the web interface
- A **React Native mobile app** built with Expo for Android, iOS, and web access

The project is structured with clear separation between components for easier development, maintenance, and scalability.

---

## Key Features

### For Elderly Users
- **Emergency Information**: Real-time updates during disasters
- **Caregiver Connection**: Direct communication with assigned caregivers
- **AI Chatbot Support**: Empathetic assistance tailored to individual needs
- **Accessibility**: Available on web and mobile platforms

### For Caregivers
- **User Management**: Monitor and assist multiple elderly users
- **Notification System**: Send alerts via push notifications and SMS
- **Status Tracking**: Monitor user safety and needs during emergencies

### Technical Features
- **Hybrid Backend Architecture**: Leveraging strengths of both Spring Boot and Node.js
- **Cross-Platform Mobile App**: Single codebase for iOS and Android
- **Real-time Communication**: Push notifications and SMS alerts
- **AI Integration**: OpenAI-powered chatbot for personalized assistance

---

## Technologies Used

### Backend
- **Spring Boot Backend:**
  - Java 17
  - Spring Boot 3.1.0
  - Maven
  - PostgreSQL (integrated with Amazon RDS or Docker)
- **Node.js Backend:**
  - Express.js
  - MongoDB
  - Firebase Admin SDK
  - Twilio API for SMS
  - OpenAI API for chatbot functionality

### Frontend
- Next.js
- React
- TypeScript
- CSS

### Mobile
- React Native with Expo
- TypeScript
- React Navigation
- Expo Router for file-based routing

### DevOps & Infrastructure
- Docker and Docker Compose
- Environment variable management
- AWS RDS (optional)

---

## Repository Structure

```
HurricanHub/
├── backend/
│   ├── springboot/              # Spring Boot backend (Java)
│   │   ├── pom.xml              # Maven dependencies
│   │   └── src/                 # Source code
│   │       ├── main/
│   │       │   ├── java/        # Java code
│   │       │   └── resources/   # Configuration files
│   │           └── application.properties
│   │
│   ├── backend_Qu/              # Node.js backend (Express)
│   │   └── backend/
│   │       ├── controllers/     # Request handlers
│   │       │   ├── caregiverController.js
│   │       │   ├── chatbotController.js
│   │       │   └── notificationController.js
│   │       ├── models/          # Database models
│   │       │   ├── Caregiver.js
│   │       │   └── User.js
│   │       ├── routes/          # API endpoints
│   │       │   ├── caregiverRoutes.js
│   │       │   ├── chatbotRoutes.js
│   │       │   └── notificationRoutes.js
│   │       ├── utils/           # Helper functions
│   │       │   └── firebase.js
│   │       ├── server.js        # Express server setup
│   │       └── package.json     # Node.js dependencies
│
├── frontend/                    # Next.js web frontend
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   └── Header.tsx
│   │   ├── pages/               # Page components
│   │   │   └── index.tsx
│   │   ├── styles/              # CSS styles
│   │   │   └── globals.css
│   │   └── utils/               # Helper functions
│   │       └── api.ts           # API communication
│   ├── package.json             # Frontend dependencies
│   └── tsconfig.json            # TypeScript configuration
│
├── Mobile/                      # Mobile applications
│   └── HurricanApp/             # React Native with Expo
│       ├── app/                 # App screens and navigation
│       │   ├── (tabs)/          # Tab-based navigation
│       │   │   ├── index.tsx    # Home screen
│       │   │   └── explore.tsx  # Explore screen
│       │   └── _layout.tsx      # Root layout
│       ├── components/          # Reusable UI components
│       │   ├── Collapsible.tsx
│       │   ├── HelloWave.tsx
│       │   ├── ThemedText.tsx
│       │   └── ui/              # UI primitives
│       ├── assets/              # Images and fonts
│       ├── constants/           # App constants
│       │   └── Colors.ts
│       ├── hooks/               # Custom React hooks
│       ├── app.json             # Expo configuration
│       └── package.json         # Mobile dependencies
│
├── docker-compose.yml           # Docker services configuration
├── .env                         # Environment variables (not in repo)
├── Makefile                     # Build automation
├── LICENSE                      # MIT License
└── README.md                    # This documentation
```

---

## Environment Setup

### Environment Variables

Create a `.env` file at the repository root with the following variables:

```
# Database Configuration
DB_URL=jdbc:postgresql://<your-rds-endpoint>:5432/mydatabase
DB_USERNAME=<your_rds_username>
DB_PASSWORD=<your_rds_password>

# MongoDB Configuration (for Node.js backend)
MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<database>

# API Keys
OPENAI_API_KEY=<your-openai-api-key>

# Twilio Configuration
TWILIO_ACCOUNT_SID=<your-twilio-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
TWILIO_PHONE=<your-twilio-phone-number>

# Firebase Configuration
# (Firebase service account is stored in backend_Qu/backend/firebaseServiceAccount.json)
```

**Important:** Never commit the `.env` file or any files containing sensitive credentials to version control.

---

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Java 17 JDK
- Maven 3.8+
- PostgreSQL 13+ (or Amazon RDS access)
- MongoDB 5+ (local or Atlas)
- Docker and Docker Compose (optional)
- Expo CLI (for mobile development)
- Git

### Installation Steps

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd HurricanHub
```

#### 2. Create and Configure Environment Variables
Create the `.env` file as described in the Environment Variables section.

#### 3. Install Dependencies
Using the provided Makefile:
```bash
make install-all
```

Or manually:
```bash
# Install Node.js backend dependencies
cd backend/backend_Qu/backend
npm install

# Install frontend dependencies
cd ../../../frontend
npm install

# Install mobile app dependencies
cd ../Mobile/HurricanApp
npm install
```

---

## Running the Application

### Running the Spring Boot Backend
```bash
cd backend/springboot
mvn spring-boot:run
```
The Spring Boot backend will be available at http://localhost:8080

### Running the Node.js Backend
```bash
cd backend/backend_Qu/backend
node server.js
```
The Node.js backend will be available at http://localhost:4000

### Running the Frontend
```bash
cd frontend
npm run dev
```
The Next.js frontend will be available at http://localhost:3000

### Running the Mobile App
```bash
cd Mobile/HurricanApp
npx expo start
```
This will start the Expo development server, allowing you to run the app on:
- iOS simulator/device (requires macOS): Press `i`
- Android emulator/device: Press `a`
- Web browser: Press `w`
- Scan the QR code with the Expo Go app on your physical device

---

## Docker Deployment

The project includes Docker configuration for containerized deployment:

```bash
# Start all services
docker-compose up

# Start specific services
docker-compose up frontend backend db

# Build and start (after making changes)
docker-compose up --build
```

The Docker setup includes:
- Frontend container (Next.js)
- Backend container (Node.js)
- PostgreSQL database container

---

## API Documentation

### Node.js Backend APIs

#### Caregiver API
- `POST /api/caregivers/create` - Create a new caregiver
- `GET /api/caregivers/all` - Get all caregivers

#### Chatbot API
- `POST /api/chatbot/chat` - Generate AI response based on user message and preferences

#### Notification API
- `POST /api/notify/push` - Send push notification to a device
- `POST /api/notify/sms` - Send SMS message via Twilio

### Spring Boot Backend APIs
- Documentation for Spring Boot APIs will be available via Swagger UI when implemented

---

## Architecture Overview

### Hybrid Backend Approach
HurricanHub uses a hybrid backend architecture:

1. **Spring Boot (Java)**: Handles core business logic, data persistence, and security
2. **Node.js (Express)**: Manages real-time features, notifications, and third-party integrations

This approach allows us to leverage the strengths of both platforms:
- Spring Boot's robust enterprise features and type safety
- Node.js's efficiency for I/O operations and JavaScript ecosystem

### Mobile Strategy
The mobile app is built with React Native and Expo, providing:
- Cross-platform compatibility (iOS, Android, web)
- Shared codebase for all platforms
- Native-like performance and UX

### Data Flow
1. User interacts with mobile or web frontend
2. Requests route to appropriate backend (Spring Boot or Node.js)
3. Backend processes request and interacts with database or external services
4. Response returns to frontend for display

---

## Development Guidelines

### Coding Standards
- **Java**: Follow standard Java conventions and Spring Boot best practices
- **JavaScript/TypeScript**: Use ESLint with Airbnb configuration
- **React/React Native**: Follow component-based architecture with hooks

### Git Workflow
1. Create feature branches from `main`
2. Make focused commits with clear messages
3. Submit pull requests for review
4. Merge to `main` after approval

### Testing
- Write unit tests for critical functionality
- Test across multiple devices for mobile features
- Ensure accessibility compliance

---

## Deployment

### AWS Deployment (Recommended)
- Frontend: AWS Amplify or S3 + CloudFront
- Backend: Elastic Beanstalk or ECS
- Database: RDS for PostgreSQL, DocumentDB for MongoDB
- CI/CD: AWS CodePipeline

### Alternative Deployment Options
- Heroku for quick deployment
- Vercel for Next.js frontend
- MongoDB Atlas for database

---

## Future Enhancements

### Planned Features
- Enhanced AI chatbot capabilities
- Real-time weather data integration
- Geolocation-based emergency services
- Offline functionality for disaster scenarios
- Advanced analytics for emergency response planning

### Technical Roadmap
- Implement GraphQL API layer
- Add comprehensive test coverage
- Enhance security features
- Optimize for low-bandwidth scenarios

---

## Troubleshooting

### Common Issues

#### Database Connection Problems
- Verify environment variables are correctly set
- Check network connectivity to database servers
- Ensure database users have proper permissions

#### Mobile Build Failures
- Run `npx expo doctor` to identify issues
- Clear cache with `npx expo start -c`
- Update Expo SDK if needed

#### Node.js Backend Issues
- Check for MongoDB connection errors
- Verify API keys for external services
- Monitor server logs for detailed errors

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please ensure your code follows project standards and includes appropriate tests.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- OpenAI for chatbot capabilities
- Twilio for SMS integration
- Firebase for push notifications
- The Expo team for their excellent mobile development platform

---

## Contact

For questions or support, please contact the project maintainers.

---

Happy coding!