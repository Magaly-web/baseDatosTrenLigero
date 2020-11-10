'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM60Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    limpiezaGralM1: Boolean,
    limpiezaGralM2: Boolean,
    observacionesLg: String,

    desarmadoRevM1: Boolean,
    desarmadoRevM2: Boolean,
    observacionesDr: String,

    fugaAireM1: Boolean,
    fugaAireM2: Boolean,
    observacionesFa: String,

    lubricacionRenoilM1: Boolean,
    lubricacionRenoilM2: Boolean,
    observacionesLr: String,

    cambioKitM1: Boolean,
    cambioKitM2: Boolean,
    observacionesCk: String,

    pruebasM1: Boolean,
    pruebasM2: Boolean,
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
module.exports = mongoose.model('mmmaM60', mmmaM60Schema);