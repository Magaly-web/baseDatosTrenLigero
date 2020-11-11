'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC05Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    asientoDm1Rev: Boolean,
    asientoDm1Limp: Boolean,
    asientoDm1Apriete: Boolean,
    asientoDm2Rev: Boolean,
    asientoDm2Limp: Boolean,
    asientoDm2Apriete: Boolean,

    asientoSm1Rev: Boolean,
    asientoSm1Limp: Boolean,
    asientoSm1Apriete: Boolean,
    asientoSm2Rev: Boolean,
    asientoSm2Limp: Boolean,
    asientoSm2Apriete: Boolean,

    tubom1Rev: Boolean,
    tubom1Limp: Boolean,
    tubom1Apriete: Boolean,
    tubom2Rev: Boolean,
    tubom2Limp: Boolean,
    tubom2Apriete: Boolean,

    estructuram1Rev: Boolean,
    estructuram1Limp: Boolean,
    estructuram2Rev: Boolean,
    estructuram2Limp: Boolean,

    tornilloM6m1Rev: Boolean,
    tornilloM6m1Limp: Boolean,
    tornilloM6m1Apriete: Boolean,
    tornilloM6m2Rev: Boolean,
    tornilloM6m2Limp: Boolean,
    tornilloM6m2Apriete: Boolean,

    tornilloM12m1Rev: Boolean,
    tornilloM12m1Limp: Boolean,
    tornilloM12m1Apriete: Boolean,
    tornilloM12m2Rev: Boolean,
    tornilloM12m2Limp: Boolean,
    tornilloM12m2Apriete: Boolean,

    //TORNILLERIA DE PASAMANOS
    tornillosM1revE: Boolean,
    tornillosM1apriete: Boolean,
    tornillosM1cambT: Boolean,
    tornillosM1revP: Boolean,

    tornillosM2revE: Boolean,
    tornillosM2apriete: Boolean,
    tornillosM2cambT: Boolean,
    tornillosM2revP: Boolean,

    tornilloscM1revE: Boolean,
    tornilloscM1apriete: Boolean,
    tornilloscM1cambT: Boolean,
    tornilloscM1revP: Boolean,

    tornilloscM2revE: Boolean,
    tornilloscM2apriete: Boolean,
    tornilloscM2cambT: Boolean,
    tornilloscM2revP: Boolean,
    
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
module.exports = mongoose.model('mmmeC05', mmmeC05Schema);