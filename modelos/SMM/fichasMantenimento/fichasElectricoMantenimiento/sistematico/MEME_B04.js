'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var memeB04Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    fusiblesm1R: Boolean,
    fusiblesm2R: Boolean,

    relevadoresm1L: Boolean,
    relevadoresm1R: Boolean,
    relevadoresm2L: Boolean,
    relevadoresm2R: Boolean,
    
    cableadom1A: Boolean,
    cableadom1L: Boolean,
    cableadom1R: Boolean,
    cableadom2A: Boolean,
    cableadom2L: Boolean,
    cableadom2R: Boolean,

    manipuladorm1A: Boolean,
    manipuladorm1L: Boolean,
    manipuladorm1R: Boolean,
    manipuladorm2A: Boolean,
    manipuladorm2L: Boolean,
    manipuladorm2R: Boolean,
    
    pupitreBm1A: Boolean,
    pupitreBm1L: Boolean,
    pupitreBm1R: Boolean,
    pupitreBm2A: Boolean,
    pupitreBm2L: Boolean,
    pupitreBm2R: Boolean,
    
    pupitrePm1A: Boolean,
    pupitrePm1L: Boolean,
    pupitrePm1R: Boolean,
    pupitrePm2A: Boolean,
    pupitrePm2L: Boolean,
    pupitrePm2R: Boolean,
    
    tabiqueBm1A: Boolean,
    tabiqueBm1L: Boolean,
    tabiqueBm1R: Boolean,
    tabiqueBm2A: Boolean,
    tabiqueBm2L: Boolean,
    tabiqueBm2R: Boolean,
    
    tabiqueCm1A: Boolean,
    tabiqueCm1L: Boolean,
    tabiqueCm1R: Boolean,
    tabiqueCm2A: Boolean,
    tabiqueCm2L: Boolean,
    tabiqueCm2R: Boolean,
    
    tabiqueFm1L: Boolean,
    tabiqueFm1R: Boolean,
    tabiqueFm2L: Boolean,
    tabiqueFm2R: Boolean,

    ventanasDm1L: Boolean,
    ventanasDm1R: Boolean,
    ventanasDm2L: Boolean,
    ventanasDm2R: Boolean,
    
    ventanasIm1L: Boolean,
    ventanasIm1R: Boolean,
    ventanasIm2L: Boolean,
    ventanasIm2R: Boolean,
    
    parabrisasm1L: Boolean,
    parabrisasm1R: Boolean,
    parabrisasm2L: Boolean,
    parabrisasm2R: Boolean,
    
    cristalDm1L: Boolean,
    cristalDm1R: Boolean,
    cristalDm2L: Boolean,
    cristalDm2R: Boolean,
    
    timpanom1A: Boolean,
    timpanom1L: Boolean,
    timpanom1R: Boolean,
    timpanom2L: Boolean,
    timpanom2R: Boolean,
    
    asientoAm1A: Boolean,
    asientoAm1L: Boolean,
    asientoAm1R: Boolean,
    asientoAm2A: Boolean,
    asientoAm2L: Boolean,
    asientoAm2R: Boolean,
    
    asientoRm1A: Boolean,
    asientoRm1L: Boolean,
    asientoRm1R: Boolean,
    asientoRm2A: Boolean,
    asientoRm2L: Boolean,
    asientoRm2R: Boolean,
    
    asientoBm1A: Boolean,
    asientoBm1L: Boolean,
    asientoBm1R: Boolean,
    asientoBm1E: Boolean,
    asientoBm2A: Boolean,
    asientoBm2L: Boolean,
    asientoBm2R: Boolean,
    asientoBm2E: Boolean,
    
    letreroMm1L: Boolean,
    letreroMm1R: Boolean,
    letreroMm1E: Boolean,
    letreroMm2L: Boolean,
    letreroMm2R: Boolean,
    letreroMm2E: Boolean,
    
    letreroMam1A: Boolean,
    letreroMam1L: Boolean,
    letreroMam1R: Boolean,
    letreroMam2A: Boolean,
    letreroMam2L: Boolean,
    letreroMam2R: Boolean,
    
    letreroManm1A: Boolean,
    letreroManm1L: Boolean,
    letreroManm1R: Boolean,
    letreroManm2A: Boolean,
    letreroManm2L: Boolean,
    letreroManm2R: Boolean,

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
module.exports = mongoose.model('memeB04', memeB04Schema);