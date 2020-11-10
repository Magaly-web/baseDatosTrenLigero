
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM22Schema = new Schema({

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
    
     //M1
     m1btgv: String,
     m1btgl: String,
     m1btgr: String,

     m1tdpv: String,
     m1tdpl: String,
     m1tdpr: String,

     m1btav: String,
     m1btal: String,
     m1btar: String,

     m1tpv: String,
     m1tpl: String,
     m1tpr: String,

     m1tfv: String,
     m1tfl: String,
     m1tfr: String,

    //M2
     m2btgv: String,
     m2btgl: String,
     m2btgr: String,

     m2tdpv: String,
     m2tdpl: String,
     m2tdpr: String,

     m2btav: String,
     m2btal: String,
     m2btar: String,

     m2tpv: String,
     m2tpl: String,
     m2tpr: String,

     m2tfv: String,
     m2tfl: String,
     m2tfr: String,

     obs2: String,

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

module.exports = mongoose.model('memaM22', memaM22Schema);
