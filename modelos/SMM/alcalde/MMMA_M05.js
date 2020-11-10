'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM05Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    //1. MANTENIMEINTO A PUERTA PARED DIVISORA
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},

    descripcionAct: String,

    //1. DESMONTAJE DE PUERTA PARED DIVISORA
    operario3: { type: String, required: true},
    id_worker3: {type: String},
    operario4: { type: String, required: true},
    id_worker4: {type: String},

    quitarTm1: Boolean,
    quitarTm2: Boolean,
    observacionesQt: String,

    aflojarRm1: Boolean,
    aflojarRm2: Boolean,
    observacionesAr: String,

    desmontarPm1: Boolean,
    desmontarPm2: Boolean,
    observacionesDp: String,

    //2. MANTENIMIENTO DE PUERTA PARED DIVISORA
    operario5: { type: String, required: true},
    id_worker5: {type: String},
    operario6: { type: String, required: true},
    id_worker6: {type: String},
    operario7: { type: String, required: true},
    id_worker7: {type: String},

    aflojarRTBM1: Boolean,
    aflojarRTBM2: Boolean,
    observacionesArtb: String,

    aflojarRTCHM1: Boolean,
    aflojarRTCHM2: Boolean,
    observacionesArtch: String,

    aflojarRTCM1: Boolean,
    aflojarRTCM2: Boolean,
    observacionesArtc: String,

    desarmadoM1: Boolean,
    desarmadoM2: Boolean,
    observacionesD: String,

    preparacionAM1: Boolean,
    preparacionAM2: Boolean,
    observacionesPa: String,

    desarmadoLM1: Boolean,
    desarmadoLM2: Boolean,
    observacionesDl: String,

    reparacionBM1: Boolean,
    reparacionBM2: Boolean,
    observacionesRb: String,

    limpiezaFM1: Boolean,
    limpiezaFM2: Boolean,
    observacionesLf: String,

    montajeCHM1: Boolean,
    montajeCHM2: Boolean,
    observacionesMch: String,

    montajeCM1: Boolean,
    montajeCM2: Boolean,
    observacionesMc: String,

    //3. MONTAJE DE PUERTA PARED DIVISORA
    operario8: { type: String, required: true},
    id_worker8: {type: String},
    unidad: { type: Number, required: true },

    montarPm1: Boolean,
    montarPm2: Boolean,
    observacionesMp: String,
    
    colocarPm1: Boolean,
    colocarPm2: Boolean,
    observacionesCp: String,

    aplicarTm1: Boolean,
    aplicarTm2: Boolean,
    observacionesAt: String,

    ajustarPm1: Boolean,
    ajustarPm2: Boolean,
    observacionesAp: String,

    ajustarCm1: Boolean,
    ajustarCm2: Boolean,
    observacionesAc: String,

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
module.exports = mongoose.model('mmmaM05', mmmaM05Schema);