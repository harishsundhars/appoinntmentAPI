import { Request, Response, NextFunction } from "express";
import { AppointmentController } from '../controller/appointmentController';

export class Routes {
    private appointment: AppointmentController = new AppointmentController();
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/appointment/:id').delete(this.appointment.Delete);
        app.route('/appointment').put(this.appointment.Update);
        app.route('/appointment/:id').get(this.appointment.GetEntityById);
        app.route('/appointment').get(this.appointment.GetAllValues);
        app.route('/appointment').post(this.appointment.Create);
        app.route('/appointment/doctor/:doctor').get(this.appointment.appointmentByDoctor);
        app.route('/appointment/email').put(this.appointment.updateByAppointmentUserEmail);
        app.route('/appointment/cancelled').put(this.appointment.updateByAppointmentCancelled);
        app.route('/appointment/email/user/:email').get(this.appointment.findAppointmentUser);
     }

}