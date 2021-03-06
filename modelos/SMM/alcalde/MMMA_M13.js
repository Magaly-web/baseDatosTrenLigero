'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM13Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    //1. MANTENIMIENTO DE PISO, SALON PASAJEROS, ARTICULACION Y CABINAS
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},
    operario3: { type: String, required: true},
    id_worker3: {type: String},
    operario4: { type: String, required: true},
    id_worker4: {type: String},
    operario5: { type: String, required: true},
    id_worker5: {type: String},
    operario6: { type: String, required: true},
    id_worker6: {type: String},
    operario7: { type: String, required: true},
    id_worker7: {type: String},
    operario8: { type: String, required: true},
    id_worker8: {type: String},
    
    descripcionAct: String,

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
module.exports = mongoose.model('mmmaM13', mmmaM13Schema);