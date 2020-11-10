'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM18_15Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    caudal8: String,
    caudal8giro: String,

    caudal10: String,
    caudal10giro: String,

    //PRUEBAS DE FASES DE MOTOR SIN CARGA
    motorSinCargaF1Ro: String,
    motorSinCargaF1Ct: String,
    observacionesMscF1: String,

    motorSinCargaF2Ro: String,
    motorSinCargaF2Ct: String,
    observacionesMscF2: String,

    motorSinCargaF3Ro: String,
    motorSinCargaF3Ct: String,
    observacionesMscF3: String,

    motorSinCargaRpmRo: String,
    motorSinCargaRpmCt: String,
    observacionesMscRpm: String,

    //PRUEBAS DE FASES DE MOTOR CON CARGA
    motorConCargaF1Ro: String,
    motorConCargaF1Ct: String,
    observacionesMccF1: String,

    motorConCargaF2Ro: String,
    motorConCargaF2Ct: String,
    observacionesMccF2: String,

    motorConCargaF3Ro: String,
    motorConCargaF3Ct: String,
    observacionesMccF3: String,

    motorConCargaRpmRo: String,
    motorConCargaRpmCt: String,
    observacionesMccRpm: String,

    observaciones: String,

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
module.exports = mongoose.model('mmmaM18_15', mmmaM18_15Schema);