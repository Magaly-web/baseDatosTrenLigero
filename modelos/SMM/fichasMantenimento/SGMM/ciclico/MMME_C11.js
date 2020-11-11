'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmeC11Schema = Schema({//esquema de la estructura que va a tener el formulario
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

    bisagraSm1Limp: Boolean,
    bisagraSm1Rev: Boolean,
    bisagraSm1Lub: Boolean,
    bisagraSm1Ajuste: Boolean,
    bisagraSm2Limp: Boolean,
    bisagraSm2Rev: Boolean,
    bisagraSm2Lub: Boolean,
    bisagraSm2Ajuste: Boolean,

    bisagraIm1Limp: Boolean,
    bisagraIm1Rev: Boolean,
    bisagraIm1Lub: Boolean,
    bisagraIm1Ajuste: Boolean,
    bisagraIm2Limp: Boolean,
    bisagraIm2Rev: Boolean,
    bisagraIm2Lub: Boolean,
    bisagraIm2Ajuste: Boolean,

    //CHAPA Y CONTRA CHAPA PARA TE-90 Y TE-95
    resorteSm1Limp: Boolean,
    resorteSm1Rev: Boolean,
    resorteSm1Lub: Boolean,
    resorteSm2Limp: Boolean,
    resorteSm2Rev: Boolean,
    resorteSm2Lub: Boolean,
    
    resorteCm1Limp: Boolean,
    resorteCm1Rev: Boolean,
    resorteCm1Lub: Boolean,
    resorteCm2Limp: Boolean,
    resorteCm2Rev: Boolean,
    resorteCm2Lub: Boolean,
    
    resorteIm1Limp: Boolean,
    resorteIm1Rev: Boolean,
    resorteIm1Lub: Boolean,
    resorteIm2Limp: Boolean,
    resorteIm2Rev: Boolean,
    resorteIm2Lub: Boolean,
    
    tornilleriam1Limp: Boolean,
    tornilleriam1Rev: Boolean,
    tornilleriam1Lub: Boolean,
    tornilleriam2Limp: Boolean,
    tornilleriam2Rev: Boolean,
    tornilleriam2Lub: Boolean,
    
    //CHAPA Y CONTRA CHAPA PARA TE-06
    placam1Limp: Boolean,
    placam1Rev: Boolean,
    placam1Lub: Boolean,
    placam2Limp: Boolean,
    placam2Rev: Boolean,
    placam2Lub: Boolean,
    
    resortesm1Limp: Boolean,
    resortesm1Rev: Boolean,
    resortesm1Lub: Boolean,
    resortesm2Limp: Boolean,
    resortesm2Rev: Boolean,
    resortesm2Lub: Boolean,
    
    mecanismom1Limp: Boolean,
    mecanismom1Rev: Boolean,
    mecanismom1Ajuste: Boolean,
    mecanismom2Limp: Boolean,
    mecanismom2Rev: Boolean,
    mecanismom2Ajuste: Boolean,

    cilindrom1Limp: Boolean,
    cilindrom1Rev: Boolean,
    cilindrom2Limp: Boolean,
    cilindrom2Rev: Boolean,
    
    tornilleria06m1Limp: Boolean,
    tornilleria06m1Rev: Boolean,
    tornilleria06m1Lub: Boolean,
    tornilleria06m2Limp: Boolean,
    tornilleria06m2Rev: Boolean,
    tornilleria06m2Lub: Boolean,
    
    //ASIENTO DE OPERADOR
    basem1Limp: Boolean,
    basem1Rev: Boolean,
    basem1Lub: Boolean,
    basem2Limp: Boolean,
    basem2Rev: Boolean,
    basem2Lub: Boolean,

    asientom1Limp: Boolean,
    asientom1Rev: Boolean,
    asientom1Lub: Boolean,
    asientom2Limp: Boolean,
    asientom2Rev: Boolean,
    asientom2Lub: Boolean,

    respaldom1Limp: Boolean,
    respaldom1Rev: Boolean,
    respaldom2Limp: Boolean,
    respaldom2Rev: Boolean,
        
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
module.exports = mongoose.model('mmmeC11', mmmeC11Schema);