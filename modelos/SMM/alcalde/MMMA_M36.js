'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM36Schema = Schema({//esquema de la estructura que va a tener el formulario
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
    limpiezaGralM2: Boolean,
    observacionesLg: String,

    desarmadoRevM1: Boolean,
    desarmadoRevM2: Boolean,
    observacionesDr: String,

    engrasadoM1: Boolean,
    engrasadoM2: Boolean,
    observacionesE: String,

    noBalasM1: Boolean,
    noBalasM2: Boolean,
    observacionesNb: String,

    //MOTRIZ 1
    grados0Int: String,
    grados90Int: String,
    grados180Int: String,
    grados270Int: String,
    
    //MOTRIZ 2
    grados0Ext: String,
    grados90Ext: String,
    grados180Ext: String,
    grados270Ext: String,

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
module.exports = mongoose.model('mmmaM36', mmmaM36Schema);