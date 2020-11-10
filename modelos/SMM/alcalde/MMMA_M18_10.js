'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM18_10Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    noSerie: { type: String },
    
    //MOTOR
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    cuerpoR: Boolean,
    cuerpoL: Boolean,
    cuerpoE: Boolean,
    cuerpoC: Boolean,
    observacionesC: String,

    rotorR: Boolean,
    rotorL: Boolean,
    rotorE: Boolean,
    rotorC: Boolean,
    observacionesR: String,

    estatorR: Boolean,
    estatorL: Boolean,
    estatorE: Boolean,
    estatorC: Boolean,
    observacionesE: String,

    lineasElectricasR: Boolean,
    lineasElectricasL: Boolean,
    lineasElectricasE: Boolean,
    lineasElectricasC: Boolean,
    observacionesLe: String,

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
module.exports = mongoose.model('mmmaM18_10', mmmaM18_10Schema);