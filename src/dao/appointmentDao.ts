import appointmentModel from "../models/daomodels/appointment";
import doctorModel from "../models/daomodels/doctor";

export class AppointmentDao {
    private appointment = appointmentModel;

    private userDetails: any;

    constructor() {}

    public async Delete(appointmentId, callback) {
        this.appointment
        .findByIdAndRemove(appointmentId)
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            callback(error);
        });
    }

    public async Update(appointmentData, callback) {
        this.appointment
        .findOneAndUpdate({_id: appointmentData._id}, appointmentData, {
            new: true,
        })
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            callback(error);
        });
    }

    public async updateByAppointmentUserEmail(appointmentData, callback){
        try {
            const updateAppointment = this.appointment.findOneAndUpdate({appointmentId: appointmentData.appointmentId }, appointmentData, { new: true }).exec();
            let obj = {
                details: updateAppointment,
                message: "Updated Appointment Details"
            }
            callback(obj);
        } catch (error) {
            callback(error);
        }
    }

    public async updateByAppointmentCancelled(appointmentData, callback){
        try {
            const updateAppointment = this.appointment.findOneAndUpdate({ email: appointmentData.email, appointmentTime: appointmentData.appointmentTime, status: "inprogress" }, appointmentData, { new: true }).exec();
            let obj = {
                details: updateAppointment,
                message: "The Appointment has been Cancelled"
            }
            callback(obj);
        } catch (error) {
            callback(error);
        }
    }

    public async appointmentByDoctor(doctorName, callback){
        try {
            const appointmentbydoctor = await this.appointment.find().exec();
            callback(appointmentbydoctor.filter((data) => data.doctorName === doctorName));
        } catch (error) {
            callback(error)
        }
    }

    public async findAppointmentUser(useremail) {
        try { 
            const appointmentUser = await this.appointment.find().exec(); 
            return appointmentUser.filter((data) => data.email === useremail); 
        } catch (error) {  
            throw error; 
        }
    }

    public async findDoctor(doctorName) {
        try { 
            const doctor = await doctorModel.findOne({ name: doctorName }).exec(); 
            if (doctor) { 
                return doctor; 
            } else { 
                return new Error('Doctor not found'); 
            } 
        } catch (error) {  
            throw error; 
        }
    }

    public async updateDoctorAppointment(appointmentData) {
        try { 
            const doctor = await doctorModel.findOneAndUpdate({name: appointmentData.name}, appointmentData, { new: true }).exec(); 
            if (doctor) { 
                return doctor; 
            } else { 
                throw new Error('Doctor Slot filled by Today'); 
            } 
        } catch (error) {  
            throw error; 
        }
    }

    public async GetEntityById(appointmentId, callback) {
        this.appointment
        .findById(appointmentId)
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            callback(error);
        });
    }
    public async GetAllValues(callback) {
        this.appointment
        .find()
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            callback(error);
        });
    }
    public async Create(appointmentData, callback) {
        let temp = new appointmentModel(appointmentData);

        temp.save()
        .then((result) => {
            callback(result);
        })
        .catch((error) => {
            callback(error);
        });
    }
}
