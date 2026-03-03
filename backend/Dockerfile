FROM bellsoft/liberica-openjdk-alpine:21
LABEL authors="user"

WORKDIR /app
COPY target/backend-0.0.1-SNAPSHOT.jar /app/backend.jar

RUN ls -la /app

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backend.jar"]