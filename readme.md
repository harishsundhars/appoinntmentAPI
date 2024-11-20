# Node.js Application Backend Server

## Description
This is a Node.js backend server application that connects to a MongoDB database. It provides endpoints for user authentication and Appointment management.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Sample Payloads](#sample-payloads)
 

## Installation

1. **Install Dependencies**
   Navigate to the root folder of your project and run the following command to install the necessary packages:
   ```bash
   npm install
   ```


   Run MongoDB with Docker Navigate to the docker folder and run the following command to start the MongoDB Docker image:

    ```bash
    docker-compose up -d
    ```
## running-the-application

2. **Running the Application**

    Start the Application in Development Mode To start the application in development mode, use the following command:
    bash

    ```bash
    npm run dev
    ```

    Start the Application in Production Mode To start the application in production mode, use the following command:
    bash


    ```bash
    npm run prod
    ```

## sample-payloads

3. **Sample Payloads**
Appointment Sample Payload
To create a new appointment, use the following JSON payload:
json

    ```bash
    {
        "firstName": "cartor",
        "lastName": "Lane",
        "email": "cartorjimmy@gmail.com",
        "appointmentTime": "11:00 AM - 12:00 PM",
        "doctorName": "John"
    }
    ```
    Update Sample Payload
    To Update in a userAppointment, update the appointment using appointmentId use the following JSON payload:
    json

    ```bash
    {
        "firstName": "cartor",
        "lastName": "Lane",
        "email": "cartorjimmy@gmail.com",
        "appointmentId": 2822,
        "appointmentTime": "11:00 AM - 12:00 PM",
        "doctorName": "John"
    }
    ```


4. **Run Test case **

    Cli Command: 

    ```bash
    npm test
    ```



