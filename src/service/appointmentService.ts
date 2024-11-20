import {Request, Response} from "express";
import {AppointmentDao} from "../dao/appointmentDao";
import * as jwt from "jsonwebtoken";
let appointment = new AppointmentDao();

export class AppointmentService {
    constructor() {}

    public Delete(req: Request, callback) {
        let appointmentId = req.params.id;
        appointment.Delete(appointmentId, (response) => {
            callback(response);
        });
    }

    public Update(req: Request, callback) {
        let appointmentData = req.body;
        appointment.Update(appointmentData, (response) => {
            callback(response);
        });
    }

    public updateByAppointmentUserEmail(req: Request, callback) {
        let appointmentData = req.body;
        appointment.updateByAppointmentUserEmail(appointmentData, (res) => {
            callback(res);
        });
    }

    public updateByAppointmentCancelled(req: Request, callback) {
        let appointmentData = req.body;
        appointmentData.status = "cancelled";
        appointment.updateByAppointmentCancelled(appointmentData, (res) => {
            callback(res);
        });
    }
    public GetEntityById(req: Request, callback) {
        let appointmentId = req.params.id;
        appointment.GetEntityById(appointmentId, (response) => {
            callback(response);
        });
    }

    public GetAllValues(req: Request, callback) {
        appointment.GetAllValues((response) => {
            callback(response);
        });
    }

    public appointmentByDoctor(req: Request, callback) {
        let doctorName = req.params.doctor;
        appointment.appointmentByDoctor(doctorName, (res) => {
            if(res.length > 0){
                callback(res);
            } else {
                callback({ status: 404, message: "Doctor not found" })
            }
        });
    }

    public async findAppointmentUser(req: Request, callback){
        let userEmail = req.params.email;
        callback(await appointment.findAppointmentUser(userEmail));
    }

    public async Create(req: Request, callback) {
        let appointmentData = req.body;
        let appointmentUser = await appointment.findAppointmentUser(appointmentData.email);
        let doctor: any = await appointment.findDoctor(appointmentData.doctorName); 
        let appointmentValidate = appointmentUser.filter((data) => data.status === "inprogress")[0];
        if (doctor instanceof Error) {
            callback({statusCode: 404, message: doctor.message});
        } else if (appointmentUser && appointmentValidate.status === "inprogress") {
            callback({statusCode: 403, message: "Appointment Already Scheduled"});
        } else {
            appointmentData.appointmentId = Math.floor(Math.random() * 9000) + 1000;
            appointmentData.status = "inprogress";
            appointment.Create(appointmentData, (response) => {
                // doctor.appointment_count = doctor.appointment_count - 1;
                // if (doctor.appointment_count !== 0) {
                appointment.updateDoctorAppointment(doctor);
                callback(`Appointment Scheduled Your Token is : ${response.appointmentId}`);
                // }
            });
        }
    }
}
