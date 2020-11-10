'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM18_14Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    noSerie: { type: String },
    
    //PRUEBAS
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    limpiezaGral: Boolean,
    observacionesLg: String,

    desarmadoRev: Boolean,
    observacionesDr: String,

    fugaAireT: Boolean,
    observacionesFat: String,

    fugaAceite: Boolean,
    observacionesFa: String,

    cambioAceite: Boolean,
    observacionesCa: String,

    cambioKit: Boolean,
    observacionesCk: String,

    observaciones: String,

    //PRUEBAS
    controlValvulaD: Boolean,
    observacionesCvd: String,

    controlValvulaA: Boolean,
    observacionesCva: String,

    controlValvulaR: Boolean,
    observacionesCvr: String,

    presionMinima: Boolean,
    observacionesPm: String,

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
module.exports = mongoose.model('mmmaM18_14', mmmaM18_14Schema);