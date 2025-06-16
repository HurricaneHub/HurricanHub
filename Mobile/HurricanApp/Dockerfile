# Build Stage: Create a static web build of your Expo project
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install -g expo-cli
RUN npm install
COPY . .
# Build the Expo web project—ensure your app.json is configured appropriately.
RUN expo export:web

# Production Stage: Use Nginx to serve the static files
FROM nginx:alpine
# Copy the output (by default, expo export:web outputs to web-build)
COPY --from=builder /app/web-build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]