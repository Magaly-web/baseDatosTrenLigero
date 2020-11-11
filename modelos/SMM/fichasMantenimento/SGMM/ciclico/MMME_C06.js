'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC06Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    revisionUem1_1: Boolean,
    revisionUem1_2: Boolean,
    revisionUem1_3: Boolean,
    revisionUem2_1: Boolean,
    revisionUem2_2: Boolean,
    revisionUem2_3: Boolean,
    revisionUim1_1: Boolean,
    revisionUim1_2: Boolean,
    revisionUim1_3: Boolean,
    revisionUim2_1: Boolean,
    revisionUim2_2: Boolean,
    revisionUim2_3: Boolean,
    revisionTm1_1: Boolean,
    revisionTm1_2: Boolean,
    revisionTm1_3: Boolean,
    revisionTm2_1: Boolean,
    revisionTm2_2: Boolean,
    revisionTm2_3: Boolean,
    observacionesR: String,

    limpiezaUem1_1: Boolean,
    limpiezaUem1_2: Boolean,
    limpiezaUem1_3: Boolean,
    limpiezaUem2_1: Boolean,
    limpiezaUem2_2: Boolean,
    limpiezaUem2_3: Boolean,
    limpiezaUim1_1: Boolean,
    limpiezaUim1_2: Boolean,
    limpiezaUim1_3: Boolean,
    limpiezaUim2_1: Boolean,
    limpiezaUim2_2: Boolean,
    limpiezaUim2_3: Boolean,
    limpiezaTm1_1: Boolean,
    limpiezaTm1_2: Boolean,
    limpiezaTm1_3: Boolean,
    limpiezaTm2_1: Boolean,
    limpiezaTm2_2: Boolean,
    limpiezaTm2_3: Boolean,
    observacionesL: String,

    selladoUem1_1: Boolean,
    selladoUem1_2: Boolean,
    selladoUem1_3: Boolean,
    selladoUem2_1: Boolean,
    selladoUem2_2: Boolean,
    selladoUem2_3: Boolean,
    selladoUim1_1: Boolean,
    selladoUim1_2: Boolean,
    selladoUim1_3: Boolean,
    selladoUim2_1: Boolean,
    selladoUim2_2: Boolean,
    selladoUim2_3: Boolean,
    selladoTm1_1: Boolean,
    selladoTm1_2: Boolean,
    selladoTm1_3: Boolean,
    selladoTm2_1: Boolean,
    selladoTm2_2: Boolean,
    selladoTm2_3: Boolean,
    observacionesS: String,

    aplicacionUem1_1: Boolean,
    aplicacionUem1_2: Boolean,
    aplicacionUem1_3: Boolean,
    aplicacionUem2_1: Boolean,
    aplicacionUem2_2: Boolean,
    aplicacionUem2_3: Boolean,
    observacionesA: String,

    recuperacionUem1_1: Boolean,
    recuperacionUem1_2: Boolean,
    recuperacionUem1_3: Boolean,
    recuperacionUem2_1: Boolean,
    recuperacionUem2_2: Boolean,
    recuperacionUem2_3: Boolean,
    observacionesRec: String,

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
module.exports = mongoose.model('mmmeC06', mmmeC06Schema);