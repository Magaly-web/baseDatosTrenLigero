'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC08Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    
    operarioM1: { type: String, required: true},
    id_workerM1: {type: String},
    operarioR: { type: String, required: true},
    id_workerR: {type: String},
    operarioM2: { type: String, required: true},
    id_workerM2: {type: String},
    unidad: { type: Number, required: true },

    noBastidorBogieM1: Number,
    noBastidorBogieR: Number,
    noBastidorBogieM2: Number,

    bastidorM1R: Boolean,
    bastidorM1L: Boolean,
    bastidorRR: Boolean,
    bastidorRL: Boolean,
    bastidorM2R: Boolean,
    bastidorM2L: Boolean,
    observacionesB: String,

    ballestasM1R: Boolean,
    ballestasM1L: Boolean,
    ballestasRR: Boolean,
    ballestasRL: Boolean,
    ballestasM2R: Boolean,
    ballestasM2L: Boolean,
    observacionesBm: String,

    bridasM1R: Boolean,
    bridasM1L: Boolean,
    bridasRR: Boolean,
    bridasRL: Boolean,
    bridasM2R: Boolean,
    bridasM2L: Boolean,
    observacionesBs: String,

    amortiguadoresvM1R: Boolean,
    amortiguadoresvM1L: Boolean,
    amortiguadoresvRR: Boolean,
    amortiguadoresvRL: Boolean,
    amortiguadoresvM2R: Boolean,
    amortiguadoresvM2L: Boolean,
    observacionesAv: String,

    amortiguadoreshM1R: Boolean,
    amortiguadoreshM1L: Boolean,
    amortiguadoreshRR: Boolean,
    amortiguadoreshRL: Boolean,
    amortiguadoreshM2R: Boolean,
    amortiguadoreshM2L: Boolean,
    observacionesAh: String,

    motorM1R: Boolean,
    motorM1L: Boolean,
    motorRR: Boolean,
    motorRL: Boolean,
    motorM2R: Boolean,
    motorM2L: Boolean,
    observacionesMt: String,

    reductorM1R: Boolean,
    reductorM1L: Boolean,
    reductorM2R: Boolean,
    reductorM2L: Boolean,
    observacionesR: String,

    cableadoM1R: Boolean,
    cableadoM1L: Boolean,
    cableadoRR: Boolean,
    cableadoRL: Boolean,
    cableadoM2R: Boolean,
    cableadoM2L: Boolean,
    observacionesC: String,

    manequillasM1R: Boolean,
    manequillasM1L: Boolean,
    manequillasRR: Boolean,
    manequillasRL: Boolean,
    manequillasM2R: Boolean,
    manequillasM2L: Boolean,
    observacionesM: String,

    frenosM1R: Boolean,
    frenosM1L: Boolean,
    frenosRR: Boolean,
    frenosRL: Boolean,
    frenosM2R: Boolean,
    frenosM2L: Boolean,
    observacionesF: String,

    cilindrosM1R: Boolean,
    cilindrosM1L: Boolean,
    cilindrosRR: Boolean,
    cilindrosRL: Boolean,
    cilindrosM2R: Boolean,
    cilindrosM2L: Boolean,
    observacionesCf: String,

    busquedaM1R: Boolean,
    busquedaRR: Boolean,
    busquedaM2R: Boolean,
    observacionesBf: String,
    
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
module.exports = mongoose.model('mmmeC08', mmmeC08Schema);