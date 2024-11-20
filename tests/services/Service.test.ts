import { Request, Response } from "express";
import { AppointmentService } from '../../src/service/appointmentService'; // Adjust the import path as necessary
import { AppointmentDao } from '../../src/dao/appointmentDao';

jest.mock('../../src/dao/appointmentDao'); // Mock the AppointmentDao

describe('AppointmentService', () => {
    let appointmentService: AppointmentService;
    let appointmentDao: jest.Mocked<AppointmentDao>;

    beforeEach(() => {
        appointmentService = new AppointmentService();
        appointmentDao = new AppointmentDao() as jest.Mocked<AppointmentDao>;
    });

    it('should delete an appointment', () => {
        const req = { params: { id: '123' } } as unknown as Request;
            const callback = jest.fn();

            appointmentDao.Delete.mockImplementation((_id, cb) => {
                return cb({ success: true });
            });

            appointmentService.Delete(req, callback);

            expect(appointmentDao.Delete).toHaveBeenCalledWith('123', expect.any(Function));
            expect(callback).toHaveBeenCalledWith({ success: true });
    });

    // it('should update an appointment', () => {
    //     const req = { body: { id: '123', status: 'updated' } } as Request;
    //     const callback = jest.fn();
    //     appointmentDao.Update = jest.fn((data, cb) => cb({ success: true }));

    //     appointmentService.Update(req, callback);

    //     expect(appointmentDao.Update).toHaveBeenCalledWith(req.body, expect.any(Function));
    //     expect(callback).toHaveBeenCalledWith({ success: true });
    // });

    // it('should find an appointment by user email', async () => {
    //     const req = { params: { email: 'user@example.com' } } as unknown as Request;
    //     const callback = jest.fn();
    //     appointmentDao.findAppointmentUser = jest.fn().mockResolvedValue([{ email: 'user@example.com', status: 'inprogress' }]);

    //     await appointmentService.findAppointmentUser(req, callback);

    //     expect(appointmentDao.findAppointmentUser).toHaveBeenCalledWith('user@example.com');
    //     expect(callback).toHaveBeenCalledWith([{ email: 'user@example.com', status: 'inprogress' }]);
    // });

    it('should create an appointment', async () => {
        const req = { body: { email: 'user@example.com', doctorName: 'Dr. Smith' } } as Request;
        const callback = jest.fn();
        appointmentDao.findAppointmentUser = jest.fn().mockResolvedValue([{ status: 'inprogress' }]);
        appointmentDao.findDoctor = jest.fn().mockResolvedValue({ name: 'Dr. Smith' });
        appointmentDao.Create = jest.fn((data, cb) => cb({ appointmentId: 1234 }));

        await appointmentService.Create(req, callback);

        expect(appointmentDao.findAppointmentUser).toHaveBeenCalledWith('user@example.com');
        expect(appointmentDao.findDoctor).toHaveBeenCalledWith('Dr. Smith');
        expect(appointmentDao.Create).toHaveBeenCalledWith(expect.objectContaining({ appointmentId: expect.any(Number), status: 'inprogress' }), expect.any(Function));
        expect(callback).toHaveBeenCalledWith('Appointment Scheduled Your Token is : 1234');
    });

    // Add more tests for other methods as needed
});