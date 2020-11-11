'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC17Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    
    operarioM1: { type: String, required: true},
    id_workerM1: {type: String},
    operarioM2: { type: String, required: true},
    id_workerM2: {type: String},
    unidad: { type: Number, required: true },

    cableadoM1Rev: Boolean,
    cableadoM1Limp: Boolean,
    cableadoRRev: Boolean,
    cableadoRLimp: Boolean,
    cableadoM2Rev: Boolean,
    cableadoM2Limp: Boolean,

    tuberiaM1Rev: Boolean,
    tuberiaM1Limp: Boolean,
    tuberiaRRev: Boolean,
    tuberiaRLimp: Boolean,
    tuberiaM2Rev: Boolean,
    tuberiaM2Limp: Boolean,

    cofresM1Rev: Boolean,
    cofresM1Limp: Boolean,
    cofresRRev: Boolean,
    cofresRLimp: Boolean,
    cofresM2Rev: Boolean,
    cofresM2Limp: Boolean,

    contenedorCeaM1Rev: Boolean,
    contenedorCeaM1Limp: Boolean,
    contenedorCeaRRev: Boolean,
    contenedorCeaRLimp: Boolean,
    contenedorCeaM2Rev: Boolean,
    contenedorCeaM2Limp: Boolean,

    contenedorCetM1Rev: Boolean,
    contenedorCetM1Limp: Boolean,
    contenedorCetRRev: Boolean,
    contenedorCetRLimp: Boolean,
    contenedorCetM2Rev: Boolean,
    contenedorCetM2Limp: Boolean,

    contenedorHvM1Rev: Boolean,
    contenedorHvM1Limp: Boolean,
    contenedorHvRRev: Boolean,
    contenedorHvRLimp: Boolean,
    contenedorHvM2Rev: Boolean,
    contenedorHvM2Limp: Boolean,

    contenedorRfM1Rev: Boolean,
    contenedorRfM1Limp: Boolean,
    contenedorRfRRev: Boolean,
    contenedorRfRLimp: Boolean,
    contenedorRfM2Rev: Boolean,
    contenedorRfM2Limp: Boolean,

    depositosM1Rev: Boolean,
    depositosM1Limp: Boolean,
    depositosRRev: Boolean,
    depositosRLimp: Boolean,
    depositosM2Rev: Boolean,
    depositosM2Limp: Boolean,

    valvulasCM1Rev: Boolean,
    valvulasCM1Limp: Boolean,
    valvulasCRRev: Boolean,
    valvulasCRLimp: Boolean,
    valvulasCM2Rev: Boolean,
    valvulasCM2Limp: Boolean,

    valvulasPM1Rev: Boolean,
    valvulasPM1Limp: Boolean,
    valvulasPM2Rev: Boolean,
    valvulasPM2Limp: Boolean,

    depositosAM1Rev: Boolean,
    depositosAM1Limp: Boolean,
    depositosAM2Rev: Boolean,
    depositosAM2Limp: Boolean,

    bajoBM1Rev: Boolean,
    bajoBM1Limp: Boolean,
    bajoBRRev: Boolean,
    bajoBRLimp: Boolean,
    bajoBM2Rev: Boolean,
    bajoBM2Limp: Boolean,

    sujecionM1Rev: Boolean,
    sujecionM1Limp: Boolean,
    sujecionRRev: Boolean,
    sujecionRLimp: Boolean,
    sujecionM2Rev: Boolean,
    sujecionM2Limp: Boolean,

    busquedaFM1Rev: Boolean,
    busquedaFM1Limp: Boolean,
    busquedaFRRev: Boolean,
    busquedaFRLimp: Boolean,
    busquedaFM2Rev: Boolean,
    busquedaFM2Limp: Boolean,

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
module.exports = mongoose.model('mmmeC17', mmmeC17Schema);