'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var memeB05_612Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    cofre1Limp:Boolean,
    cofre1Rev: Boolean,
    
    pestillosLimp:Boolean,
    pestillosRev: Boolean,
    pestillosAp: Boolean,
    pestillosLub: Boolean,
    pestillosAj: Boolean,
    
    bisagrasLimp:Boolean,
    bisagrasRev: Boolean,
    bisagrasLub: Boolean,

    tapasLimp:Boolean,
    tapasRev: Boolean,

    selloLimp:Boolean,
    selloRev: Boolean,
    
    cfmLimp:Boolean,
    cfmRev: Boolean,
    cfmAp: Boolean,
    
    conectoresLimp:Boolean,
    conectoresRev: Boolean,
    conectoresAp: Boolean,

    gYfLimp:Boolean,
    gYfRev: Boolean,
    gYfAp: Boolean,
    
    dYgLimp:Boolean,
    dYgRev: Boolean,
    dYgAp: Boolean,
    
    iYcLimp:Boolean,
    iYcRev: Boolean,
    iYcAp: Boolean,
    
    cYrLimp:Boolean,
    cYrRev: Boolean,
    cYrAp: Boolean,
    
    modulosLimp:Boolean,
    modulosRev: Boolean,
    modulosAp: Boolean,
    
    relevadorLimp:Boolean,
    relevadorRev: Boolean,
    relevadorAp: Boolean,
    
    selectorLimp:Boolean,
    selectorRev: Boolean,
    selectorAp: Boolean,
    
    arnesesLimp:Boolean,
    arnesesRev: Boolean,
    arnesesAp: Boolean,

    //parte2
    cofre2Limp:Boolean,
    cofre2Rev: Boolean,
    
    tapasPLimp:Boolean,
    tapasPRev: Boolean,
    tapasPLub: Boolean,
    
    tapasBLimp:Boolean,
    tapasBRev: Boolean,

    tapasTapLimp:Boolean,
    tapasTapRev: Boolean,
    
    tapasTLimp:Boolean,
    tapasTRev: Boolean,
    tapasTAp: Boolean,
    tapasTLub: Boolean,
    tapasTAj: Boolean,
    
    tapasSLimp:Boolean,
    tapasSRev: Boolean,
    
    tapasALimp:Boolean,
    tapasARev: Boolean,
    tapasAAp: Boolean,
    
    ktbLimp:Boolean,
    ktbRev: Boolean,
    ktbAp: Boolean,
    
    iabLimp:Boolean,
    iabRev: Boolean,
    iabAp: Boolean,
    
    fbb1Limp:Boolean,
    fbb1Rev: Boolean,
    fbb1Ap: Boolean,
    
    bcLimp:Boolean,
    bcRev: Boolean,
    bcAp: Boolean,
    
    tuercasLimp:Boolean,
    tuercasRev: Boolean,
    tuercasAp: Boolean,

    birlosLimp:Boolean,
    birlosRev: Boolean,
    birlosAp: Boolean,
    
    rondanasLimp:Boolean,
    rondanasRev: Boolean,
    
    correderasLimp:Boolean,
    correderasRev: Boolean,

    //MODULO DE BATERIAS TE-06 o TE-12
    v1: Number,
    n1: Boolean,
    d1: Number,
    v2: Number,
    n2: Boolean,
    d2: Number,
    v3: Number,
    n3: Boolean,
    d3: Number,
    v4: Number,
    n4: Boolean,
    d4: Number,
    v5: Number,
    n5: Boolean,
    d5: Number,
    v6: Number,
    n6: Boolean,
    d6: Number,
    v7: Number,
    n7: Boolean,
    d7: Number,
    v8: Number,
    n8: Boolean,
    d8: Number,
    v9: Number,
    n9: Boolean,
    d9: Number,
    v10: Number,
    n10: Boolean,
    d10: Number,
    v11: Number,
    n11: Boolean,
    d11: Number,
    v12: Number,
    n12: Boolean,
    d12: Number,
    v13: Number,
    n13: Boolean,
    d13: Number,
    v14: Number,
    n14: Boolean,
    d14: Number,
    v15: Number,
    n15: Boolean,
    d15: Number,
    v16: Number,
    n16: Boolean,
    d16: Number,
    v17: Number,
    n17: Boolean,
    d17: Number,
    v18: Number,
    n18: Boolean,
    d18: Number,
    
    voltajeSinRegular: Number,
    voltajeRegulado: Number,
    
    //COFRE 3
    cofre3Limp:Boolean,
    cofre3Rev: Boolean,
    
    pestillos3Limp:Boolean,
    pestillos3Rev: Boolean,
    pestillos3Ap: Boolean,
    pestillos3Lub: Boolean,
    pestillos3Aj: Boolean,

    bisagras3Limp:Boolean,
    bisagras3Rev: Boolean,
    bisagras3Lub: Boolean,
    
    tapas3Limp:Boolean,
    tapas3Rev: Boolean,
    
    sello3Limp:Boolean,
    sello3Rev: Boolean,
    
    conectorLimp:Boolean,
    conectorRev: Boolean,
    conectorAp: Boolean,

    gfbLimp:Boolean,
    gfbRev: Boolean,
    gfbAp: Boolean,
    
    relevadoresLimp:Boolean,
    relevadoresRev: Boolean,
    relevadoresAp: Boolean,
    
    arneses3Limp:Boolean,
    arneses3Rev: Boolean,

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
module.exports = mongoose.model('memeB05_612', memeB05_612Schema);