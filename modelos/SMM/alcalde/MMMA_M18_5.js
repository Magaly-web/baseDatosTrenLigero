'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM18_5Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    noSerie: { type: String },
    
    //BLOQUE DE COMPRESION
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    cuerpoBloqueR: Boolean,
    cuerpoBloqueL: Boolean,
    cuerpoBloqueE: Boolean,
    cuerpoBloqueC: Boolean,
    observacionesCb: String,

    tapaR: Boolean,
    tapaL: Boolean,
    tapaE: Boolean,
    tapaC: Boolean,
    observacionesT: String,

    rotorPrincipalR: Boolean,
    rotorPrincipalL: Boolean,
    rotorPrincipalE: Boolean,
    rotorPrincipalC: Boolean,
    observacionesRp: String,

    rotorAuxiliarR: Boolean,
    rotorAuxiliarL: Boolean,
    rotorAuxiliarE: Boolean,
    rotorAuxiliarC: Boolean,
    observacionesRa: String,

    unionRoscadaR: Boolean,
    unionRoscadaL: Boolean,
    unionRoscadaE: Boolean,
    unionRoscadaC: Boolean,
    observacionesUr: String,

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
module.exports = mongoose.model('mmmaM18_5', mmmaM18_5Schema);