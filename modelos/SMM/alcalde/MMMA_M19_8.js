'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM19_8Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    noSerie: { type: String },
    
    //PRUEBAS
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    limpiezaGral: Boolean,
    observacionesLg: String,

    desarmadoRev: Boolean,
    observacionesDr: String,

    pruebasFuncionamiento: Boolean,
    observacionesPf: String,

    revisionFugas: Boolean,
    observacionesRf: String,

    resultadoAjusteTE90A: Number,
    resultadoAjusteTE95A: Number,

    resultadoAjusteTE90B: Number,
    resultadoAjusteTE95B: Number,

    resultadoAjusteTE90C: Number,
    resultadoAjusteTE95C: Number,

    observaciones: String,

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
module.exports = mongoose.model('mmmaM19_8', mmmaM19_8Schema);