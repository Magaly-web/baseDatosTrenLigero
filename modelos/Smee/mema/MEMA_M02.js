
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM02Schema = new Schema({

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

    //Antenas SAE
    gpsv: String,
    gpsl: String,
    gpsr: String,
    gpsf: String,

    atv: String,
    atl: String,
    atr: String,
    atf: String,

    tfv: String,
    tfl: String,
    tfr: String,
    tff: String,

    //Baliza SAE

    bv: String,
    bl: String,
    br: String,
    bf: String,

    bpbv: String,
    bpbl: String,
    bpbr: String,
    bpbf: String,

    tdfv: String,
    tdfl: String,
    tdfr: String,
    tdff: String,

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

module.exports = mongoose.model('memaM02', memaM02Schema);
