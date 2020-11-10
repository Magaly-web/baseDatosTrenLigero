'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM37Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    medicionCajaADm1_1: Boolean,
    medicionCajaADm1_2: Boolean,
    medicionCajaADm1_3: Boolean,
    medicionCajaADm1_4: Boolean,
    medicionCajaADr_5: Boolean,
    medicionCajaADr_6: Boolean,
    medicionCajaADr_7: Boolean,
    medicionCajaADr_8: Boolean,
    medicionCajaADm2_9: Boolean,
    medicionCajaADm2_10: Boolean,
    medicionCajaADm2_11: Boolean,
    medicionCajaADm2_12: Boolean,

    medicionCajaBCm1_1: Boolean,
    medicionCajaBCm1_2: Boolean,
    medicionCajaBCm1_3: Boolean,
    medicionCajaBCm1_4: Boolean,
    medicionCajaBCr_5: Boolean,
    medicionCajaBCr_6: Boolean,
    medicionCajaBCr_7: Boolean,
    medicionCajaBCr_8: Boolean,
    medicionCajaBCm2_9: Boolean,
    medicionCajaBCm2_10: Boolean,
    medicionCajaBCm2_11: Boolean,
    medicionCajaBCm2_12: Boolean,

    rodamientosCambM1_1: Boolean,
    rodamientosCambM1_2: Boolean,
    rodamientosCambM1_3: Boolean,
    rodamientosCambM1_4: Boolean,
    rodamientosCambR_5: Boolean,
    rodamientosCambR_6: Boolean,
    rodamientosCambR_7: Boolean,
    rodamientosCambR_8: Boolean,
    rodamientosCambM2_9: Boolean,
    rodamientosCambM2_10: Boolean,
    rodamientosCambM2_11: Boolean,
    rodamientosCambM2_12: Boolean,
    
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
module.exports = mongoose.model('mmmaM37', mmmaM37Schema);