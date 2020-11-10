
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM01Schema = new Schema({

    trainModel: { type: String, required: true },//tren programado
    kilometraje: { type: Number },
    date_inicio: { type: String },
    date_termino: { type: String },
    dateultmant: { type: String },
    datepromant: { type: String },

    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    //apr
        tctvf: String,
        tctl: String,
        tctf: String,

        cpvf: String,
        cpl: String,
        cpf: String,

        osgvf: String,
        osgl: String,
        osgf: String,

        ctvf: String,
        ctl: String,
        ctf: String,

        odlvf: String,
        odll: String,
        odlf: String,

        ofvf: String,
        ofl: String,
        off: String,

        tvf: String,
        tl: String,
        tf: String,

    //prueba de rigidez
    nl1: String,
    nl2: String,

   obs2: String,
   
   equipolUtilizado: {
    numberOfEquipo: Number,    
    arr: [{
        numberOfequ: String,
        marca: String,
        inv: String,
    }]
    },

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

module.exports = mongoose.model('memaM01', memaM01Schema);


 

