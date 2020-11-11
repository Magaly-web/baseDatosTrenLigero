'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeB03Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    noSerie: Number,
    dimAnt: Number,
    dimPost: Number,
    cuemoD: Boolean,
    carbonF: Boolean,
    dimensionM: Boolean,
    otros: Boolean,
    obs: String,

    articulacionesL: Boolean,
    articulacionesE: Boolean,
    articulacionesT: Boolean,
    observacionesA: String,

    resortesL: Boolean,
    resortesE: Boolean,
    resortesT: Boolean,
    observacionesR: String,

    conexionesFL: Boolean,
    conexionesFE: Boolean,
    conexionesFC: Boolean,
    conexionesFT: Boolean,
    observacionesCf: String,

    dispositivoSL: Boolean,
    dispositivoSE: Boolean,
    dispositivoSC: Boolean,
    dispositivoST: Boolean,
    observacioneDs: String,

    bastidorL: Boolean,
    bastidorT: Boolean,
    observacionesB: String,

    ejeAL: Boolean,
    ejeAT: Boolean,
    observacionesEa: String,

    clavijaAL: Boolean,
    clavijaAT: Boolean,
    observacionesCa: String,

    carbonesAL: Boolean,
    carbonesAC: Boolean,
    carbonesAT: Boolean,
    observacionesCarquet: String,

    cuernosEL: Boolean,
    cuernosEC: Boolean,
    cuernosET: Boolean,
    observacionesCe: String,

    torretasm1m2L: Boolean,
    torretasm1m2E: Boolean,
    torretasm1m2C: Boolean,
    torretasm1m2T: Boolean,
    observacionesTm1m2: String,

    cableadoT: Boolean,
    observacionesCt: String,

    rotulaAL: Boolean,
    rotulaAE: Boolean,
    rotulaAC: Boolean,
    observacionesRa: String, 
    
    distuntorEL: Boolean,
    distuntorET: Boolean,
    observacionesDe: String,

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
module.exports = mongoose.model('mmmeB03', mmmeB03Schema);