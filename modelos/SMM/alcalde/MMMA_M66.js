'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM66Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    noSerie2: String,

    bastidorLav: Boolean,
    bastidorLimp: Boolean,
    bastidorRevFuga: Boolean,
    bastidorVer: Boolean,
    observacionesB: String,

    recipienteFiltradoLav: Boolean,
    recipienteFiltradoLimp: Boolean,
    recipienteFiltradoRevFuga: Boolean,
    recipienteFiltradoVer: Boolean,
    observacionesRf: String,

    cuerpoSecadorLav: Boolean,
    cuerpoSecadorLimp: Boolean,
    cuerpoSecadorRevFuga: Boolean,
    cuerpoSecadorVer: Boolean,
    observacionesCs: String,

    valvulaCheckLav: Boolean,
    valvulaCheckLimp: Boolean,
    valvulaCheckRevFuga: Boolean,
    valvulaCheckVer: Boolean,
    observacionesVch: String,

    tanqueRegeneracionLav: Boolean,
    tanqueRegeneracionLimp: Boolean,
    tanqueRegeneracionRevFuga: Boolean,
    tanqueRegeneracionVer: Boolean,
    observacionesTr: String,

    filtroLav: Boolean,
    filtroLimp: Boolean,
    filtroRevFuga: Boolean,
    filtroVer: Boolean,
    observacionesF: String,

    silenciadorLav: Boolean,
    silenciadorLimp: Boolean,
    silenciadorRevFuga: Boolean,
    silenciadorVer: Boolean,
    observacionesS: String,

    valvulaDectair6Rev: Boolean,
    valvulaDectair6Limp: Boolean,
    valvulaDectair6Lub: Boolean,
    valvulaDectair6CambKit: Boolean,
    observacionesVd: String,

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
module.exports = mongoose.model('mmmaM66', mmmaM66Schema);