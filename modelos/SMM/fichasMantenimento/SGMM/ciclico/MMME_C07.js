'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC07Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    bastidorLimp: Boolean,
    bastidorVer: Boolean,
    observacionesB: String,

    recipienteLimp: Boolean,
    recipienteFaire: Boolean,
    recipienteVer: Boolean,
    observacionesRf: String,

    cuerpoLimp: Boolean,
    cuerpoFaire: Boolean,
    cuerpoVer: Boolean,
    observacionesCs: String,

    valvulaLimp: Boolean,
    valvulaEng: Boolean,
    valvulaFaire: Boolean,
    valvulaVer: Boolean,
    observacionesVc: String,

    tanqueLimp: Boolean,
    tanqueFaire: Boolean,
    tanqueVer: Boolean,
    observacionesTr: String,

    filtroLimp: Boolean,
    filtroFaire: Boolean,
    filtroVer: Boolean,
    observacionesF: String,

    silenciadorLimp: Boolean,
    silenciadorFaire: Boolean,
    silenciadorVer: Boolean,
    observacionesS: String,

    coladeraLimp: Boolean,
    coladeraFaire: Boolean,
    coladeraVer: Boolean,
    observacionesCi: String,

    //ELECTROVALVULA DIRECTAIR 6
    operadorRev: Boolean,
    operadorLimp: Boolean,
    operadorLub: Boolean,
    operadorCamb: Boolean,
    observacionesOm: String,

    tuercaRev: Boolean,
    tuercaLimp: Boolean,
    tuercaLub: Boolean,
    tuercaCamb: Boolean,
    observacionesTb: String,

    etiquetaRev: Boolean,
    etiquetaLimp: Boolean,
    etiquetaLub: Boolean,
    etiquetaCamb: Boolean,
    observacionesEb: String,

    carcazaRev: Boolean,
    carcazaLimp: Boolean,
    carcazaLub: Boolean,
    carcazaCamb: Boolean,
    observacionesCb: String,

    roldanaRev: Boolean,
    roldanaLimp: Boolean,
    roldanaLub: Boolean,
    roldanaCamb: Boolean,
    observacionesR: String,

    camisaRev: Boolean,
    camisaLimp: Boolean,
    camisaLub: Boolean,
    camisaCamb: Boolean,
    observacionesC: String,

    bobinaRev: Boolean,
    bobinaLimp: Boolean,
    bobinaLub: Boolean,
    bobinaCamb: Boolean,
    observacionesBobina: String,

    guiaRev: Boolean,
    guiaLimp: Boolean,
    guiaLub: Boolean,
    guiaCamb: Boolean,
    observacionesG: String,

    resortecRev: Boolean,
    resortecLimp: Boolean,
    resortecLub: Boolean,
    resortecCamb: Boolean,
    observacionesRc: String,

    emboloRev: Boolean,
    emboloLimp: Boolean,
    emboloLub: Boolean,
    emboloCamb: Boolean,
    observacionesE: String,

    cuerpovRev: Boolean,
    cuerpovLimp: Boolean,
    cuerpovLub: Boolean,
    cuerpovCamb: Boolean,
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

    guiarRev: Boolean,
    guiarLimp: Boolean,
    guiarLub: Boolean,
    guiarCamb: Boolean,
    observacionesGr: String,

    tapaRev: Boolean,
    tapaLimp: Boolean,
    tapaLub: Boolean,
    tapaCamb: Boolean,
    observacionesTapa: String,

    tornillosRev: Boolean,
    tornillosLimp: Boolean,
    tornillosLub: Boolean,
    tornillosCamb: Boolean,
    observacionesT: String,

    oringsLub: Boolean,
    oringsCamb: Boolean,
    observacionesO: String,

    silenRev: Boolean,
    silenLimp: Boolean,
    silenCamb: Boolean,
    observacionesSilen: String,

    filtRev: Boolean,
    filtLimp: Boolean,
    filtCamb: Boolean,
    observacionesFiltro: String,

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
module.exports = mongoose.model('mmmeC07', mmmeC07Schema);