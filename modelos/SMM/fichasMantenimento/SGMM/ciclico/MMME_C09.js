'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC09Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    
    operarioM1Izq: { type: String, required: true},
    id_workerM1Izq: {type: String},
    operarioM1Der: { type: String, required: true},
    id_workerM1Der: {type: String},
    operarioEngrasado: { type: String, required: true},
    id_workerEngrasado: {type: String},
    unidad: { type: Number, required: true },

    operarioM2Izq: { type: String, required: true},
    id_workerM2Izq: {type: String},
    operarioM2Der: { type: String, required: true},
    id_workerM2Der: {type: String},
    operarioEngrasado2: { type: String, required: true},
    id_workerEngrasado2: {type: String},

    limpiezam1D1: Boolean,
    limpiezam1D2: Boolean,
    limpiezam1D3: Boolean,
    limpiezam1I1: Boolean,
    limpiezam1I2: Boolean,
    limpiezam1I3: Boolean,
    limpiezam2D1: Boolean,
    limpiezam2D2: Boolean,
    limpiezam2D3: Boolean,
    limpiezam2I1: Boolean,
    limpiezam2I2: Boolean,
    limpiezam2I3: Boolean,

    revisionm1D1: Boolean,
    revisionm1D2: Boolean,
    revisionm1D3: Boolean,
    revisionm1I1: Boolean,
    revisionm1I2: Boolean,
    revisionm1I3: Boolean,
    revisionm2D1: Boolean,
    revisionm2D2: Boolean,
    revisionm2D3: Boolean,
    revisionm2I1: Boolean,
    revisionm2I2: Boolean,
    revisionm2I3: Boolean,

    lubricacionm1D1: Boolean,
    lubricacionm1D2: Boolean,
    lubricacionm1D3: Boolean,
    lubricacionm1I1: Boolean,
    lubricacionm1I2: Boolean,
    lubricacionm1I3: Boolean,
    lubricacionm2D1: Boolean,
    lubricacionm2D2: Boolean,
    lubricacionm2D3: Boolean,
    lubricacionm2I1: Boolean,
    lubricacionm2I2: Boolean,
    lubricacionm2I3: Boolean,

    limpiezaDm1D1: Boolean,
    limpiezaDm1D2: Boolean,
    limpiezaDm1D3: Boolean,
    limpiezaDm1I1: Boolean,
    limpiezaDm1I2: Boolean,
    limpiezaDm1I3: Boolean,
    limpiezaDm2D1: Boolean,
    limpiezaDm2D2: Boolean,
    limpiezaDm2D3: Boolean,
    limpiezaDm2I1: Boolean,
    limpiezaDm2I2: Boolean,
    limpiezaDm2I3: Boolean,

    limpiezaBm1D1: Boolean,
    limpiezaBm1D2: Boolean,
    limpiezaBm1D3: Boolean,
    limpiezaBm1I1: Boolean,
    limpiezaBm1I2: Boolean,
    limpiezaBm1I3: Boolean,
    limpiezaBm2D1: Boolean,
    limpiezaBm2D2: Boolean,
    limpiezaBm2D3: Boolean,
    limpiezaBm2I1: Boolean,
    limpiezaBm2I2: Boolean,
    limpiezaBm2I3: Boolean,

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
module.exports = mongoose.model('mmmeC09', mmmeC09Schema);