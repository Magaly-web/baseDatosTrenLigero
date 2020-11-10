'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM24Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    limpiezaGral: Boolean,
    observacionesLg: String,

    desarmadoRev: Boolean,
    observacionesDr: String,

    engrasado: Boolean,
    observacionesE: String,

    cambioKit: Boolean,
    observacionesCk: String,

    baleroInterior: String,
    baleroExterior: String,

    //RODAMIENTO INTERIOR
    grados0Int: String,
    grados90Int: String,
    grados180Int: String,
    grados270Int: String,
    
    //RODAMIENTO EXTERIOR
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
module.exports = mongoose.model('mmmaM24', mmmaM24Schema);