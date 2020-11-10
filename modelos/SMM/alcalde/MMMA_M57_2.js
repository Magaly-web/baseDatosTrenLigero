'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM57_2Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    limpiezaGralEW6: Boolean,
    limpiezaGralNW6: Boolean,
    observacionesLg: String,

    desarmadoRevEW6: Boolean,
    desarmadoRevNW6: Boolean,
    observacionesDr: String,

    revisionFugaEW6: Boolean,
    revisionFugaNW6: Boolean,
    observacionesRf: String,

    lubricacionRenoilEW6: Boolean,
    lubricacionRenoilNW6: Boolean,
    observacionesLr: String,

    cambioKitEW6: Boolean,
    cambioKitNW6: Boolean,
    observacionesCk: String,

    pruebasEW6: Boolean,
    pruebasNW6: Boolean,
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
module.exports = mongoose.model('mmmaM57_2', mmmaM57_2Schema);