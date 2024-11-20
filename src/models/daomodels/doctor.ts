import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const doctorSchema = new Schema({
    name: { type: String },
    appointment_count: { type: Number, default: 12 },
    dateSlot: { type: String }
});


const doctorModel = mongoose.model('doctor', doctorSchema, 'doctor');

export default doctorModel;