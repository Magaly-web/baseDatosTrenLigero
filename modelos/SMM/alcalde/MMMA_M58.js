'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM58Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    limpiezaGralEW1: Boolean,
    limpiezaGralNW1: Boolean,
    observacionesLg: String,

    desarmadoRevEW1: Boolean,
    desarmadoRevNW1: Boolean,
    observacionesDr: String,

    revisionFugaEW1: Boolean,
    revisionFugaNW1: Boolean,
    observacionesRf: String,

    lubricacionRenoilEW1: Boolean,
    lubricacionRenoilNW1: Boolean,
    observacionesLr: String,

    cambioKitEW1: Boolean,
    cambioKitNW1: Boolean,
    observacionesCk: String,

    pruebasEW1: Boolean,
    pruebasNW1: Boolean,
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
module.exports = mongoose.model('mmmaM58', mmmaM58Schema);