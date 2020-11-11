'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeB01Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    resistenciasS: Boolean,
    resistenciasL: Boolean,
    observacionesR: String,

    convertidorTS: Boolean,
    convertidorTL: Boolean,
    observacionesCt: String,

    convertidorAS: Boolean,
    convertidorAL: Boolean,
    observacionesCa: String,

    cajaCAPS: Boolean,
    cajaCAPL: Boolean,
    observacionesCAP: String,

    disyuntorS: Boolean,
    disyuntorL: Boolean,
    observacionesD: String,

    cajaHVS: Boolean,
    cajaHVL: Boolean,
    observacionesHV: String,

    cajaCCATL: Boolean,
    observacionesCCAT: String,

    convertidorCTL: Boolean,
    observacionesCT: String,

    cofre1S: Boolean,
    cofre1L: Boolean,
    observacionesC1: String,

    cofre2S: Boolean,
    cofre2L: Boolean,
    observacionesC2: String,

    cofre3S: Boolean,
    cofre3L: Boolean,
    observacionesC3: String,

    bogiem1S: Boolean,
    bogiem1L: Boolean,
    bogiem1R: Boolean,
    observacionesBm1: String,

    bogierS: Boolean,
    bogierL: Boolean,
    bogierR: Boolean,
    observacionesBr: String,

    bogiem2S: Boolean,
    bogiem2L: Boolean,
    bogiem2R: Boolean,
    observacionesBm2: String,

    motocompresorS: Boolean,
    motocompresorL: Boolean,
    motocompresorR: Boolean,
    observacionesM: String,

    acopladorm1S: Boolean,
    acopladorm1L: Boolean,
    acopladorm1R: Boolean,
    observacionesAm1: String,

    acopladorm2S: Boolean,
    acopladorm2L: Boolean,
    acopladorm2R: Boolean,
    observacionesAm2: String,

    bajoBm1S: Boolean,
    bajoBm1L: Boolean,
    bajoBm1R: Boolean,
    observacionesBbm1: String,

    bajoAS: Boolean,
    bajoAL: Boolean,
    bajoAR: Boolean,
    observacionesBa: String,

    bajoBm2S: Boolean,
    bajoBm2L: Boolean,
    bajoBm2R: Boolean,
    observacionesBbm2: String,

    busquedaFm1R: Boolean,
    observacionesBfm1: String,

    busquedaFrR: Boolean,
    observacionesBfr: String,

    busquedaFm2R: Boolean,
    observacionesBfm2: String,

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
module.exports = mongoose.model('mmmeB01', mmmeB01Schema);