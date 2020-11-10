
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM29Schema = new Schema({

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

     //Ductos para resistencia de frenado
     
     daal: String,
     daar: String,
     daaf: String,

     mfl: String,
     mfr: String,
     mff: String,

     fcml: String,
     fcmr: String,
     fcmf: String,

     spl: String,
     spr: String,
     spf: String,

     deal: String,
     dear: String,
     deaf: String,

     tfl: String,
     tfr: String,
     tff: String,

     //Ductos para convertidor estatico de traccion

     daa2l: String,
     daa2r: String,
     daa2f: String,

     mf2l: String,
     mf2r: String,
     mf2f: String,

     fcm2l: String,
     fcm2r: String,
     fcm2f: String,

     sp2l: String,
     sp2r: String,
     sp2f: String,

     tf2l: String,
     tf2r: String,
     tf2f: String,

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
 
 module.exports = mongoose.model('memaM29', memaM29Schema);
 
    