'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM08Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    //MANTENIMIENTO DE FORROS LATERALES, UMBRALES Y ZOCLOS
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},
    operario3: { type: String, required: true},
    id_worker3: {type: String},
    operario4: { type: String, required: true},
    id_worker4: {type: String},
    operario5: { type: String, required: true},
    id_worker5: {type: String},
    operario6: { type: String, required: true},
    id_worker6: {type: String},
    operario7: { type: String, required: true},
    id_worker7: {type: String},

    descripcionAct: String,

    operario8: { type: String, required: true},
    id_worker8: {type: String},
    operario9: { type: String, required: true},
    id_worker9: {type: String},
    operario10: { type: String, required: true},
    id_worker10: {type: String},
    unidad: { type: Number, required: true },

    //M1 LADO DERECHO
    limpiezaForrosM1d_1: Boolean,
    limpiezaForrosM1d_2: Boolean,
    limpiezaForrosM1d_3: Boolean,
    limpiezaForrosM1d_4: Boolean,
    limpiezaForrosM1d_5: Boolean,
    limpiezaForrosM1d_6: Boolean,
    limpiezaForrosM1d_7: Boolean,
    limpiezaForrosM1d_8: Boolean,
    limpiezaForrosM1d_9: Boolean,
    observacionesLfm1d: String,

    revisarEstadoFM1d_1: Boolean,
    revisarEstadoFM1d_2: Boolean,
    revisarEstadoFM1d_3: Boolean,
    revisarEstadoFM1d_4: Boolean,
    revisarEstadoFM1d_5: Boolean,
    revisarEstadoFM1d_6: Boolean,
    revisarEstadoFM1d_7: Boolean,
    revisarEstadoFM1d_8: Boolean,
    revisarEstadoFM1d_9: Boolean,
    observacionesRefm1d: String,

    //M1 LADO IZQUIERDO
    limpiezaForrosM1i_1: Boolean,
    limpiezaForrosM1i_2: Boolean,
    limpiezaForrosM1i_3: Boolean,
    limpiezaForrosM1i_4: Boolean,
    limpiezaForrosM1i_5: Boolean,
    limpiezaForrosM1i_6: Boolean,
    limpiezaForrosM1i_7: Boolean,
    limpiezaForrosM1i_8: Boolean,
    limpiezaForrosM1i_9: Boolean,
    observacionesLfm1i: String,

    revisarEstadoFM1i_1: Boolean,
    revisarEstadoFM1i_2: Boolean,
    revisarEstadoFM1i_3: Boolean,
    revisarEstadoFM1i_4: Boolean,
    revisarEstadoFM1i_5: Boolean,
    revisarEstadoFM1i_6: Boolean,
    revisarEstadoFM1i_7: Boolean,
    revisarEstadoFM1i_8: Boolean,
    revisarEstadoFM1i_9: Boolean,
    observacionesRefm1i: String,

    //M2  LADO DERECHO
    limpiezaForrosM2d_1: Boolean,
    limpiezaForrosM2d_2: Boolean,
    limpiezaForrosM2d_3: Boolean,
    limpiezaForrosM2d_4: Boolean,
    limpiezaForrosM2d_5: Boolean,
    limpiezaForrosM2d_6: Boolean,
    limpiezaForrosM2d_7: Boolean,
    limpiezaForrosM2d_8: Boolean,
    limpiezaForrosM2d_9: Boolean,
    observacionesLfm2d: String,

    revisarEstadoFM2d_1: Boolean,
    revisarEstadoFM2d_2: Boolean,
    revisarEstadoFM2d_3: Boolean,
    revisarEstadoFM2d_4: Boolean,
    revisarEstadoFM2d_5: Boolean,
    revisarEstadoFM2d_6: Boolean,
    revisarEstadoFM2d_7: Boolean,
    revisarEstadoFM2d_8: Boolean,
    revisarEstadoFM2d_9: Boolean,
    observacionesRefm2d: String,

    //M2  LADO IZQUIERDO
    limpiezaForrosM2i_1: Boolean,
    limpiezaForrosM2i_2: Boolean,
    limpiezaForrosM2i_3: Boolean,
    limpiezaForrosM2i_4: Boolean,
    limpiezaForrosM2i_5: Boolean,
    limpiezaForrosM2i_6: Boolean,
    limpiezaForrosM2i_7: Boolean,
    limpiezaForrosM2i_8: Boolean,
    limpiezaForrosM2i_9: Boolean,
    observacionesLfm2i: String,

    revisarEstadoFM2i_1: Boolean,
    revisarEstadoFM2i_2: Boolean,
    revisarEstadoFM2i_3: Boolean,
    revisarEstadoFM2i_4: Boolean,
    revisarEstadoFM2i_5: Boolean,
    revisarEstadoFM2i_6: Boolean,
    revisarEstadoFM2i_7: Boolean,
    revisarEstadoFM2i_8: Boolean,
    revisarEstadoFM2i_9: Boolean,
    observacionesRefm2i: String,

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
module.exports = mongoose.model('mmmaM08', mmmaM08Schema);