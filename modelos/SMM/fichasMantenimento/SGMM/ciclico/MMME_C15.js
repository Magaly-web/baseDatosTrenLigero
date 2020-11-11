'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC15Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},
    unidad: { type: Number, required: true },

    filtroCamb: Boolean,
    observacionesF: String,

    valvulaLimp: Boolean,
    valvulaInsp: Boolean,
    valvulaAjust: Boolean,
    valvulaCamb: Boolean,
    observacionesV: String,

    //SEPARADOR DE ACEITE
    cuerpoCLimp: Boolean,
    cuerpoCInsp: Boolean,
    observacionesCc: String,

    elementoCamb: Boolean,
    observacionesE: String,

    valvulaRLimp: Boolean,
    valvulaRInsp: Boolean,
    valvulaRAjust: Boolean,
    valvulaRCamb: Boolean,
    observacionesVr: String,

    valvulaSLimp: Boolean,
    valvulaSInsp: Boolean,
    valvulaSAjust: Boolean,
    valvulaSCamb: Boolean,
    observacionesVs: String,

    mirillaNaLimp: Boolean,
    milillaNaInsp: Boolean,
    observacionesMna: String,

    mirillaALimp: Boolean,
    mirillaAInsp: Boolean,
    observacionesMa: String,

    //OTROS
    radiadorLimp: Boolean,
    radiadorInsp: Boolean,
    radiadorAjust: Boolean,
    observacionesR: String,

    cartuchoLub: Boolean,
    cartuchoCamb: Boolean,
    observacionesC: String,

    interruptorLimp: Boolean,
    interruptorInsp: Boolean,
    interruptorAjust: Boolean,
    interruptorCamb: Boolean,
    observacionesI: String,

    acoplamientoLimp: Boolean,
    acoplamientoInsp: Boolean,
    acoplamientoAjust: Boolean,
    acoplamientoCamb: Boolean,
    observacionesA: String,

    cuerpoULimp: Boolean,
    cuerpoUInsp: Boolean,
    cuerpoUAjust: Boolean,
    cuerpoUCamb: Boolean,
    observacionesCu: String,

    cuerpoBLimp: Boolean,
    cuerpoBInsp: Boolean,
    cuerpoBAjust: Boolean,
    cuerpoBCamb: Boolean,
    observacionesCb: String,

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
module.exports = mongoose.model('mmmeC15', mmmeC15Schema);