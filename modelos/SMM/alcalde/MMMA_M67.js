'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM67Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    noSerie: { type: String },
    
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    limpiezaGralV1: Boolean,
    limpiezaGralV2: Boolean,
    limpiezaGralV3: Boolean,
    limpiezaGralV4: Boolean,
    limpiezaGralV5: Boolean,
    observacionesLg: String,

    desarmadoRevV1: Boolean,
    desarmadoRevV2: Boolean,
    desarmadoRevV3: Boolean,
    desarmadoRevV4: Boolean,
    desarmadoRevV5: Boolean,
    observacionesDr: String,

    revisionFugasV1: Boolean,
    revisionFugasV2: Boolean,
    revisionFugasV3: Boolean,
    revisionFugasV4: Boolean,
    revisionFugasV5: Boolean,
    observacionesRf: String,

    lubricacionRenoilV1: Boolean,
    lubricacionRenoilV2: Boolean,
    lubricacionRenoilV3: Boolean,
    lubricacionRenoilV4: Boolean,
    lubricacionRenoilV5: Boolean,
    observacionesLr: String,

    cambioKitV1: Boolean,
    cambioKitV2: Boolean,
    cambioKitV3: Boolean,
    cambioKitV4: Boolean,
    cambioKitV5: Boolean,
    observacionesCk: String,

    pruebasV1: Boolean,
    pruebasV2: Boolean,
    pruebasV3: Boolean,
    pruebasV4: Boolean,
    pruebasV5: Boolean,
    observacionesP: String,

    observaciones: String,

    //MATERIAL UTILIZADO
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
module.exports = mongoose.model('mmmaM67', mmmaM67Schema);