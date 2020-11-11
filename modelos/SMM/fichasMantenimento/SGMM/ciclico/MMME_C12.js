'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC12Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    //PARA TE-90 Y TE-95
    mitadSRev: Boolean,
    mitadSLimp: Boolean,
    mitadSaExtend: Boolean,
    mitadSCamb: Boolean,
    observacionesMs: String,

    tornilloHRev: Boolean,
    tornilloHLimp: Boolean,
    tornilloHCamb: Boolean,
    observacionesTh: String,

    arandelaRev: Boolean,
    arandelaLimp: Boolean,
    arandelaCamb: Boolean,
    observacionesA: String,

    chapaRev: Boolean,
    chapaLimp: Boolean,
    chapaCamb: Boolean,
    observacionesCh: String,

    tuberiaRev: Boolean,
    tuberiaLimp: Boolean,
    tuberiaCamb: Boolean,
    observacionesT: String,

    anillosRRev: Boolean,
    anillosRLimp: Boolean,
    anillosRCamb: Boolean,
    observacionesAr: String,

    tuercaHRev: Boolean,
    tuercaHLimp: Boolean,
    tuercaHCamb: Boolean,
    observacionesTuercaH: String,

    juntaRev: Boolean,
    juntaLimp: Boolean,
    juntaCamb: Boolean,
    observacionesJ: String,

    mitadIRev: Boolean,
    mitadILimp: Boolean,
    mitadIaExtend: Boolean,
    mitadICamb: Boolean,
    observacionesMi: String,

    grifoRev: Boolean,
    grifoLimp: Boolean,
    grifoCamb: Boolean,
    observacionesG: String,

    //PARA TE-06
    filtroRev: Boolean,
    filtroLimp: Boolean,
    filtroCamb: Boolean,
    observacionesFc: String,

    mirillaRev: Boolean,
    mirillaLimp: Boolean,
    mirillaCamb: Boolean,
    observacionesM: String,

    flotadorRev: Boolean,
    flotadorLimp: Boolean,
    flotadorCamb: Boolean,
    observacionesF: String,

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
module.exports = mongoose.model('mmmeC12', mmmeC12Schema);