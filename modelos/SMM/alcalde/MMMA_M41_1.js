'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM41_1Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    cursorRevM1_1: Boolean,
    cursorRevM1_2: Boolean,
    cursorRevR_3: Boolean,
    cursorRevR_4: Boolean,
    cursorRevM2_5: Boolean,
    cursorRevM2_6: Boolean,
    observacionesCrev: String,

    cursorLimpM1_1: Boolean,
    cursorLimpM1_2: Boolean,
    cursorLimpR_3: Boolean,
    cursorLimpR_4: Boolean,
    cursorLimpM2_5: Boolean,
    cursorLimpM2_6: Boolean,
    observacionesClimp: String,

    cursorEngM1_1: Boolean,
    cursorEngM1_2: Boolean,
    cursorEngR_3: Boolean,
    cursorEngR_4: Boolean,
    cursorEngM2_5: Boolean,
    cursorEngM2_6: Boolean,
    observacionesCeng: String,

    tapaRevM1_1: Boolean,
    tapaRevM1_2: Boolean,
    tapaRevR_3: Boolean,
    tapaRevR_4: Boolean,
    tapaRevM2_5: Boolean,
    tapaRevM2_6: Boolean,
    observacionesTapaRev: String,

    tapaLimpM1_1: Boolean,
    tapaLimpM1_2: Boolean,
    tapaLimpR_3: Boolean,
    tapaLimpR_4: Boolean,
    tapaLimpM2_5: Boolean,
    tapaLimpM2_6: Boolean,
    observacionesTapaLimp: String,

    cajaRevM1_1: Boolean,
    cajaRevM1_2: Boolean,
    cajaRevR_3: Boolean,
    cajaRevR_4: Boolean,
    cajaRevM2_5: Boolean,
    cajaRevM2_6: Boolean,
    observacionesCajaRev: String,

    cajaLimpM1_1: Boolean,
    cajaLimpM1_2: Boolean,
    cajaLimpR_3: Boolean,
    cajaLimpR_4: Boolean,
    cajaLimpM2_5: Boolean,
    cajaLimpM2_6: Boolean,
    observacionesCajaLimp: String,

    tornilleriaRevM1_1: Boolean,
    tornilleriaRevM1_2: Boolean,
    tornilleriaRevR_3: Boolean,
    tornilleriaRevR_4: Boolean,
    tornilleriaRevM2_5: Boolean,
    tornilleriaRevM2_6: Boolean,
    observacionesTrev: String,

    tornilleriaLimpM1_1: Boolean,
    tornilleriaLimpM1_2: Boolean,
    tornilleriaLimpR_3: Boolean,
    tornilleriaLimpR_4: Boolean,
    tornilleriaLimpM2_5: Boolean,
    tornilleriaLimpM2_6: Boolean,
    observacionesTlimp: String,

    tornilleriaEngM1_1: Boolean,
    tornilleriaEngM1_2: Boolean,
    tornilleriaEngR_3: Boolean,
    tornilleriaEngR_4: Boolean,
    tornilleriaEngM2_5: Boolean,
    tornilleriaEngM2_6: Boolean,
    observacionesTeng: String,

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
module.exports = mongoose.model('mmmaM41_1', mmmaM41_1Schema);