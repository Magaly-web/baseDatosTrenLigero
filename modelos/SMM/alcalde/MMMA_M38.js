'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM38Schema = Schema({//esquema de la estructura que va a tener los formularios
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},

    drenadoAceiteM1Ant: Boolean,
    drenadoAceiteM1Post: Boolean,
    drenadoAceiteM2Ant: Boolean,
    drenadoAceiteM2Post: Boolean,
    observacionesDa: String,

    lavadoM1Ant: Boolean,
    lavadoM1Post: Boolean,
    lavadoM2Ant: Boolean,
    lavadoM2Post: Boolean,
    observacionesL: String,

    cambioAceiteM1Ant: Boolean,
    cambioAceiteM1Post: Boolean,
    cambioAceiteM2Ant: Boolean,
    cambioAceiteM2Post: Boolean,
    observacionesDa: String,

    cantidadAceiteUM1Ant: Boolean,
    cantidadAceiteUM1Post: Boolean,
    cantidadAceiteUM2Ant: Boolean,
    cantidadAceiteUM2Post: Boolean,
    observacionesCau: String,

    revisionRespiraderosM1Ant: Boolean,
    revisionRespiraderosM1Post: Boolean,
    revisionRespiraderosM2Ant: Boolean,
    revisionRespiraderosM2Post: Boolean,
    observacionesRr: String,

    revisionTornilloM1Ant: Boolean,
    revisionTornilloM1Post: Boolean,
    revisionTornilloM2Ant: Boolean,
    revisionTornilloM2Post: Boolean,
    observacionesRt: String,

    revisionPinionM1Ant: Boolean,
    revisionPinionM1Post: Boolean,
    revisionPinionM2Ant: Boolean,
    revisionPinionM2Post: Boolean,
    observacionesRp: String,

    revisionCoronaM1Ant: Boolean,
    revisionCoronaM1Post: Boolean,
    revisionCoronaM2Ant: Boolean,
    revisionCoronaM2Post: Boolean,
    observacionesRc: String,

    torqueTornilleriaM1Ant: Boolean,
    torqueTornilleriaM1Post: Boolean,
    torqueTornilleriaM2Ant: Boolean,
    torqueTornilleriaM2Post: Boolean,
    observacionesTt: String,

    revisionPaquetesM1Ant: Boolean,
    revisionPaquetesM1Post: Boolean,
    revisionPaquetesM2Ant: Boolean,
    revisionPaquetesM2Post: Boolean,
    observacionesRpg: String,

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
module.exports = mongoose.model('mmmaM38', mmmaM38Schema);