'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM42Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    //MEDIDAS DE REFERENCIA
    distanciaTapaEmbolo: Boolean,
    observacionesDte: String,

    distanciaTapaAnillo: Boolean,
    observacionesDta: String,

    //INSPECCION DE PIEZA
    bridaSujeccion: Boolean,
    observacionesBs: String,

    tapa: Boolean,
    observacionesT: String,

    tuercaPresion: Boolean,
    observacionesTp: String,

    husillo: Boolean,
    observacionesHusillo: String,

    //PRUEBAS DESARROLLADAS
    resistencia: Boolean,
    observacionesR: String,

    hermeticidad: Boolean,
    observacionesH: String,

    //MANTENIMIENTO
    //MEDIDA CILINDRO 178+0.6 MAXIMO DESGASTE: 179.00
    a_b: String,
    c_d: String,
    estadoGuarnicion: String,
    estadoCuerpoC: String,

    observaciones1: String,

    //PAG 2
    palancaFrenoRev: Boolean,
    palancaFrenoLimp: Boolean,
    palancaFrenoEng: Boolean,
    palancaFrenoCamb: Boolean,
    observacionesPf: String,

    casquillosRev: Boolean,
    casquillosLimp: Boolean,
    casquillosEng: Boolean,
    casquillosCamb: Boolean,
    observacionesC: String,

    barraTraccionRev: Boolean,
    barraTraccionLimp: Boolean,
    barraTraccionEng: Boolean,
    barraTraccionCamb: Boolean,
    observacionesBt: String,

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

    bulonRoscableRev: Boolean,
    bulonRoscableLimp: Boolean,
    bulonRoscableEng: Boolean,
    bulonRoscableCamb: Boolean,
    observacionesBr: String,

    resorteDiscoRev: Boolean,
    resorteDiscoLimp: Boolean,
    resorteDiscoEng: Boolean,
    resorteDiscoCamb: Boolean,
    observacionesRd: String,

    tuercaHexagonalM24Rev: Boolean,
    tuercaHexagonalM24Limp: Boolean,
    tuercaHexagonalM24Eng: Boolean,
    tuercaHexagonalM24Camb: Boolean,
    observacionesThM24: String,

    bulonRosacable2Rev: Boolean,
    bulonRosacable2Limp: Boolean,
    bulonRosacable2Eng: Boolean,
    bulonRosacable2Camb: Boolean,
    observacionesBr2: String,

    casquilloCortoRev: Boolean,
    casquilloCortoLimp: Boolean,
    casquilloCortoEng: Boolean,
    casquilloCortoCamb: Boolean,
    observacionesCc: String,

    casquilloConicoRev: Boolean,
    casquilloConicoLimp: Boolean,
    casquilloConicoEng: Boolean,
    casquilloConicoCamb: Boolean,
    observacionesCconico: String,

    casquilloLargoRev: Boolean,
    casquilloLargoLimp: Boolean,
    casquilloLargoEng: Boolean,
    casquilloLargoCamb: Boolean,
    observacionesCl: String,

    tuercaHexagonalM20Rev: Boolean,
    tuercaHexagonalM20Limp: Boolean,
    tuercaHexagonalM20Eng: Boolean,
    tuercaHexagonalM20Camb: Boolean,
    observacionesThM20: String,

    observaciones2: String,

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
module.exports = mongoose.model('mmmaM42', mmmaM42Schema);