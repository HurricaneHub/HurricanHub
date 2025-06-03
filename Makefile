# Install dependencies for backend
install-backend:
    cd backend && npm install && npm install express pg typescript ts-node nodemon dotenv

# Install dependencies for frontend
install-frontend:
    cd frontend && npm install && npm install react react-dom next typescript @types/react @types/node

# Install dependencies for mobile
install-mobile:
    cd mobile && npm install && npm install react-native react-native-template-typescript axios react-navigation react-navigation-stack

# Install database dependencies (PostgreSQL)
install-database:
    @echo "Ensure PostgreSQL is installed and running on your system."
    @echo "No additional npm dependencies are required for the database setup."

# Install all dependencies
install-all: install-backend install-frontend install-mobile install-database

# Start backend server
start-backend:
    cd backend && npm run start

# Start frontend server
start-frontend:
    cd frontend && npm run dev

# Start mobile development server
start-mobile:
    cd mobile && npx react-native start

# Run all services
start-all: start-backend start-frontend start-mobile

# Clean all node_modules
clean:
    rm -rf backend/node_modules frontend/node_modules mobile/node_modules
    @echo "Cleaned all node_modules directories."

# Reinstall all dependencies
reinstall: clean install-all