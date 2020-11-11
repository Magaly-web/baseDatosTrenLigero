'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC13Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    //TE-90 Y TE-95
    tornillosm1Rev: Boolean,
    tornillosm1Limp: Boolean,
    tornillosm1Camb: Boolean,
    tornillosm1Danios: Boolean,
    observacionesTm1: String,

    zoclosm1Rev: Boolean,
    zoclosm1Limp: Boolean,
    zoclosm1Danios: Boolean,
    observacionesZm1: String,

    correderasm1Rev: Boolean,
    correderasm1Limp: Boolean,
    correderasm1Danios: Boolean,
    correderasm1Asp: Boolean,
    observacionesCm1: String,

    tornillosm2Rev: Boolean,
    tornillosm2Limp: Boolean,
    tornillosm2Camb: Boolean,
    tornillosm2Danios: Boolean,
    observacionesTm2: String,

    zoclosm2Rev: Boolean,
    zoclosm2Limp: Boolean,
    zoclosm2Danios: Boolean,
    observacionesZm2: String,

    correderasm2Rev: Boolean,
    correderasm2Limp: Boolean,
    correderasm2Danios: Boolean,
    correderasm2Asp: Boolean,
    observacionesCm2: String,

    //TE-06
    pestillosM1Rev: Boolean,
    pestillosM1Limp: Boolean,
    pestillosM1Camb: Boolean,
    pestillosM1Danios: Boolean,
    observacionesPM1: String,

    zoclosM1Rev: Boolean,
    zoclosM1Limp: Boolean,
    zoclosM1Danios: Boolean,
    observacionesZM1: String,

    correderasM1Rev: Boolean,
    correderasM1Limp: Boolean,
    correderasM1Danios: Boolean,
    observacionesCM1: String,

    bisagrasM1Rev: Boolean,
    bisagrasM1Limp: Boolean,
    bisagrasM1Danios: Boolean,
    observacionesBM1: String,

    pestillosM2Rev: Boolean,
    pestillosM2Limp: Boolean,
    pestillosM2Camb: Boolean,
    pestillosM2Danios: Boolean,
    observacionesPM2: String,

    zoclosM2Rev: Boolean,
    zoclosM2Limp: Boolean,
    zoclosM2Danios: Boolean,
    observacionesZM2: String,

    correderasM2Rev: Boolean,
    correderasM2Limp: Boolean,
    correderasM2Danios: Boolean,
    observacionesCM2: String,

    bisagrasM2Rev: Boolean,
    bisagrasM2Limp: Boolean,
    bisagrasM2Danios: Boolean,
    observacionesBM2: String,

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
module.exports = mongoose.model('mmmeC13', mmmeC13Schema);