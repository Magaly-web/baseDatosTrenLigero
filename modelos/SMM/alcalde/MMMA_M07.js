'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM07Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    //MANTENIMEINTO DE FORROS DE TECHO Y MOLDURAS
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},
    operario3: { type: String, required: true},
    id_worker3: {type: String},

    descripcionAct: String,

    operario4: { type: String, required: true},
    id_worker4: {type: String},
    operario5: { type: String, required: true},
    id_worker5: {type: String},
    unidad: { type: Number, required: true },

    //FORROS
    limpiezaFm1_1: Boolean,
    limpiezaFm1_2: Boolean,
    limpiezaFm1_3: Boolean,
    limpiezaFm1_4: Boolean,
    limpiezaFm2_1: Boolean,
    limpiezaFm2_2: Boolean,
    limpiezaFm2_3: Boolean,
    limpiezaFm2_4: Boolean,
    observacionesLf: String,

    revisarEm1_1: Boolean,
    revisarEm1_2: Boolean,
    revisarEm1_3: Boolean,
    revisarEm1_4: Boolean,
    revisarEm2_1: Boolean,
    revisarEm2_2: Boolean,
    revisarEm2_3: Boolean,
    revisarEm2_4: Boolean,
    observacionesRe: String,

    revisarZm1_1: Boolean,
    revisarZm1_2: Boolean,
    revisarZm1_3: Boolean,
    revisarZm1_4: Boolean,
    revisarZm2_1: Boolean,
    revisarZm2_2: Boolean,
    revisarZm2_3: Boolean,
    revisarZm2_4: Boolean,
    observacionesRz: String,

    aplicarSm1_1: Boolean,
    aplicarSm1_2: Boolean,
    aplicarSm1_3: Boolean,
    aplicarSm1_4: Boolean,
    aplicarSm2_1: Boolean,
    aplicarSm2_2: Boolean,
    aplicarSm2_3: Boolean,
    aplicarSm2_4: Boolean,
    observacionesAs: String,

    //MOLDURAS
    limpiezaMm1_1: Boolean,
    limpiezaMm1_2d: Boolean,
    limpiezaMm1_2i: Boolean,
    limpiezaMm1_3d: Boolean,
    limpiezaMm1_3i: Boolean,
    limpiezaMm1_4d: Boolean,
    limpiezaMm1_4i: Boolean,
    limpiezaMm1_5: Boolean,
    limpiezaMm1_Ld: Boolean,
    limpiezaMm1_Li: Boolean,
    limpiezaMm2_1: Boolean,
    limpiezaMm2_2d: Boolean,
    limpiezaMm2_2i: Boolean,
    limpiezaMm2_3d: Boolean,
    limpiezaMm2_3i: Boolean,
    limpiezaMm2_4d: Boolean,
    limpiezaMm2_4i: Boolean,
    limpiezaMm2_5: Boolean,
    limpiezaMm2_Ld: Boolean,
    limpiezaMm2_Li: Boolean,
    observacionesLm: String,

    revisarEstadoMm1_1: Boolean,
    revisarEstadoMm1_2d: Boolean,
    revisarEstadoMm1_2i: Boolean,
    revisarEstadoMm1_3d: Boolean,
    revisarEstadoMm1_3i: Boolean,
    revisarEstadoMm1_4d: Boolean,
    revisarEstadoMm1_4i: Boolean,
    revisarEstadoMm1_5: Boolean,
    revisarEstadoMm1_Ld: Boolean,
    revisarEstadoMm1_Li: Boolean,
    revisarEstadoMm2_1: Boolean,
    revisarEstadoMm2_2d: Boolean,
    revisarEstadoMm2_2i: Boolean,
    revisarEstadoMm2_3d: Boolean,
    revisarEstadoMm2_3i: Boolean,
    revisarEstadoMm2_4d: Boolean,
    revisarEstadoMm2_4i: Boolean,
    revisarEstadoMm2_5: Boolean,
    revisarEstadoMm2_Ld: Boolean,
    revisarEstadoMm2_Li: Boolean,
    observacionesRem: String,

    revisarElementosFm1_1: Boolean,
    revisarElementosFm1_2d: Boolean,
    revisarElementosFm1_2i: Boolean,
    revisarElementosFm1_3d: Boolean,
    revisarElementosFm1_3i: Boolean,
    revisarElementosFm1_4d: Boolean,
    revisarElementosFm1_4i: Boolean,
    revisarElementosFm1_5: Boolean,
    revisarElementosFm1_Ld: Boolean,
    revisarElementosFm1_Li: Boolean,
    revisarElementosFm2_1: Boolean,
    revisarElementosFm2_2d: Boolean,
    revisarElementosFm2_2i: Boolean,
    revisarElementosFm2_3d: Boolean,
    revisarElementosFm2_3i: Boolean,
    revisarElementosFm2_4d: Boolean,
    revisarElementosFm2_4i: Boolean,
    revisarElementosFm2_5: Boolean,
    revisarElementosFm2_Ld: Boolean,
    revisarElementosFm2_Li: Boolean,
    observacionesRef: String,

    aplicarSelladorFm1_1: Boolean,
    aplicarSelladorFm1_2d: Boolean,
    aplicarSelladorFm1_2i: Boolean,
    aplicarSelladorFm1_3d: Boolean,
    aplicarSelladorFm1_3i: Boolean,
    aplicarSelladorFm1_4d: Boolean,
    aplicarSelladorFm1_4i: Boolean,
    aplicarSelladorFm1_5: Boolean,
    aplicarSelladorFm1_Ld: Boolean,
    aplicarSelladorFm1_Li: Boolean,
    aplicarSelladorFm2_1: Boolean,
    aplicarSelladorFm2_2d: Boolean,
    aplicarSelladorFm2_2i: Boolean,
    aplicarSelladorFm2_3d: Boolean,
    aplicarSelladorFm2_3i: Boolean,
    aplicarSelladorFm2_4d: Boolean,
    aplicarSelladorFm2_4i: Boolean,
    aplicarSelladorFm2_5: Boolean,
    aplicarSelladorFm2_Ld: Boolean,
    aplicarSelladorFm2_Li: Boolean,
    observacionesAsf: String,

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
module.exports = mongoose.model('mmmaM07', mmmaM07Schema);