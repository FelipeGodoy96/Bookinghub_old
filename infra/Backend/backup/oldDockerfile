FROM openjdk:17-jdk-alpine3.14
WORKDIR /app
EXPOSE 8080
COPY target/ecommerce-0.0.1-SNAPSHOT.jar /app/app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=docker", "-jar", "app.jar"]
#"-Dspring.profiles.active=docker",