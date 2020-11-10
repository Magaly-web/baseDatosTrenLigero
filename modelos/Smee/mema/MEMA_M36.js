
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM36Schema = new Schema({

    trainModel: { type: String, required: true },//tren programado
    kilometraje: { type: Number },
    
    date_inicio: { type: String },
    date_termino: { type: String },
    
    dateultmant: { type: String },
    datepromant: { type: String },

    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},
    obs1: String,
     //----------------------------
    
     //Sensor Bogie M1
     m1tiv: String,
     m1til: String,
     m1tif: String,

     m1tchv: String,
     m1tchl: String,
     m1tchf: String,

     m1ptv: String,
     m1ptl: String,
     m1ptf: String,

     m1celsv: String,
     m1celsl: String,
     m1celsf: String,

     m1bfv: String,
     m1bfl: String,
     m1bff: String,

     m1tfv: String,
     m1tfl: String,
     m1tff: String,

     //Sensor Bogie Remolque M1
     m1rtiv: String,
     m1rtil: String,
     m1rtif: String,

     m1rtchv: String,
     m1rtchl: String,
     m1rtchf: String,

     m1rptv: String,
     m1rptl: String,
     m1rptf: String,

     m1rcelsv: String,
     m1rcelsl: String,
     m1rcelsf: String,

     m1rbfv: String,
     m1rbfl: String,
     m1rbff: String,

     m1rtfv: String,
     m1rtfl: String,
     m1rtff: String,

     obs2: String,

     //Sensor Bogie M2
     m2tiv: String,
     m2til: String,
     m2tif: String,

     m2tchv: String,
     m2tchl: String,
     m2tchf: String,

     m2ptv: String,
     m2ptl: String,
     m2ptf: String,

     m2celsv: String,
     m2celsl: String,
     m2celsf: String,

     m2bfv: String,
     m2bfl: String,
     m2bff: String,

     m2tfv: String,
     m2tfl: String,
     m2tff: String,

     //Sensor Bogie Remolque m2
     m2rtiv: String,
     m2rtil: String,
     m2rtif: String,

     m2rtchv: String,
     m2rtchl: String,
     m2rtchf: String,

     m2rptv: String,
     m2rptl: String,
     m2rptf: String,

     m2rcelsv: String,
     m2rcelsl: String,
     m2rcelsf: String,

     m2rbfv: String,
     m2rbfl: String,
     m2rbff: String,

     m2rtfv: String,
     m2rtfl: String,
     m2rtff: String,

     obs3: String,
     //Materiales
     materialUtilizado: {
        numberOfMaterial: Number,    
        arr: [{
            _id: String,
            code: String,
            description: String,
            voucherNumber: String,
            quantity: String,
            unit: String
        }]
     },
     
     documentFormCurrentState: {
        approvalByWorker    : { id_worker: String, checked: Boolean },
        approvalBySupervisor: { id_worker: String, checked: Boolean },
        approvalByMannager  : { id_worker: String, checked: Boolean },
        loading: Boolean
     },
     historyFile: [
        {
            id_worker: String,
            workerName: String,
      
            editDate: Date,
            editValue: Number
        }
     ]
     
     });
     
     module.exports = mongoose.model('memaM36', memaM36Schema);
     
     