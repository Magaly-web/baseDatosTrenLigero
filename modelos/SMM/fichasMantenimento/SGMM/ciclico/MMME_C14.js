'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC14Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    //ELECTOVALVULA SERIE KUTILIZADA EN APERTURA Y CIERRE PUERTAS DE SALON DE PASAJEROS TE-90 Y TE-95
    tornillos2x2Rev: Boolean,
    tornillos2x2Limp: Boolean,
    tornillos2x2Camb: Boolean,
    observacionesT2x2: String,

    tornillosPRev: Boolean,
    tornillosPLimp: Boolean,
    tornillosPCamb: Boolean,
    observacionesT5_8: String,

    tuercaUNFRev: Boolean,
    tuercaUNFLimp: Boolean,
    tuercaUNFCamb: Boolean,
    observacionesTunf: String,

    tuercaBkRev: Boolean,
    tuercaBkLimp: Boolean,
    tuercaBkCamb: Boolean,
    observacionesTbk: String,

    carreteRev: Boolean,
    carreteLimp: Boolean,
    carreteCamb: Boolean,
    observacionesC: String,

    selloRev: Boolean,
    selloLimp: Boolean,
    selloLub: Boolean,
    selloCamb: Boolean,
    observacionesS: String,

    resorteKRev: Boolean,
    resorteKLimp: Boolean,
    resorteKLub: Boolean,
    resorteKCamb: Boolean,
    observacionesR: String,

    camisaKRev: Boolean,
    camisaKLimp: Boolean,
    camisaKLub: Boolean,
    camisaKCamb: Boolean,
    observacionesCk: String,

    retenedorRev: Boolean,
    retenedorLimp: Boolean,
    retenedorLub: Boolean,
    retenedorCamb: Boolean,
    observacionesRk: String,

    vastagoKRev: Boolean,
    vastagoKLimp: Boolean,
    vastagoKLub: Boolean,
    vastagoKCamb: Boolean,
    observacionesVk: String,

    actuadorRev: Boolean,
    actuadorLimp: Boolean,
    actuadorLub: Boolean,
    actuadorCamb: Boolean,
    observacionesAd: String,

    asientoRev: Boolean,
    asientoLimp: Boolean,
    asientoLub: Boolean,
    asientoCamb: Boolean,
    observacionesA: String,

    emboloKRev: Boolean,
    emboloKLimp: Boolean,
    emboloKLub: Boolean,
    emboloKCamb: Boolean,
    observacionesEk: String,

    resorteCKRev: Boolean,
    resorteCKLimp: Boolean,
    resorteCKLub: Boolean,
    resorteCKCamb: Boolean,
    observacionesRck: String,

    guiaRev: Boolean,
    guiaLimp: Boolean,
    guiaLub: Boolean,
    guiaCamb: Boolean,
    observacionesG: String,

    protectorRev: Boolean,
    protectorLimp: Boolean,
    protectorCamb: Boolean,
    observacionesP: String,

    bobinaKRev: Boolean,
    bobinaKLimp: Boolean,
    bobinaKCamb: Boolean,
    observacionesB: String,

    roldanaKRev: Boolean,
    roldanaKLimp: Boolean,
    roldanaKCamb: Boolean,
    observacionesRoldanaK: String,

    carcazaRev: Boolean,
    carcazaLimp: Boolean,
    carcazaCamb: Boolean,
    observacionesCarcaza: String,

    oringsKLub: Boolean,
    oringsKCamb: Boolean,
    observacionesOk: String,

    //ELECTROVALVULA DECTAIR 6 UTILIZADA EN CLAXON, APERTURA Y CIERRE PUERTAS DE OPERADOR TE-90 Y TE-95
    operadorMRev: Boolean,
    operadorMLimp: Boolean,
    operadorMLub: Boolean,
    operadorMCamb: Boolean,
    observacionesOm: String,
    
    tuercaBRev: Boolean,
    tuercaBLimp: Boolean,
    tuercaBLub: Boolean,
    tuercaBCamb: Boolean,
    observacionesTb: String,

    etiquetaRev: Boolean,
    etiquetaLimp: Boolean,
    etiquetaLub: Boolean,
    etiquetaCamb: Boolean,
    observacionesEb: String,

    carcazaBRev: Boolean,
    carcazaBLimp: Boolean,
    carcazaBLub: Boolean,
    carcazaBCamb: Boolean,
    observacionesCb: String,

    roldanaRev: Boolean,
    roldanaLimp: Boolean,
    roldanaLub: Boolean,
    roldanaCamb: Boolean,
    observacionesRoldana: String,

    camisaRev: Boolean,
    camisaLimp: Boolean,
    camisaLub: Boolean,
    camisaCamb: Boolean,
    observacionesCamisa: String,

    bobinaRev: Boolean,
    bobinaLimp: Boolean,
    bobinaLub: Boolean,
    bobinaCamb: Boolean,
    observacionesBobina: String,

    guiaERev: Boolean,
    guiaELimp: Boolean,
    guiaELub: Boolean,
    guiaECamb: Boolean,
    observacionesGuiaE: String,

    resorteCRev: Boolean,
    resorteCLimp: Boolean,
    resorteCLub: Boolean,
    resorteCCamb: Boolean,
    observacionesRc: String,

    emboloRev: Boolean,
    emboloLimp: Boolean,
    emboloLub: Boolean,
    emboloCamb: Boolean,
    observacionesE: String,

    cuerpoVRev: Boolean,
    cuerpoVLimp: Boolean,
    cuerpoVLub: Boolean,
    cuerpoVCamb: Boolean,
    observacionesCv: String,

    vastagoRev: Boolean,
    vastagoLimp: Boolean,
    vastagoLub: Boolean,
    vastagoCamb: Boolean,
    observacionesV: String,

    bujeRev: Boolean,
    bujeLimp: Boolean,
    bujeLub: Boolean,
    bujeCamb: Boolean,
    observacionesBuje: String,

    resorteRev: Boolean,
    resorteLimp: Boolean,
    resorteLub: Boolean,
    resorteCamb: Boolean,
    observacionesResorte: String,

    guiaRRev: Boolean,
    guiaRLimp: Boolean,
    guiaRLub: Boolean,
    guiaRCamb: Boolean,
    observacionesGuiaR: String,

    tapaRev: Boolean,
    tapaLimp: Boolean,
    tapaLub: Boolean,
    tapaCamb: Boolean,
    observacionesTapa: String,

    tornillosRev: Boolean,
    tornillosLimp: Boolean,
    tornillosLub: Boolean,
    tornillosCamb: Boolean,
    observacionesTornillos: String,

    oringsLub: Boolean,
    oringsCamb: Boolean,
    observacionesOrings: String,

    //ELECTROVALVULA SERIE B6 EN APERTURA Y CIERRE PUERTAS DE SALON DE PASAJEROS Y OPERADOR TE-06
    cuerpoRev: Boolean,
    cuerpoLimp: Boolean, 
    cuerpoLub: Boolean,
    cuerpoCamb: Boolean,
    observacionesCb6: String,

    resorteB6Rev: Boolean,
    resorteB6Limp: Boolean, 
    resorteB6Lub: Boolean,
    resorteB6Camb: Boolean,
    observacionesRb6: String,

    spoolRev: Boolean,
    spoolLimp: Boolean, 
    spoolLub: Boolean,
    spoolCamb: Boolean,
    observacionesSpool: String,

    emboloB6Rev: Boolean,
    emboloB6Limp: Boolean, 
    emboloB6Lub: Boolean,
    emboloB6Camb: Boolean,
    observacionesEb6: String,

    cuerpoPRev: Boolean,
    cuerpoPLimp: Boolean, 
    cuerpoPLub: Boolean,
    cuerpoPCamb: Boolean,
    observacionesCp: String,

    oringsPRev: Boolean,
    oringsPLimp: Boolean, 
    oringsPLub: Boolean,
    oringsPCamb: Boolean,
    observacionesOp: String,

    operadorRev: Boolean,
    operadorLimp: Boolean, 
    operadorLub: Boolean,
    operadorCamb: Boolean,
    observacionesO: String,

    empaqueORev: Boolean,
    empaqueOLimp: Boolean, 
    empaqueOLub: Boolean,
    empaqueOCamb: Boolean,
    observacionesEo: String,

    balinRev: Boolean,
    balinLimp: Boolean, 
    balinLub: Boolean,
    balinCamb: Boolean,
    observacionesBb6: String,

    solenoideRev: Boolean,
    solenoideLimp: Boolean, 
    solenoideLub: Boolean,
    solenoideCamb: Boolean,
    observacionesSb6: String,

    tuercaRev: Boolean,
    tuercaLimp: Boolean, 
    tuercaLub: Boolean,
    tuercaCamb: Boolean,
    observacionesT: String,

    inductanciaLRev: Boolean,
    inductanciaLLimp: Boolean, 
    inductanciaLCamb: Boolean,
    observacionesIl: String,

    inductanciaRRev: Boolean,
    inductanciaRLimp: Boolean, 
    inductanciaRCamb: Boolean,
    observacionesIr: String,

    filtroRev: Boolean,
    filtroLimp: Boolean, 
    filtroCamb: Boolean,
    observacionesF: String,

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
module.exports = mongoose.model('mmmeC14', mmmeC14Schema);