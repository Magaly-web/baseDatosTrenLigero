'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM44Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    noSerie:{ type: String },
    
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    limpiezaGralE1: Boolean,
    limpiezaGralE2: Boolean,
    observacionesLg: String,

    desarmadoRevE1: Boolean,
    desarmadoRevE2: Boolean,
    observacionesDr: String,

    cambioKitE1: Boolean,
    cambioKitE2: Boolean,
    observacionesCk: String,

    lubricacionE1: Boolean,
    lubricacionE2: Boolean,
    observacionesL: String,

    funcionamientoMontajeE1: Boolean,
    funcionamientoMontajeE2: Boolean,
    observacionesFm: String,

    pruebasConjuntoE1: Boolean,
    pruebasConjuntoE2: Boolean,
    observacionesPc: String,

    numeroE1: Boolean,
    numeroE2: Boolean,
    observacionesN: String,

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
module.exports = mongoose.model('mmmaM44', mmmaM44Schema);