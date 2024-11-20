# Node.js Application Backend Server

## Description
This is a Node.js backend server application that connects to a MongoDB database. It provides endpoints for user authentication and task management.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Sample Payloads](#sample-payloads)
 

## Installation

1. **Install Dependencies**
   Navigate to the root folder of your project and run the following command to install the necessary packages:
   ```bash
   npm install




   Run MongoDB with Docker Navigate to the docker folder and run the following command to start the MongoDB Docker image:
bash


  ```docker-compose up -d
Start the Application in Development Mode To start the application in development mode, use the following command:
bash

2. **Running the Application**
```npm run dev
Start the Application in Production Mode To start the application in production mode, use the following command:
bash


```npm run prod
Sample Payloads
Task Sample Payload
To create a new task, use the following JSON payload:
json


{
    "title": "Sample Title2",
    "description": "This is a sample description.",
    "comments": "These are some comments.",
    "status": "active"
}
Login Sample Payload
To log in a user, use the following JSON payload:
json


{
    "password": "securePassword123",
    "email": "john.doe@example.com"
}
Signup Sample Payload
To sign up a new user, use the following JSON payload:
json


{
    "firstname": "John",
    "lastname": "Doe",
    "password": "securePassword\$123",
    "email": "john.doe@example.com",
    "username": "john.doe@example.com"
}
