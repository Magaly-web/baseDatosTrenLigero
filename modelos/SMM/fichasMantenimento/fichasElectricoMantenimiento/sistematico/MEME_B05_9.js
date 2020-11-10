'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var memeB05_9Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    //MODULO DE BATERIAS TE-90 o TE-95
    v1_1: Number,
    v1_2: Number,
    v1_3: Number,
    v1_4: Number,
    v1_5: Number,
    v1_6: Number,
    v1_7: Number,
    v1_8: Number,
    v1_9: Number,
    n2_1: Boolean,
    n2_2: Boolean,
    n2_3: Boolean,
    n2_4: Boolean,
    n2_5: Boolean,
    n2_6: Boolean,
    n2_7: Boolean,
    n2_8: Boolean,
    n2_9: Boolean,
    d3_1: Number,
    d3_2: Number,
    d3_3: Number,
    d3_4: Number,
    d3_5: Number,
    d3_6: Number,
    d3_7: Number,
    d3_8: Number,
    d3_9: Number,
    v4_1: Number,
    v4_2: Number,
    v4_3: Number,
    v4_4: Number,
    v4_5: Number,
    v4_6: Number,
    v4_7: Number,
    v4_8: Number,
    v4_9: Number,
    n5_1: Boolean,
    n5_2: Boolean,
    n5_3: Boolean,
    n5_4: Boolean,
    n5_5: Boolean,
    n5_6: Boolean,
    n5_7: Boolean,
    n5_8: Boolean,
    n5_9: Boolean,
    d6_1: Number,
    d6_2: Number,
    d6_3: Number,
    d6_4: Number,
    d6_5: Number,
    d6_6: Number,
    d6_7: Number,
    d6_8: Number,
    d6_9: Number,
    
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
module.exports = mongoose.model('memeB05_9', memeB05_9Schema);