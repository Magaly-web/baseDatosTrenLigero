
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM39Schema = new Schema({

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
     //Fanales de transito M1
     cild1ef: String,
     cild1l: String,
     cild1r: String,
     cild1f: String,

     mrd1ef: String,
     mrd1l: String,
     mrd1r: String,
     mrd1f: String,

     cili1ef: String,
     cili1l: String,
     cili1r: String,
     cili1f: String,

     mri1ef: String,
     mri1l: String,
     mri1r: String,
     mri1f: String,

     cilidr1ef: String,
     cilidr1l: String,
     cilidr1r: String,
     cilidr1f: String,

     mrrd1ef: String,
     mrrd1l: String,
     mrrd1r: String,
     mrrd1f: String,

     cilir1ef: String,
     cilir1l: String,
     cilir1r: String,
     cilir1f: String,

     mrri1ef: String,
     mrri1l: String,
     mrri1r: String,
     mrri1f: String,

     tf1ef: String,
     tf1l: String,
     tf1r: String,
     tf1f: String,

     obs2: String,
     
     //Fanales de transito M2
     cild2ef: String,
     cild2l: String,
     cild2r: String,
     cild2f: String,

     mrd2ef: String,
     mrd2l: String,
     mrd2r: String,
     mrd2f: String,

     cili2ef: String,
     cili2l: String,
     cili2r: String,
     cili2f: String,

     mri2ef: String,
     mri2l: String,
     mri2r: String,
     mri2f: String,

     cilidr2ef: String,
     cilidr2l: String,
     cilidr2r: String,
     cilidr2f: String,

     mrrd2ef: String,
     mrrd2l: String,
     mrrd2r: String,
     mrrd2f: String,

     cilir2ef: String,
     cilir2l: String,
     cilir2r: String,
     cilir2f: String,

     mrri2ef: String,
     mrri2l: String,
     mrri2r: String,
     mrri2f: String,

     tf2ef: String,
     tf2l: String,
     tf2r: String,
     tf2f: String,

     obs3: String,
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
     
     module.exports = mongoose.model('memaM39', memaM39Schema);
     
     