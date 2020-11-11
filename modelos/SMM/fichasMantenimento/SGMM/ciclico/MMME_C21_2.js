'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC21_2Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    
    operarioMtto: { type: String, required: true},
    id_workerMtto: {type: String},
    operarioPruebas: { type: String, required: true},
    id_workerPruebas: {type: String},
    unidad: { type: Number, required: true },

    valvulaRNoSerie: String,
    valvulaRLimpieza: Boolean,
    valvulaRCambO: Boolean,
    valvulaRLub: Boolean,

    valvulaPNoSerie: String,
    valvulaPLimpieza: Boolean,
    valvulaPCambO: Boolean,
    valvulaPLub: Boolean,

    valvulaLNoSerie: String,
    valvulaLLimpieza: Boolean,
    valvulaLLub: Boolean,

    valvulaMNoSerie: String,
    valvulaMLimpieza: Boolean,
    valvulaMLub: Boolean,

    interruptorNoSerie: String,
    interruptorLimpieza: Boolean,

    transductorNoSerie: String,
    transductorLimpieza: Boolean,
    
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
module.exports = mongoose.model('mmmeC21_2', mmmeC21_2Schema);