FROM openjdk:17-alpine
LABEL authors="Abdulla Harput"
LABEL description="This is a Dockerfile for employee-service"

# make directory under /opt as employee-service
RUN mkdir -p /opt/employee-service
# chnage directory to /opt/employee-service
WORKDIR /opt/employee-service

# copy employee-service project to /opt/employee-service as app.jar
COPY /target/employee-service-0.0.1-SNAPSHOT.jar /opt/employee-service/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]