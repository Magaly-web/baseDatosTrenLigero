'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM02Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },

    //1. DESMONTAJE FILTROS DE ADMISION DE AIRE
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},

    retirarTFm1: Boolean,
    retirarTFm2: Boolean,
    observacionesRt: String,

    desmontajeFFm1: Boolean,
    desmontajeFFm2: Boolean,
    observacionesDf: String,

    //2. MANTENIMIENTO A FILTROS DE ADMISION DE AIRE
    operario3: { type: String, required: true},
    id_worker3: {type: String},
    operario4: { type: String, required: true},
    id_worker4: {type: String},
    operario5: { type: String, required: true},
    id_worker5: {type: String},

    sopleteadoMFm1: Boolean,
    sopleteadoMFm2: Boolean,
    observacionesSm: String,

    asentadoPFm1: Boolean,
    asentadoPFm2: Boolean,
    observacionesAp: String,

    limpiezaFm1: Boolean,
    limpiezaFm2: Boolean,
    observacionesLimp: String,

    empapeladoMFm1: Boolean,
    empapeladoMFm2: Boolean,
    observacionesEm: String,

    recuperacionDFm1: Boolean,
    recuperacionDFm2: Boolean,
    observacionesRd: String,

    aplicacionSpFm1: Boolean,
    aplicacionSpFm2: Boolean,
    observacionesAsp: String,

    //3. MONTAJE DE FILTROS DE ADMISION DE AIRE
    operario6: { type: String, required: true},
    id_worker6: {type: String},
    operario7: { type: String, required: true},
    id_worker7: {type: String},
    unidad: { type: Number, required: true },

    montajeFm1: Boolean,
    montajeFm2: Boolean,
    observacionesM: String,

    colocarSFm1: Boolean,
    colocarSFm2: Boolean,
    observacionesCs: String,

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
module.exports = mongoose.model('mmmaM02', mmmaM02Schema);