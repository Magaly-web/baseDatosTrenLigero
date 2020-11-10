'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM31_2Schema = Schema({//esquema de la estructura que va a tener el formulario
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
    limpiezaGralR: Boolean,
    limpiezaGralM2: Boolean,
    observacionesLg: String,

    desarmadoRevM1: Boolean,
    desarmadoRevR: Boolean,
    desarmadoRevM2: Boolean,
    observacionesDr: String,

    fugaAceiteM1: Boolean,
    fugaAceiteR: Boolean,
    fugaAceiteM2: Boolean,
    observacionesFa: String,

    vueltasTaponM1: Boolean,
    vueltasTaponR: Boolean,
    vueltasTaponM2: Boolean,
    observacionesVt: String,

    aplicacionLoctiteM1: Boolean,
    aplicacionLoctiteR: Boolean,
    aplicacionLoctiteM2: Boolean,
    observacionesAl: String,

    funcionamiento: String,
    ajustes: String,

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
module.exports = mongoose.model('mmmaM31_2', mmmaM31_2Schema);