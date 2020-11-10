'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM06Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    //MANTENIMEINTO DE INDICADOR DE DESTINO
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},
    operario3: { type: String, required: true},
    id_worker3: {type: String},

    descripcionAct: String,

    //1. DESMONTAJE DEL INDICADOR DE DESTINO
    operario4: { type: String, required: true},
    id_worker4: {type: String},
    operario5: { type: String, required: true},
    id_worker5: {type: String},

    retirarMm1: Boolean,
    retirarMm2: Boolean,
    observacionesRm: String,

    retirarTm1: Boolean,
    retirarTm2: Boolean,
    observacionesRt: String,

    aflojarRm1: Boolean,
    aflojarRm2: Boolean,
    observacionesAr: String,

    desmontarIm1: Boolean,
    desmontarIm2: Boolean,
    observacionesDi: String,

    //2. MANTENIMIENTO
    operario6: { type: String, required: true},
    id_worker6: {type: String},
    operario7: { type: String, required: true},
    id_worker7: {type: String},
    operario8: { type: String, required: true},
    id_worker8: {type: String},

    retirarTsLimp: Boolean,
    retirarTsRev: Boolean,
    retirarTsCamb: Boolean,
    observacionesRts: String,

    retirarMdLimp: Boolean,
    retirarMdRev: Boolean,
    retirarMdCamb: Boolean,
    observacionesRmd: String,

    retirarBLimp: Boolean,
    retirarBRev: Boolean,
    retirarBCamb: Boolean,
    observacionesRb: String,

    cadenasMLimp: Boolean,
    cadenasMRev: Boolean,
    cadenasMCamb: Boolean,
    observacionesCm: String,

    engranesLimp: Boolean,
    engranesRev: Boolean,
    engranesCamb: Boolean,
    observacionesE: String,

    resortesLimp: Boolean,
    resortesRev: Boolean,
    resortesCamb: Boolean,
    observacionesR: String,

    tornilleriaLimp: Boolean,
    tornilleriaRev: Boolean,
    tornilleriaCamb: Boolean,
    observacionesT: String,

    lijadoPm1: Boolean,
    lijadoPm2: Boolean,
    observacionesLp: String,

    aplicacionSm1: Boolean,
    aplicacionSm2: Boolean,
    observacionesAs: String,

    //3. MONTAJE INDICADOR DESTINO
    operario9: { type: String, required: true},
    id_worker9: {type: String},
    unidad: { type: Number, required: true },

    montarMm1: Boolean,
    montarMm2: Boolean,
    montarMfunc: Boolean,
    montarMajust: Boolean,
    observacionesMm: String,

    montarMDm1: Boolean,
    montarMDm2: Boolean,
    montarMDfunc: Boolean,
    montarMDajust: Boolean,
    observacionesMmd: String,

    montarIDm1: Boolean,
    montarIDm2: Boolean,
    montarIDfunc: Boolean,
    montarIDajust: Boolean,
    observacionesMid: String,

    colocarTm1: Boolean,
    colocarTm2: Boolean,
    colocarTfunc: Boolean,
    colocarTajust: Boolean,
    observacionesCt: String,

    colocarMRm1: Boolean,
    colocarMRm2: Boolean,
    colocarMRfunc: Boolean,
    colocarMRajust: Boolean,
    observacionesCmr: String,

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
module.exports = mongoose.model('mmmaM06', mmmaM06Schema);