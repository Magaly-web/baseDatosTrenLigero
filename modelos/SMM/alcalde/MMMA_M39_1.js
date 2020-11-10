'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM39_1Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    operario1: { type: String, required: true},
    id_worker1: {type: String},

    cuboRev: Boolean,
    cuboLimp: Boolean,
    cuboCamb: Boolean,
    observacionesC: String,

    llantaRev: Boolean,
    llantaLimp: Boolean,
    llantaCamb: Boolean,
    observacionesLl: String,

    anilloCuniaRev: Boolean,
    anilloCuniaLimp: Boolean,
    anilloCuniaCamb: Boolean,
    observacionesAc: String,

    anilloGomaRev: Boolean,
    anilloGomaLimp: Boolean,
    anilloGomaCamb: Boolean,
    observacionesAg: String,

    conductoresElectricosRev: Boolean,
    conductoresElectricosLimp: Boolean,
    conductoresElectricosCamb: Boolean,
    observacionesCe: String,

    tornilloHexagonalRev: Boolean,
    tornilloHexagonalLimp: Boolean,
    tornilloHexagonalCamb: Boolean,
    observacionesTh: String,

    arandelaElasticaRev: Boolean,
    arandelaElasticaLimp: Boolean,
    arandelaElasticaCamb: Boolean,
    observacionesAe: String,

    tornillosDurlokRev: Boolean,
    tornillosDurlokLimp: Boolean,
    tornillosDurlokCamb: Boolean,
    observacionesTd: String,

    anilloObtuladorRev: Boolean,
    anilloObtuladorLimp: Boolean,
    anilloObtuladorCamb: Boolean,
    observacionesAo: String,

    diametroRuedaRev: Boolean,
    diametroRuedaLimp: Boolean,
    diametroRuedaCamb: Boolean,
    observacionesDr: String,

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
module.exports = mongoose.model('mmmaM39_1', mmmaM39_1Schema);