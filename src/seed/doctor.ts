import * as mongoose from 'mongoose';
import doctorModel from '../models/daomodels/doctor';
import { doctorList } from '../config/doctor';

export class Seed {
    doctorInitiative(){
        doctorList.forEach((data) => {
            doctorModel.findOne({name: data.name}).then((saveData) => {
                if(saveData == null){
                    let obj = new doctorModel(data);
                    obj.save();
                }
            });
        })
    }
}