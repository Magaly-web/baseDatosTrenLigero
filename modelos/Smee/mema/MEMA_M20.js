const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM20Schema = new Schema({

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
     //Equipo y accesorios de la cabeza de acoplador M1
     m1bci: String,
     m1bcl: String,
     m1bcf: String,

     m1cfi: String,
     m1cfl: String,
     m1cff: String,

     m1cmi: String,
     m1cml: String,
     m1cmf: String,

     m1cpci: String,
     m1cpcl: String,
     m1cpcf: String,

     m1spi: String,
     m1spl: String,
     m1spf: String,

     //Tomas de conexion acoplador electrico
     m1ssi: String,
     m1ssl: String,
     m1ssc: String,
     m1ssp: String,
     m1ssf: String,

     m1apvi: String,
     m1apvl: String,
     m1apvc: String,
     m1apvp: String,
     m1apvf: String,

     m1condi: String,
     m1condl: String,
     m1condc: String,
     m1condp: String,
     m1condf: String,

     m1aci: String,
     m1acl: String,
     m1acc: String,
     m1acp: String,
     m1acf: String,

     m1tei: String,
     m1tel: String,
     m1tec: String,
     m1tep: String,
     m1tef: String,

     obs2: String,

     //Equipo y accesorios de la cabeza de acoplador M2
     m2bci: String,
     m2bcl: String,
     m2bcf: String,

     m2cfi: String,
     m2cfl: String,
     m2cff: String,

     m2cmi: String,
     m2cml: String,
     m2cmf: String,

     m2cpci: String,
     m2cpcl: String,
     m2cpcf: String,

     m2spi: String,
     m2spl: String,
     m2spf: String,

     //Tomas de conexion acoplador electrico
     m2ssi: String,
     m2ssl: String,
     m2ssc: String,
     m2ssp: String,
     m2ssf: String,

     m2apvi: String,
     m2apvl: String,
     m2apvc: String,
     m2apvp: String,
     m2apvf: String,

     m2condi: String,
     m2condl: String,
     m2condc: String,
     m2condp: String,
     m2condf: String,

     m2aci: String,
     m2acl: String,
     m2acc: String,
     m2acp: String,
     m2acf: String,

     m2tei: String,
     m2tel: String,
     m2tec: String,
     m2tep: String,
     m2tef: String,

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

module.exports = mongoose.model('memaM20', memaM20Schema);
