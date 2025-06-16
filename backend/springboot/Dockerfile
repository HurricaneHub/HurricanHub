# Use Maven to build the application
FROM maven:3.8.6-openjdk-17-slim AS build
WORKDIR /app
# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline
# Copy the source code
COPY src ./src
# Build the project (skip tests if desired)
RUN mvn package -DskipTests

# Package stage: use an OpenJDK image
FROM openjdk:17-jdk-alpine
WORKDIR /app
# Copy the built jar from the build stage
COPY --from=build /app/target/hurricanhub.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]