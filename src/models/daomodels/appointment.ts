
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;



export const appointmentSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   firstName: { type: String },
   lastName: { type: String },
   email: { type: String },
   appointmentTime:  { type: String },
   doctorName: { type: String },
   appointmentId: { type: Number },
   status: { type: String, enum: ['inprogress', 'completed', 'cancelled'] }
})

const appointmentModel = mongoose.model('appointment', appointmentSchema, 'appointment');
export default appointmentModel;
