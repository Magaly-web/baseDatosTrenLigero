'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC03Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    
    operario: { type: String, required: true},
    id_worker: {type: String},
    unidad: { type: Number, required: true },
    
    //GASERA TE-90 y TE-95
    g1m1Rev: Boolean,
    g1m1Lub: Boolean,
    g1m1Limp: Boolean,
    g1m1Camb: Boolean,
    g1rRev: Boolean,
    g1rLub: Boolean,
    g1rLimp: Boolean,
    g1rCamb: Boolean,
    g1m2Rev: Boolean,
    g1m2Lub: Boolean,
    g1m2Limp: Boolean,
    g1m2Camb: Boolean,

    g2m1Rev: Boolean,
    g2m1Lub: Boolean,
    g2m1Limp: Boolean,
    g2m1Camb: Boolean,
    g2rRev: Boolean,
    g2rLub: Boolean,
    g2rLimp: Boolean,
    g2rCamb: Boolean,
    g2m2Rev: Boolean,
    g2m2Lub: Boolean,
    g2m2Limp: Boolean,
    g2m2Camb: Boolean,

    g3m1Rev: Boolean,
    g3m1Lub: Boolean,
    g3m1Limp: Boolean,
    g3m1Camb: Boolean,
    g3rRev: Boolean,
    g3rLub: Boolean,
    g3rLimp: Boolean,
    g3rCamb: Boolean,
    g3m2Rev: Boolean,
    g3m2Lub: Boolean,
    g3m2Limp: Boolean,
    g3m2Camb: Boolean,

    g4m1Rev: Boolean,
    g4m1Lub: Boolean,
    g4m1Limp: Boolean,
    g4m1Camb: Boolean,
    g4rRev: Boolean,
    g4rLub: Boolean,
    g4rLimp: Boolean,
    g4rCamb: Boolean,
    g4m2Rev: Boolean,
    g4m2Lub: Boolean,
    g4m2Limp: Boolean,
    g4m2Camb: Boolean,

    g5m1Rev: Boolean,
    g5m1Lub: Boolean,
    g5m1Limp: Boolean,
    g5m1Camb: Boolean,
    g5rRev: Boolean,
    g5rLub: Boolean,
    g5rLimp: Boolean,
    g5rCamb: Boolean,
    g5m2Rev: Boolean,
    g5m2Lub: Boolean,
    g5m2Limp: Boolean,
    g5m2Camb: Boolean,

    g6m1Rev: Boolean,
    g6m1Lub: Boolean,
    g6m1Limp: Boolean,
    g6m1Camb: Boolean,
    g6rRev: Boolean,
    g6rLub: Boolean,
    g6rLimp: Boolean,
    g6rCamb: Boolean,
    g6m2Rev: Boolean,
    g6m2Lub: Boolean,
    g6m2Limp: Boolean,
    g6m2Camb: Boolean,

    g7m1Rev: Boolean,
    g7m1Lub: Boolean,
    g7m1Limp: Boolean,
    g7m1Camb: Boolean,
    g7rRev: Boolean,
    g7rLub: Boolean,
    g7rLimp: Boolean,
    g7rCamb: Boolean,
    g7m2Rev: Boolean,
    g7m2Lub: Boolean,
    g7m2Limp: Boolean,
    g7m2Camb: Boolean,

    g8m1Rev: Boolean,
    g8m1Lub: Boolean,
    g8m1Limp: Boolean,
    g8m1Camb: Boolean,
    g8rRev: Boolean,
    g8rLub: Boolean,
    g8rLimp: Boolean,
    g8rCamb: Boolean,
    g8m2Rev: Boolean,
    g8m2Lub: Boolean,
    g8m2Limp: Boolean,
    g8m2Camb: Boolean,

    //GASERA TE-06
    g9rRev: Boolean,
    g9rLub: Boolean,
    g9rLimp: Boolean,
    g9rCamb: Boolean,

    g10rRev: Boolean,
    g10rLub: Boolean,
    g10rLimp: Boolean,
    g10rCamb: Boolean,

    g11rRev: Boolean,
    g11rLub: Boolean,
    g11rLimp: Boolean,
    g11rCamb: Boolean,

    g12rRev: Boolean,
    g12rLub: Boolean,
    g12rLimp: Boolean,
    g12rCamb: Boolean,

    g13rRev: Boolean,
    g13rLub: Boolean,
    g13rLimp: Boolean,
    g13rCamb: Boolean,

    g14rRev: Boolean,
    g14rLub: Boolean,
    g14rLimp: Boolean,
    g14rCamb: Boolean,

    g15rRev: Boolean,
    g15rLub: Boolean,
    g15rLimp: Boolean,
    g15rCamb: Boolean,

    g16rRev: Boolean,
    g16rLub: Boolean,
    g16rLimp: Boolean,
    g16rCamb: Boolean,
    
    observaciones: String,
    
    //material utilizado
    materialUtilizado: {
        numberOfMaterial: Number,    
        arr: [{
            _id: String,
            code: String,
            description: String,
            voucherNumber: String,
            quantity: String,
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
module.exports = mongoose.model('mmmeC03', mmmeC03Schema);