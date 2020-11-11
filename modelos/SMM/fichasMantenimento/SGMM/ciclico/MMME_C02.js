'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC02Schema = Schema({//esquema de la estructura que va a tener el formularios
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

    dispm1L: Boolean,
    dispm1R: Boolean,
    dispm1E: Boolean,
    dispm2L: Boolean,
    dispm2R: Boolean,
    dispm2E: Boolean,
    
    manguerasm1L: Boolean,
    manguerasm1R: Boolean,
    manguerasm1C: Boolean,
    manguerasm2L: Boolean,
    manguerasm2R: Boolean,
    manguerasm2C: Boolean,
    
    cubiertaFm1L: Boolean,
    cubiertaFm1R: Boolean,
    cubiertaFm1C: Boolean,
    cubiertaFm2L: Boolean,
    cubiertaFm2R: Boolean,
    cubiertaFm2C: Boolean,
    
    barram1L: Boolean,
    barram1R: Boolean,
    barram2L: Boolean,
    barram2R: Boolean,
    
    segurosm1L: Boolean,
    segurosm1R: Boolean,
    segurosm1C: Boolean,
    segurosm2L: Boolean,
    segurosm2R: Boolean,
    segurosm2C: Boolean,
    
    mecanismoAm1L: Boolean,
    mecanismoAm1R: Boolean,
    mecanismoAm1E: Boolean,
    mecanismoAm2L: Boolean,
    mecanismoAm2R: Boolean,
    mecanismoAm2E: Boolean,
    
    contactosm1L: Boolean,
    contactosm1R: Boolean,
    contactosm2L: Boolean,
    contactosm2R: Boolean,
    
    boquillaAm1L: Boolean,
    boquillaAm1R: Boolean,
    boquillaAm1C: Boolean,
    boquillaAm2L: Boolean,
    boquillaAm2R: Boolean,
    boquillaAm2C: Boolean,
    
    dispositivoRm1L: Boolean,
    dispositivoRm1R: Boolean,
    dispositivoRm1C: Boolean,
    dispositivoRm1E: Boolean,
    dispositivoRm2L: Boolean,
    dispositivoRm2R: Boolean,
    dispositivoRm2C: Boolean,
    dispositivoRm2E: Boolean,
    
    sellosm1L: Boolean,
    sellosm1R: Boolean,
    sellosm1C: Boolean,
    sellosm2L: Boolean,
    sellosm2R: Boolean,
    sellosm2C: Boolean,
    
    cabezaAm1L: Boolean,
    cabezaAm1R: Boolean,
    cabezaAm1C: Boolean,
    cabezaAm2L: Boolean,
    cabezaAm2R: Boolean,
    cabezaAm2C: Boolean,
    
    pistonm1L: Boolean,
    pistonm1R: Boolean,
    pistonm1C: Boolean,
    pistonm1E: Boolean,
    pistonm2L: Boolean,
    pistonm2R: Boolean,
    pistonm2C: Boolean,
    pistonm2E: Boolean,
    
    limpiezam1L: Boolean,
    limpiezam1R: Boolean,
    limpiezam1C: Boolean,
    limpiezam1E: Boolean,
    limpiezam2L: Boolean,
    limpiezam2R: Boolean,
    limpiezam2C: Boolean,
    limpiezam2E: Boolean,
    
    electrovalvulam1L: Boolean,
    electrovalvulam1R: Boolean,
    electrovalvulam1C: Boolean,
    electrovalvulam1E: Boolean,
    electrovalvulam2L: Boolean,
    electrovalvulam2R: Boolean,
    electrovalvulam2C: Boolean,
    electrovalvulam2E: Boolean,
    
    electrovalvulaAm1L: Boolean,
    electrovalvulaAm1R: Boolean,
    electrovalvulaAm1C: Boolean,
    electrovalvulaAm1E: Boolean,
    electrovalvulaAm2L: Boolean,
    electrovalvulaAm2R: Boolean,
    electrovalvulaAm2C: Boolean,
    electrovalvulaAm2E: Boolean,
    
    revisionm1L: Boolean,
    revisionm1R: Boolean,
    revisionm1C: Boolean,
    revisionm1E: Boolean,
    revisionm2L: Boolean,
    revisionm2R: Boolean,
    revisionm2C: Boolean,
    revisionm2E: Boolean,
    
    alturaM1: String,
    alturaM2: String,
    llenadoM1: String,
    llenadoM2: String,

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
module.exports = mongoose.model('mmmeC02', mmmeC02Schema);