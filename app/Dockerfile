# Set the base image to Ubuntu
FROM ubuntu:20.04

#FOR DEBUGGING
RUN apt-get update -y
RUN apt-get upgrade -y

RUN apt-get install nodejs -y
RUN apt-get install npm -y

# Install nodemon
RUN npm install -g nodemon

# Provides cached layer for node_modules
RUN mkdir -p /epam

COPY app/package.json app/package-lock.json /epam/

# Define working directory
WORKDIR /epam

RUN npm install

COPY /app /epam/app/

# Expose port
EXPOSE  3000

# Run app using nodemon
CMD ["nodemon", "app/app.js"]