import {Request, response, Response} from "express";
import {AppointmentService} from "../service/appointmentService";

let appointment = new AppointmentService();

export class AppointmentController {
    constructor() {}

    public Delete(req: Request, res: Response) {
        appointment.Delete(req, (response) => {
            res.status(200);
            res.json(response);
        });
    }

    public Update(req: Request, res: Response) {
        appointment.Update(req, (response) => {
            res.status(200);
            res.json(response);
        });
    }
    public updateByAppointmentUserEmail(req: Request, res: Response){
        appointment.updateByAppointmentUserEmail(req, (response) => {
            res.status(200);
            res.json(response);
        })
    }
    public updateByAppointmentCancelled(req: Request, res: Response){
        appointment.updateByAppointmentCancelled(req, (response) => {
            res.status(200);
            res.json(response);
        })
    }
    public GetEntityById(req: Request, res: Response) {
        appointment.GetEntityById(req, (response) => {
            res.status(200);
            res.json(response);
        });
    }
    public GetAllValues(req: Request, res: Response) {
        appointment.GetAllValues(req, (response) => {
            res.status(200);
            res.json(response);
        });
    }
    public appointmentByDoctor(req: Request, res: Response){
        appointment.appointmentByDoctor(req, (response) => {
            if(response.status === 404){
                res.status(404);
                res.json(response.message);
            } else {
                res.status(200);
                res.json(response);
            }
        });
    }
    public findAppointmentUser(req: Request, res: Response){
        appointment.findAppointmentUser(req, (response) => {
            res.status(200);
            res.json(response);
        })
    }
    public Create(req: Request, res: Response) {
        appointment.Create(req, (response) => {
            if(response.statusCode === 404){
                res.status(404);
                res.json(response.message);
            } else if(response.statusCode === 403){
                res.status(403);
                res.json(response.message);
            } else {
                res.status(200);
                res.json(response);
            }
        });
    }
}
