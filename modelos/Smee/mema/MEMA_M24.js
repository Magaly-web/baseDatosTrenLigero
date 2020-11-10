const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM24Schema = new Schema({

    trainModel: { type: String, required: true },//tren programado
    kilometraje: { type: Number },
    
    date_inicio: { type: String },
    date_termino: { type: String },
    
    dateultmant: { type: String },
    datepromant: { type: String },

    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},
    obs1: String,

     //----------------------------

     //Cofre Cea
     ceacv: String,
     ceacl: String,
     ceacr: String,
     ceacf: String,

     ceadcv: String,
     ceadcl: String,
     ceadcr: String,
     ceadcf: String,

     ceatsv: String,
     ceatsl: String,
     ceatsr: String,
     ceatsf: String,

     ceatlv: String,
     ceatll: String,
     ceatlr: String,
     ceatlf: String,

     ceaspv: String,
     ceaspl: String,
     ceaspr: String,
     ceaspf: String,

     //Voltaje y Corriente

     vcu01v: String,
     vcu01l: String,
     vcu01r: String,
     vcu01f: String,

     vcu02v: String,
     vcu02l: String,
     vcu02r: String,
     vcu02f: String,

     vcu03v: String,
     vcu03l: String,
     vcu03r: String,
     vcu03f: String,

     vct1t3v: String,
     vct1t3l: String,
     vct1t3r: String,
     vct1t3f: String,

     //Fuentes de voltaje y Corriente

     a20v: String,
     a20l: String,
     a20r: String,
     a20f: String,

     a21v: String,
     a21l: String,
     a21r: String,
     a21f: String,

     obs2: String,

     //Semiconductores de Potencia
     d01v: String,
     d01l: String,
     d01r: String,
     d01i: String,

     d02v: String,
     d02l: String,
     d02r: String,
     d02i: String,

     d03v: String,
     d03l: String,
     d03r: String,
     d03i: String,

     d04v: String,
     d04l: String,
     d04r: String,
     d04i: String,

     d06v: String,
     d06l: String,
     d06r: String,
     d06i: String,

     d07v: String,
     d07l: String,
     d07r: String,
     d07i: String,

     d5152v: String,
     d5152l: String,
     d5152r: String,
     d5152i: String,

     d1112v: String,
     d1112l: String,
     d1112r: String,
     d1112i: String,

     d2122v: String,
     d2122l: String,
     d2122r: String,
     d2122i: String,

     d3132v: String,
     d3132l: String,
     d3132r: String,
     d3132i: String,

     th06v: String,
     th06l: String,
     th06r: String,
     th06i: String,

     th07v: String,
     th07l: String,
     th07r: String,
     th07i: String,

     th08v: String,
     th08l: String,
     th08r: String,
     th08i: String,

     th09v: String,
     th09l: String,
     th09r: String,
     th09i: String,

     th1112v: String,
     th1112l: String,
     th1112r: String,
     th1112i: String,

     th3132v: String,
     th3132l: String,
     th3132r: String,
     th3132i: String,

     th5152v: String,
     th5152l: String,
     th5152r: String,
     th5152i: String,

     //Tarjetas electronicas
     a01v: String,
     a01l: String,
     a01r: String,
     a01tc: String,

     a02v: String,
     a02l: String,
     a02r: String,
     a02tc: String,

     a03v: String,
     a03l: String,
     a03r: String,
     a03tc: String,

     a04v: String,
     a04l: String,
     a04r: String,
     a04tc: String,

     a06v: String,
     a06l: String,
     a06r: String,
     a06tc: String,

     a07v: String,
     a07l: String,
     a07r: String,
     a07tc: String,

     a08v: String,
     a08l: String,
     a08r: String,
     a08tc: String,

     a09v: String,
     a09l: String,
     a09r: String,
     a09tc: String,

     a1112v: String,
     a1112l: String,
     a1112r: String,
     a1112tc: String,

     a3132v: String,
     a3132l: String,
     a3132r: String,
     a3132tc: String,

     a5152v: String,
     a5152l: String,
     a5152r: String,
     a5152tc: String,

     a10v: String,
     a10l: String,
     a10r: String,
     a10tc: String,

     a15v: String,
     a15l: String,
     a15r: String,
     a15tc: String,

     a16v: String,
     a16l: String,
     a16r: String,
     a16tc: String,

     a22v: String,
     a22l: String,
     a22r: String,
     a22tc: String,

     //Revision Componentes Electricos

     l01v: String,
     l01l: String,
     l01r: String,
     l01p: String,

     l02v: String,
     l02l: String,
     l02r: String,
     l02p: String,

     l03v: String,
     l03l: String,
     l03r: String,
     l03p: String,

     l04v: String,
     l04l: String,
     l04r: String,
     l04p: String,

     t4v: String,
     t4l: String,
     t4r: String,
     t4p: String,

     r01v: String,
     r01l: String,
     r01r: String,
     r01p: String,

     r02v: String,
     r02l: String,
     r02r: String,
     r02p: String,

     r03v: String,
     r03l: String,
     r03r: String,
     r03p: String,

     r04v: String,
     r04l: String,
     r04r: String,
     r04p: String,

     r05v: String,
     r05l: String,
     r05r: String,
     r05p: String,

     r06v: String,
     r06l: String,
     r06r: String,
     r06p: String,

     r07v: String,
     r07l: String,
     r07r: String,
     r07p: String,

     r08v: String,
     r08l: String,
     r08r: String,
     r08p: String,

     r09v: String,
     r09l: String,
     r09r: String,
     r09p: String,

     r10v: String,
     r10l: String,
     r10r: String,
     r10p: String,

     r11v: String,
     r11l: String,
     r11r: String,
     r11p: String,

     r121v: String,
     r121l: String,
     r121r: String,
     r121p: String,

     r122v: String,
     r122l: String,
     r122r: String,
     r122p: String,

     r13v: String,
     r13l: String,
     r13r: String,
     r13p: String,

     r14v: String,
     r14l: String,
     r14r: String,
     r14p: String,

     r15v: String,
     r15l: String,
     r15r: String,
     r15p: String,

     r16v: String,
     r16l: String,
     r16r: String,
     r16p: String,

     r17v: String,
     r17l: String,
     r17r: String,
     r17p: String,

     r18v: String,
     r18l: String,
     r18r: String,
     r18p: String,

     c01v: String,
     c01l: String,
     c01r: String,
     c01p: String,

     c02v: String,
     c02l: String,
     c02r: String,
     c02p: String,

     c03v: String,
     c03l: String,
     c03r: String,
     c03p: String,

     c04v: String,
     c04l: String,
     c04r: String,
     c04p: String,

     c05v: String,
     c05l: String,
     c05r: String,
     c05p: String,

     c06v: String,
     c06l: String,
     c06r: String,
     c06p: String,

     c07v: String,
     c07l: String,
     c07r: String,
     c07p: String,

     c08v: String,
     c08l: String,
     c08r: String,
     c08p: String,

     c09v: String,
     c09l: String,
     c09r: String,
     c09p: String,

     c10v: String,
     c10l: String,
     c10r: String,
     c10p: String,

     c11v: String,
     c11l: String,
     c11r: String,
     c11p: String,

     c12v: String,
     c12l: String,
     c12r: String,
     c12p: String,

     //Arnes de cofre
     cdcv: String,
     cdcl: String,
     cdcr: String,
     cdcf: String,

     catv: String,
     catl: String,
     catr: String,
     catf: String,

     obs3: String,

     //Materiales
materialUtilizado: {
    numberOfMaterial: Number,    
    arr: [{
        _id: String,
        code: String,
        description: String,
        voucherNumber: String,
        quantity: String,
        unit: String
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

module.exports = mongoose.model('memaM24', memaM24Schema);
