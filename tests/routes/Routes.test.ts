import * as request from 'supertest';
import * as express from 'express';
// import { request, response } from 'express';
import { Routes } from '../../src/routes/Routes';
import { AppointmentController } from '../../src/controller/appointmentController';
import mongoose from 'mongoose';

describe('Routes', () => {
  let app;

    // Setup before each test
    beforeEach(() => {
        app = express();
        app.use(express.json()); // Middleware to parse JSON bodies
        const routes = new Routes();
        routes.routes(app);
    });

    // Test for health check route
    describe('GET /health/entity-service', () => {
        it('should return 200 status and "up" status', async () => {
            const response = await request(app).get('/health/entity-service');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ status: 'up' });
        }, 10500);
    });

    // Test for creating an appointment
    // describe('POST /appointment', () => {
    //     it('should create a new appointment', async () => {
    //         const newAppointment = {
    //             "_id":"3rd4w45c4w45",
    //             "firstName": "cartor",
    //             "lastName": "Lane",
    //             "email": "cartorjimmy@gmail.com",
    //             "appointmentId": 2822,
    //             "appointmentTime": "11:00 AM - 12:00 PM",
    //             "doctorName": "John"
    //         };
    //         const response = await request(app).post('/appointment').send(newAppointment);
    //         expect(response.status).toBe(200); 
    //         expect(response.body).toEqual({});
    //     }, 40000);
    // });

    // Test for getting all appointments
    describe('GET /appointment', () => {
        it('should return all appointments', async () => {
            const response = await request(app).get('/appointment');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({});
        }, 10500);
    });

    // Test for getting an appointment by ID
    describe('GET /appointment/:id', () => {
        it('should return an appointment by ID', async () => {
            const appointmentId = new mongoose.Types.ObjectId();;
            const response = await request(app).get(`/appointment/${appointmentId}`);
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ });
        }, 10500);
    });

    // Test for updating an appointment
    describe('PUT /appointment', () => {
        it('should update an appointment', async () => {
            const updatedData = {
                "_id":"3rd4w45c4w45",
                "firstName": "cartor",
                "lastName": "Lane",
                "email": "cartorjimmy@gmail.com",
                "appointmentId": 2822,
                "appointmentTime": "11:00 AM - 12:00 PM",
                "doctorName": "John"
            };
            const response = await request(app).put(`/appointment`).send(updatedData);
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ });
        }, 10500);
    });

    // Test for deleting an appointment
    describe('DELETE /appointment/:id', () => {
        it('should delete an appointment', async () => {
            const appointmentId = '123';
            const response = await request(app).delete(`/appointment/${appointmentId}`);
            expect(response.status).toBe(200); 
        }, 10500);
    });
});