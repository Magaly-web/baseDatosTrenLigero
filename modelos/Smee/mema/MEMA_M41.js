
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM41Schema = new Schema({

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
//Torreta M1

     mcm1v: String,
     mcm1l: String,
     mcm1f: String,

     jr1v: String,
     jr1l: String,
     jr1f: String,

     le1v: String,
     le1l: String,
     le1f: String,

     ca1v: String,
     ca1l: String,
     ca1f: String,

     te1v: String,
     te1l: String,
     te1f: String,


     //Torreta M2

     mcm2v: String,
     mcm2l: String,
     mcm2f: String,

     jr2v: String,
     jr2l: String,
     jr2f: String,

     le2v: String,
     le2l: String,
     le2f: String,

     ca2v: String,
     ca2l: String,
     ca2f: String,

     te2v: String,
     te2l: String,
     te2f: String,

     obs2: String,

     //----------------------------
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
     
     module.exports = mongoose.model('memaM41', memaM41Schema);
     
     