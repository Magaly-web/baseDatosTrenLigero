'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM43Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    noSerie:{ type: String },
    
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    //INSPECCION INICIAL
    limpiezaGral: Boolean,
    observacionesLg: String,
    
    fugaAire: Boolean,
    observacionesFa: String,

    revCarcaza: Boolean,
    observacionesRc: String,

    distanciaTapaEmbolo: Boolean,
    observacionesDte: String,

    distanciaTapaAnillo: Boolean,
    observacionesDta: String,

    medidaAnillo: Boolean,
    observacionesMa: String,

    observaciones1: String,

    //PRUEBAS DESARROLLADAS AL CILINDRO DE FRENO
    hermeticidadCilindro: Boolean,
    observacionesHc: String,

    frenoServicio: Boolean,
    observacionesFs: String,

    cilindroMuelle: Boolean,
    observacionesCm: String,

    depositoProceso: Boolean,
    observacionesDp: String,

    //MEDIDAD DE CARCAZA
    a_b: String,
    c_d: String,
    estadoGuarnicion: String,
    estadoCuerpoC: String,

    observaciones2: String,

    palancaVastRev: Boolean,
    palancaVastLimp: Boolean,
    palancaVastEng: Boolean,
    palancaVastCamb: Boolean,
    observacionesPv: String,

    casquillosRev: Boolean,
    casquillosLimp: Boolean,
    casquillosEng: Boolean,
    casquillosCamb: Boolean,
    observacionesC: String,

    palancaPuntoRev: Boolean,
    palancaPuntoLimp: Boolean,
    palancaPuntoEng: Boolean,
    palancaPuntoCamb: Boolean,
    observacionesPp: String,

    casquillos2Rev: Boolean,
    casquillos2Limp: Boolean,
    casquillos2Eng: Boolean,
    casquillos2Camb: Boolean,
    observacionesC2: String,

    portazapatasRev: Boolean,
    portazapatasLimp: Boolean,
    portazapatasEng: Boolean,
    portazapatasCamb: Boolean,
    observacionesP: String,

    barraTraccionRev: Boolean,
    barraTraccionLimp: Boolean,
    barraTraccionEng: Boolean,
    barraTraccionCamb: Boolean,
    observacionesBt: String,

    casquillos3Rev: Boolean,
    casquillos3Limp: Boolean,
    casquillos3Eng: Boolean,
    casquillos3Camb: Boolean,
    observacionesC3: String,

    zapatasRev: Boolean,
    zapatasLimp: Boolean,
    zapatasEng: Boolean,
    zapatasCamb: Boolean,
    observacionesZ: String,

    bridaColganteRev: Boolean,
    bridaColganteLimp: Boolean,
    bridaColganteEng: Boolean,
    bridaColganteCamb: Boolean,
    observacionesBc: String,

    casquillos4Rev: Boolean,
    casquillos4Limp: Boolean,
    casquillos4Eng: Boolean,
    casquillos4Camb: Boolean,
    observacionesC4: String,

    soporteRev: Boolean,
    soporteLimp: Boolean,
    soporteEng: Boolean,
    soporteCamb: Boolean,
    observacionesS: String,

    bulonRev: Boolean,
    bulonLimp: Boolean,
    bulonEng: Boolean,
    bulonCamb: Boolean,
    observacionesB: String,

    chapaSeguridadRev: Boolean,
    chapaSeguridadLimp: Boolean,
    chapaSeguridadEng: Boolean,
    chapaSeguridadCamb: Boolean,
    observacionesChs: String,

    pasadoresChavetasRev: Boolean,
    pasadoresChavetasLimp: Boolean,
    pasadoresChavetasEng: Boolean,
    pasadoresChavetasCamb: Boolean,
    observacionesPch: String,

    tornilloPivoteRev: Boolean,
    tornilloPivoteLimp: Boolean,
    tornilloPivoteEng: Boolean,
    tornilloPivoteCamb: Boolean,
    observacionesTp: String,

    arandelaSegRev: Boolean,
    arandelaSegLimp: Boolean,
    arandelaSegEng: Boolean,
    arandelaSegCamb: Boolean,
    observacionesAs: String,

    guiaControlRev: Boolean,
    guiaControlLimp: Boolean,
    guiaControlEng: Boolean,
    guiaControlCamb: Boolean,
    observacionesGc: String,

    tornilloHexagonalRev: Boolean,
    tornilloHexagonalLimp: Boolean,
    tornilloHexagonalEng: Boolean,
    tornilloHexagonalCamb: Boolean,
    observacionesTh: String,

    soporteCojineteRev: Boolean,
    soporteCojineteLimp: Boolean,
    soporteCojineteEng: Boolean,
    soporteCojineteCamb: Boolean,
    observacionesSc: String,

    bulonRoscableRev: Boolean,
    bulonRoscableLimp: Boolean,
    bulonRoscableEng: Boolean,
    bulonRoscableCamb: Boolean,
    observacionesBr: String,

    bulonRosacable2Rev: Boolean,
    bulonRosacable2Limp: Boolean,
    bulonRosacable2Eng: Boolean,
    bulonRosacable2Camb: Boolean,
    observacionesBr2: String,

    tuercaHexagonalRev: Boolean,
    tuercaHexagonalLimp: Boolean,
    tuercaHexagonalEng: Boolean,
    tuercaHexagonalCamb: Boolean,
    observacionesTuercaH: String,

    observaciones3: String,

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
module.exports = mongoose.model('mmmaM43', mmmaM43Schema);