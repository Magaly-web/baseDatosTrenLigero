'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC18Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},
    operario3: { type: String, required: true},
    id_worker3: {type: String},
    operario4: { type: String, required: true},
    id_worker4: {type: String},
    unidad: { type: Number, required: true },

    noRedAntM1: Number,
    noRedPostM1: Number,
    noRedAntM2: Number,
    noRedPostM2: Number,

    drenadoM1Ant: Boolean,
    drenadoM1Post: Boolean,
    drenadoM2Ant: Boolean,
    drenadoM2Post: Boolean,

    lavadoM1Ant: Boolean,
    lavadoM1Post: Boolean,
    lavadoM2Ant: Boolean,
    lavadoM2Post: Boolean,

    llenadoM1Ant: Boolean,
    llenadoM1Post: Boolean,
    llenadoM2Ant: Boolean,
    llenadoM2Post: Boolean,

    revisionM1Ant: Boolean,
    revisionM1Post: Boolean,
    revisionM2Ant: Boolean,
    revisionM2Post: Boolean,

    par75M1Ant: Boolean,
    par75M1Post: Boolean,
    par75M2Ant: Boolean,
    par75M2Post: Boolean,

    par180M1Ant: Boolean,
    par180M1Post: Boolean,
    par180M2Ant: Boolean,
    par180M2Post: Boolean,

    revisionPM1Ant: Boolean,
    revisionPM1Post: Boolean,
    revisionPM2Ant: Boolean,
    revisionPM2Post: Boolean,

    aceiteTE90_TE95M1Ant: String,
    aceiteTE90_TE95M1Post: String,
    aceiteTE90_TE95M2Ant: String,
    aceiteTE90_TE95M2Post: String,

    aceiteTE06M1Ant: String,
    aceiteTE06M1Post: String,
    aceiteTE06M2Ant: String,
    aceiteTE06M2Post: String,

    observaciones: String,

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
module.exports = mongoose.model('mmmeC18', mmmeC18Schema);