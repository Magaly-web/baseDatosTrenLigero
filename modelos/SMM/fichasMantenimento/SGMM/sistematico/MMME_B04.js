'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeB04Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    noSerie: Number,
    horasTE06: Number,
    observacion: String,

    radiadorLimp: Boolean,
    radiadorInsp: Boolean,
    radiadorAp: Boolean,
    observacionesR: String,

    cuerpoMCPLimp: Boolean,
    cuerpoMCPInsp: Boolean,
    observacionesCmcp: String,

    tuberiaGLimp: Boolean,
    tuberiaGInsp: Boolean,
    tuberiaGAp: Boolean,
    observacionesTg: String,

    bayonetaLimp: Boolean,
    bayonetaInsp: Boolean,
    bayonetaAp: Boolean,
    observacionesB: String,

    filtroALimp: Boolean,
    filtroAInsp: Boolean,
    observacionesFa: String,

    conexionesELimp: Boolean,
    conexionesEInsp: Boolean,
    conexionesEAp: Boolean,
    observacionesCe: String,

    tapasCLimp: Boolean,
    tapasCInsp: Boolean,
    tapasCAp: Boolean,
    observacionesTc: String,

    valvulaRLimp: Boolean,
    valvulaRInsp: Boolean,
    valvulaRAp: Boolean,
    observacionesVr: String,

    valvulaDLimp: Boolean,
    valvulaDInsp: Boolean,
    valvulaDAp: Boolean,
    observacionesVd: String,

    platoALimp: Boolean,
    platoAInsp: Boolean,
    platoAAp: Boolean,
    observacionesPa: String,

    carroceriaLimp: Boolean,
    carroceriaInsp: Boolean,
    carroceriaAp: Boolean,
    observacionesC: String,

    fijacionBLimp: Boolean,
    fijacionBInsp: Boolean,
    fijacionBAp: Boolean,
    observacionesFb: String,

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
module.exports = mongoose.model('mmmeB04', mmmeB04Schema);